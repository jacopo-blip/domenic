"use client";

import { useState, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

export type CheckoutFormInput = {
  productType: string;
  customAmount?: number; // in cents
  buyerEmail: string;
  buyerName: string;
  recipientName?: string;
};

export function VoucherCheckout({ input }: { input: CheckoutFormInput }) {
  const [error, setError] = useState<string | null>(null);

  const fetchClientSecret = useCallback(async () => {
    setError(null);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (!res.ok) {
      const errBody = await res.json().catch(() => ({ error: "Unknown error" }));
      setError(errBody.error || "Checkout konnte nicht gestartet werden");
      throw new Error(errBody.error || "Failed");
    }
    const data = await res.json();
    return data.clientSecret;
  }, [input]);

  if (!stripePromise) {
    return (
      <div className="rounded-2xl bg-red-50 border border-red-200 p-6 text-red-900">
        Stripe ist nicht konfiguriert. Bitte später nochmal versuchen.
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="mb-4 rounded-2xl bg-red-50 border border-red-200 p-4 text-sm text-red-900">
          {error}
        </div>
      )}
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
