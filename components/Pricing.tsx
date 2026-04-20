"use client";

import { Check, Info, ExternalLink } from "lucide-react";
import type { SanityPricingItem, SanitySettings, SanityHomePage } from "@/sanity/lib/queries";

const FALLBACK_BADGE = "Transparente Preise";
const FALLBACK_HEADING = "Faire Preise,";
const FALLBACK_HEADING_ACCENT = "spürbare Wirkung";
const FALLBACK_TEXT =
  "Alle Behandlungen werden individuell auf Ihre Bedürfnisse abgestimmt.";
const FALLBACK_WKO_URL =
  "https://www.wko.at/oe/gewerbe-handwerk/fusspfleger-kosmetiker-masseure/tarife-heilmasseure.pdf";

const FALLBACK_ROWS = [
  { service: "Heilmassage", p30: "\u20ac55", p45: "\u20ac70", p60: "\u20ac85" },
  { service: "Lymphdrainage", p30: "\u20ac55", p45: "\u20ac70", p60: "\u20ac85" },
  { service: "Klassische Massage", p30: "\u20ac55", p45: "\u20ac70", p60: "\u20ac85" },
];

const FALLBACK_INSURANCE_TEXT =
  "Je nach Krankenkasse bekommen Sie einen Teil Ihrer Massagekosten zurück. Sie haben auch die Möglichkeit, einen Teil der Therapiekosten bei einer Zusatzversicherung einzureichen. Privatversicherungen erstatten bis zu 100% der Therapiekosten zurück. Informieren Sie sich jetzt — es lohnt sich!";

type PricingRow = { service: string; p30: string; p45: string; p60: string };

export function Pricing({
  sanityPricing,
  sanitySettings,
  homePage,
}: {
  sanityPricing?: SanityPricingItem[] | null;
  sanitySettings?: SanitySettings | null;
  homePage?: SanityHomePage | null;
}) {
  const rows: PricingRow[] =
    sanityPricing && sanityPricing.length > 0
      ? sanityPricing.map((item) => ({
          service: item.serviceName,
          p30: item.price30 ? `\u20ac${item.price30}` : "—",
          p45: item.price45 ? `\u20ac${item.price45}` : "—",
          p60: item.price60 ? `\u20ac${item.price60}` : "—",
        }))
      : FALLBACK_ROWS;

  const insuranceText =
    sanitySettings?.insuranceText ?? FALLBACK_INSURANCE_TEXT;

  const badge = homePage?.pricingBadge ?? FALLBACK_BADGE;
  const heading = homePage?.pricingHeading ?? FALLBACK_HEADING;
  const headingAccent = homePage?.pricingHeadingAccent ?? FALLBACK_HEADING_ACCENT;
  const text = homePage?.pricingText ?? FALLBACK_TEXT;
  const wkoUrl = homePage?.pricingWkoUrl ?? FALLBACK_WKO_URL;

  return (
    <section
      id="preise"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#0d4f4f]/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8654a]/10 px-4 py-1.5 text-sm font-bold text-[#e8654a]">
            {badge}
          </span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#111]">
            {heading}{" "}
            <span className="text-[#e8654a]">{headingAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-[#555]">{text}</p>
        </div>

        {/* Pricing table */}
        <div className="mt-14 sm:mt-20 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-xl shadow-black/5 overflow-y-hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0d4f4f] text-white">
                  <th className="px-4 sm:px-8 py-4 sm:py-5 text-left font-extrabold text-sm sm:text-base align-bottom">
                    Behandlung
                  </th>
                  <th className="px-2 sm:px-6 py-4 sm:py-5 text-center font-extrabold text-sm sm:text-base whitespace-nowrap align-bottom">
                    30 Min
                  </th>
                  <th className="px-2 sm:px-6 py-4 sm:py-5 text-center font-extrabold text-sm sm:text-base whitespace-nowrap align-bottom">
                    45 Min
                  </th>
                  <th className="px-2 sm:px-6 pt-2 pb-4 sm:py-5 text-center font-extrabold text-sm sm:text-base align-bottom">
                    <span className="sm:hidden bg-[#f2a93b] text-[9px] font-bold px-1.5 py-0.5 rounded-full text-[#111] inline-block mb-0.5">
                      Beliebt
                    </span>
                    <br className="sm:hidden" />
                    <span className="inline-flex items-center sm:gap-1.5">
                      <span className="whitespace-nowrap">60 Min</span>
                      <span className="hidden sm:inline bg-[#f2a93b] text-[10px] font-bold px-2 py-0.5 rounded-full text-[#111]">
                        Beliebt
                      </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`${
                      i < rows.length - 1 ? "border-b border-gray-100" : ""
                    } hover:bg-[#0d4f4f]/[0.02] transition-colors`}
                  >
                    <td className="px-4 sm:px-8 py-4 sm:py-6">
                      <span className="font-bold text-sm sm:text-base text-[#111]">
                        {row.service}
                      </span>
                    </td>
                    <td className="px-2 sm:px-6 py-4 sm:py-6 text-center whitespace-nowrap">
                      <span className="text-base sm:text-xl font-extrabold text-[#333]">
                        {row.p30}
                      </span>
                    </td>
                    <td className="px-2 sm:px-6 py-4 sm:py-6 text-center whitespace-nowrap">
                      <span className="text-base sm:text-xl font-extrabold text-[#333]">
                        {row.p45}
                      </span>
                    </td>
                    <td className="px-2 sm:px-6 py-4 sm:py-6 text-center whitespace-nowrap">
                      <span className="text-base sm:text-xl font-extrabold text-[#e8654a]">
                        {row.p60}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Insurance note */}
          <div className="mt-8 flex items-start gap-4 rounded-2xl bg-gradient-to-r from-[#0d4f4f]/[0.06] to-[#0d4f4f]/[0.02] border border-[#0d4f4f]/10 p-6 sm:p-8">
            <div className="flex-shrink-0 mt-0.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d4f4f]/10">
                <Info size={20} className="text-[#0d4f4f]" />
              </div>
            </div>
            <div>
              <p className="font-bold text-[#111]">
                Zuschüsse von Krankenkassen & Versicherungen
              </p>
              <p className="mt-1 text-sm text-[#555] leading-relaxed">
                {insuranceText}
              </p>
              <a
                href={wkoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#0d4f4f] hover:underline"
              >
                Heilmasseur-Zuschüsse nach Kassen
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "Individuell abgestimmt",
              "Keine Vertragsbindung",
              "Flexible Terminvergabe",
            ].map((feat) => (
              <span
                key={feat}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#555]"
              >
                <Check size={16} className="text-[#0d4f4f]" />
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
