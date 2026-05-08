"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { VoucherProductSelector, type SelectedProduct } from "@/components/VoucherProductSelector";
import { VoucherCheckout, type CheckoutFormInput } from "@/components/VoucherCheckout";
import { PRODUCT_PRICES_EUR } from "@/lib/stripe/products";

function GutscheineContent() {
  const searchParams = useSearchParams();
  const productPreset = searchParams.get("product");

  const [selected, setSelected] = useState<SelectedProduct | null>(null);
  const [customAmount, setCustomAmount] = useState<number>(50);
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [step, setStep] = useState<"select" | "details" | "pay">("select");

  // Pre-select from URL if present
  useEffect(() => {
    if (!productPreset || selected) return;
    const blockMatch = /^block_(5|10)_(30|45|60)$/.exec(productPreset);
    if (blockMatch) {
      const size = Number(blockMatch[1]) as 5 | 10;
      const duration = Number(blockMatch[2]) as 30 | 45 | 60;
      const productType = productPreset as SelectedProduct["productType"];
      const price = PRODUCT_PRICES_EUR[productType] ?? 0;
      setSelected({
        productType,
        kind: "block",
        price,
        size,
        duration,
      });
      setStep("details");
    }
    // For voucher_custom: do NOT auto-select. Let user pick an amount in the
    // selection step. (Spec §6.6: "Custom-Voucher vorausgewählt, Custom-Amount-Input fokussiert"
    // — the input lives in VoucherProductSelector, so we stay on "select" step.)
  }, [productPreset, selected]);

  const checkoutInput: CheckoutFormInput | null =
    selected && buyerEmail && buyerName
      ? {
          productType: selected.productType,
          customAmount: selected.kind === "custom" ? selected.customAmountEur * 100 : undefined,
          buyerEmail,
          buyerName,
          recipientName: recipientName || undefined,
        }
      : null;

  return (
    <>
      <Navbar />
      <main>
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Gutscheine", href: "/gutscheine" }]} />

        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 pt-8 pb-16 sm:pt-12 sm:pb-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e8654a]/10 px-4 py-1.5 text-sm font-bold text-[#e8654a]">
              Geschenke, die wirklich gut tun
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#111]">
              Massage-Gutscheine{" "}
              <span className="text-[#e8654a]">aus Wien 1080</span>
            </h1>
            <p className="mt-6 text-lg text-[#555] leading-relaxed max-w-2xl">
              Gutscheine sind sofort als PDF verfügbar — drei Jahre gültig, einlösbar gegen jede
              Behandlung. Block-Karten geben extra Vorteil ab fünf Behandlungen.
            </p>
          </div>
        </section>

        {step === "select" && (
          <section className="bg-[#f0f7f7] py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <VoucherProductSelector
                selected={selected}
                onSelect={(p) => {
                  setSelected(p);
                  setStep("details");
                }}
                customAmount={customAmount}
                onCustomAmountChange={setCustomAmount}
              />
            </div>
          </section>
        )}

        {step === "details" && selected && (
          <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-2xl px-5 sm:px-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-2">
                Ihre Daten
              </h2>
              <p className="text-[#555] mb-8 leading-relaxed">
                Wir senden Ihnen den Gutschein als PDF an die angegebene E-Mail-Adresse.
              </p>
              <div className="space-y-5">
                <label className="block">
                  <span className="text-sm font-semibold text-[#333]">Ihre E-Mail-Adresse *</span>
                  <input
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d4f4f]"
                    placeholder="ihre@email.at"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-[#333]">Ihr Name *</span>
                  <input
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d4f4f]"
                    placeholder="Vor- und Zuname"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-[#333]">Beschenkter Name (optional)</span>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d4f4f]"
                    placeholder="z.B. Maria"
                  />
                  <p className="mt-1 text-xs text-[#666]">
                    Der Name erscheint auf dem PDF-Gutschein. Ohne Angabe ist der Gutschein neutral.
                  </p>
                </label>
              </div>
              <div className="mt-8 flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelected(null);
                    setStep("select");
                  }}
                  className="rounded-full border-2 border-[#0d4f4f] px-6 py-3 text-sm font-bold text-[#0d4f4f] hover:bg-[#0d4f4f] hover:text-white transition-all"
                >
                  Zurück
                </button>
                <button
                  type="button"
                  disabled={!buyerEmail || !buyerName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyerEmail)}
                  onClick={() => setStep("pay")}
                  className="rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#e8654a]/25 disabled:opacity-50 transition-all"
                >
                  Weiter zur Zahlung
                </button>
              </div>
            </div>
          </section>
        )}

        {step === "pay" && checkoutInput && (
          <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-2xl px-5 sm:px-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-2">
                Zahlung
              </h2>
              <p className="text-[#555] mb-8 leading-relaxed">
                Sicher bezahlen via Stripe — Karten, Apple Pay, Google Pay, SEPA.
              </p>
              <VoucherCheckout input={checkoutInput} />
              <p className="mt-6 text-xs text-[#666]">
                Mit dem Klick auf Bezahlen bestätigen Sie unsere AGB und das Widerrufsrecht.
                Hinweis: Bei digitalen Inhalten (PDF-Gutschein) erlischt das Widerrufsrecht
                nach Lieferung des PDFs an die angegebene E-Mail-Adresse (§ 18 FAGG).
              </p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default function GutscheinePage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <GutscheineContent />
    </Suspense>
  );
}
