import type Stripe from "stripe";
import type { SanityVoucherProductType } from "@/sanity/lib/queries";

export type ProductValue =
  | { kind: "block"; sessionsTotal: number; durationMin: number }
  | { kind: "custom" };

export const PRODUCT_DEFINITIONS: Record<SanityVoucherProductType, ProductValue> = {
  block_5_30: { kind: "block", sessionsTotal: 5, durationMin: 30 },
  block_5_45: { kind: "block", sessionsTotal: 5, durationMin: 45 },
  block_5_60: { kind: "block", sessionsTotal: 5, durationMin: 60 },
  block_10_30: { kind: "block", sessionsTotal: 10, durationMin: 30 },
  block_10_45: { kind: "block", sessionsTotal: 10, durationMin: 45 },
  block_10_60: { kind: "block", sessionsTotal: 10, durationMin: 60 },
  voucher_custom: { kind: "custom" },
};

const PRICE_ID_ENV: Record<SanityVoucherProductType, string> = {
  block_5_30: "STRIPE_PRICE_BLOCK_5_30",
  block_5_45: "STRIPE_PRICE_BLOCK_5_45",
  block_5_60: "STRIPE_PRICE_BLOCK_5_60",
  block_10_30: "STRIPE_PRICE_BLOCK_10_30",
  block_10_45: "STRIPE_PRICE_BLOCK_10_45",
  block_10_60: "STRIPE_PRICE_BLOCK_10_60",
  voucher_custom: "STRIPE_PRICE_VOUCHER_CUSTOM",
};

export function getStripePriceId(productType: SanityVoucherProductType): string {
  const envName = PRICE_ID_ENV[productType];
  const priceId = process.env[envName];
  if (!priceId) {
    throw new Error(`Missing env var: ${envName}`);
  }
  return priceId;
}

export function productTypeFromStripeMetadata(
  metadata: Stripe.Metadata | null | undefined,
): SanityVoucherProductType | null {
  const value = metadata?.productType;
  if (!value) return null;
  if (value in PRODUCT_DEFINITIONS) return value as SanityVoucherProductType;
  return null;
}
