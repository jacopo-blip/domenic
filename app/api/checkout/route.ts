import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { getStripePriceId, PRODUCT_DEFINITIONS } from "@/lib/stripe/products";
import type { SanityVoucherProductType } from "@/sanity/lib/queries";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

type CheckoutInput = {
  productType: SanityVoucherProductType;
  customAmount?: number; // in cents, only for voucher_custom
  buyerEmail: string;
  buyerName: string;
  recipientName?: string;
};

function isValidProductType(value: unknown): value is SanityVoucherProductType {
  return typeof value === "string" && value in PRODUCT_DEFINITIONS;
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateInput(body: unknown): CheckoutInput | { error: string } {
  if (!body || typeof body !== "object") return { error: "Invalid JSON body" };
  const b = body as Record<string, unknown>;

  if (!isValidProductType(b.productType)) return { error: "Invalid productType" };
  if (!isValidEmail(b.buyerEmail)) return { error: "Invalid buyerEmail" };
  if (typeof b.buyerName !== "string" || b.buyerName.trim().length === 0) {
    return { error: "Invalid buyerName" };
  }
  if (b.recipientName !== undefined && typeof b.recipientName !== "string") {
    return { error: "Invalid recipientName" };
  }

  const def = PRODUCT_DEFINITIONS[b.productType];
  if (def.kind === "custom") {
    if (typeof b.customAmount !== "number" || b.customAmount < 3000 || b.customAmount > 50000) {
      return { error: "customAmount must be between 3000 and 50000 cents" };
    }
  }

  return {
    productType: b.productType,
    customAmount: typeof b.customAmount === "number" ? b.customAmount : undefined,
    buyerEmail: b.buyerEmail,
    buyerName: b.buyerName.trim(),
    recipientName:
      typeof b.recipientName === "string" && b.recipientName.trim().length > 0
        ? b.recipientName.trim()
        : undefined,
  };
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validated = validateInput(body);
  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const { productType, customAmount, buyerEmail, buyerName, recipientName } = validated;

  try {
    const lineItem =
      customAmount !== undefined
        ? {
            price_data: {
              currency: "eur",
              product_data: { name: "Einzelgutschein" },
              unit_amount: customAmount,
            },
            quantity: 1,
          }
        : { price: getStripePriceId(productType), quantity: 1 };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      ui_mode: "embedded_page",
      line_items: [lineItem],
      return_url: `${APP_URL}/gutscheine/danke?session_id={CHECKOUT_SESSION_ID}`,
      customer_email: buyerEmail,
      metadata: {
        productType,
        buyerName,
        recipientName: recipientName ?? "",
      },
      payment_intent_data: {
        metadata: {
          productType,
          buyerName,
          recipientName: recipientName ?? "",
        },
      },
    });

    if (!session.client_secret) {
      console.error("No client_secret in Stripe session");
      return NextResponse.json({ error: "Could not start checkout" }, { status: 500 });
    }

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err) {
    console.error("Stripe checkout creation failed:", err);
    return NextResponse.json({ error: "Could not start checkout" }, { status: 500 });
  }
}
