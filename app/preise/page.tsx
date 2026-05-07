import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLdOffer } from "@/components/JsonLdOffer";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import {
  PricingTable,
  pricingRowsFromSanity,
} from "@/components/PricingTable";
import { BlockCardOverview } from "@/components/BlockCardOverview";
import { KrankenkassenTabelle } from "@/components/KrankenkassenTabelle";
import {
  getPricingPage,
  getPricingItems,
  getSettings,
} from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPricingPage();
  const title =
    page?.seoTitle ?? "Preise — Heilmassage & Sportmassage Wien 1080";
  const description =
    page?.seoDescription ??
    "Transparente Preise für Heilmassage und Sportmassage in Wien 1080. Block-Karten ab 5 Behandlungen mit bis zu 12 % Vorteil.";

  return {
    title,
    description,
    alternates: {
      canonical: "https://heilmasseur-domenic.at/preise",
    },
    openGraph: {
      title,
      description,
      url: "https://heilmasseur-domenic.at/preise",
      locale: "de_AT",
      type: "website",
    },
  };
}

export default async function PreisePage() {
  const [page, pricingItems, settings] = await Promise.all([
    getPricingPage(),
    getPricingItems(),
    getSettings(),
  ]);

  const heroBadge = page?.heroBadge ?? "Transparente Preise";
  const heroHeading =
    page?.heroHeading ?? "Preise für Heilmassage & Sportmassage";
  const heroHeadingAccent = page?.heroHeadingAccent ?? "in Wien 1080";
  const heroText =
    page?.heroText ?? "Faire, transparente Preise für jede Behandlung.";
  const tableIntro =
    page?.tableIntro ??
    "Alle Behandlungen werden individuell auf Ihre Bedürfnisse abgestimmt.";

  const blockHeading =
    page?.blockCardsHeading ?? "Block-Karten — günstiger ab 5 Behandlungen";
  const blockText =
    page?.blockCardsText ??
    "Wer regelmäßig kommt, profitiert: Block-Karten gibt es als 5er- oder 10er-Block.";

  const krankenkassenHeading =
    page?.krankenkassenHeading ?? "Krankenkassen-Rückerstattung";
  const krankenkassenIntro =
    page?.krankenkassenIntro ??
    "Heilmassage kann je nach Kasse teilweise erstattet werden.";
  const krankenkassenDisclaimer =
    page?.krankenkassenDisclaimer ??
    "Stand 2026, Richtwerte. Bitte direkt bei Ihrer Kasse erfragen.";

  const voucherCtaHeading = page?.voucherCtaHeading ?? "Gutscheine verschenken";
  const voucherCtaText =
    page?.voucherCtaText ??
    "Gutscheine sind in jedem Wert oder als Block-Karte erhältlich.";

  const faqs = page?.faqs ?? [];
  const ctaHeading = page?.ctaHeading ?? "Bereit für Ihren Termin?";
  const ctaText =
    page?.ctaText ??
    "Buchen Sie direkt online — oder verschenken Sie einen Gutschein.";

  const rows = pricingRowsFromSanity(pricingItems);

  return (
    <>
      <JsonLdOffer items={pricingItems} />
      {faqs.length > 0 && (
        <FaqJsonLd faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
      )}
      <Navbar />
      <main>
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Preise", href: "/preise" },
          ]}
        />

        {/* HERO */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 pt-8 pb-16 sm:pt-12 sm:pb-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e8654a]/10 px-4 py-1.5 text-sm font-bold text-[#e8654a]">
              {heroBadge}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#111]">
              {heroHeading}{" "}
              <span className="text-[#e8654a]">{heroHeadingAccent}</span>
            </h1>
            <p className="mt-6 text-lg text-[#555] leading-relaxed max-w-2xl">
              {heroText}
            </p>
          </div>
        </section>

        {/* PREISTABELLE */}
        <section className="bg-[#f0f7f7] py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-[#555] mb-8 leading-relaxed max-w-2xl">
              {tableIntro}
            </p>
            <PricingTable rows={rows} />
          </div>
        </section>

        {/* BLOCK-KARTEN */}
        <BlockCardOverview
          heading={blockHeading}
          text={blockText}
          voucherCtaHeading={voucherCtaHeading}
          voucherCtaText={voucherCtaText}
        />

        {/* KRANKENKASSEN */}
        <KrankenkassenTabelle
          heading={krankenkassenHeading}
          intro={krankenkassenIntro}
          items={page?.krankenkassen}
          disclaimer={krankenkassenDisclaimer}
        />

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="py-16 sm:py-24 bg-white">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-3">
                Häufige Fragen zu Preisen
              </h2>
              <p className="text-[#555] mb-10 leading-relaxed">
                Antworten auf die Fragen, die mir am häufigsten gestellt werden.
              </p>
              <div className="space-y-3">
                {faqs.map(({ question, answer }) => (
                  <details
                    key={question}
                    className="group rounded-2xl bg-white border border-[#0d4f4f]/10 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-semibold text-[#111] text-sm sm:text-base list-none">
                      {question}
                      <ChevronDown
                        size={18}
                        className="text-[#0d4f4f] shrink-0 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <p className="px-6 pb-5 text-sm text-[#555] leading-relaxed border-t border-[#0d4f4f]/5 pt-4">
                      {answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CLOSING CTA */}
        <section className="py-16 sm:py-24 bg-[#0d4f4f]">
          <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {ctaHeading}
            </h2>
            <p className="text-white/65 mb-10 leading-relaxed">{ctaText}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/buchen"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#e8654a]/30 transition-all duration-200 hover:shadow-xl hover:shadow-[#e8654a]/40 hover:scale-[1.03]"
              >
                Termin buchen
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <Link
                href="/gutscheine"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                Gutschein verschenken
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer sanitySettings={settings} />
    </>
  );
}
