import Link from "next/link";
import { Check, Gift } from "lucide-react";

type BlockOption = {
  size: 5 | 10;
  duration: 30 | 45 | 60;
  price: number;
  fullPrice: number;
  productKey: string;
};

const BLOCK_OPTIONS: BlockOption[] = [
  { size: 5, duration: 30, price: 259, fullPrice: 275, productKey: "block_5_30" },
  { size: 5, duration: 45, price: 329, fullPrice: 350, productKey: "block_5_45" },
  { size: 5, duration: 60, price: 399, fullPrice: 425, productKey: "block_5_60" },
  { size: 10, duration: 30, price: 489, fullPrice: 550, productKey: "block_10_30" },
  { size: 10, duration: 45, price: 619, fullPrice: 700, productKey: "block_10_45" },
  { size: 10, duration: 60, price: 749, fullPrice: 850, productKey: "block_10_60" },
];

function discountPercent(price: number, fullPrice: number): number {
  return Math.round(((fullPrice - price) / fullPrice) * 100);
}

export function BlockCardOverview({
  heading,
  text,
  voucherCtaHeading,
  voucherCtaText,
}: {
  heading: string;
  text: string;
  voucherCtaHeading: string;
  voucherCtaText: string;
}) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-4">
            {heading}
          </h2>
          <p className="text-[#555] leading-relaxed">{text}</p>
        </div>

        <h3 className="text-lg font-bold text-[#111] mb-4">5er-Block</h3>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {BLOCK_OPTIONS.filter((o) => o.size === 5).map((option) => (
            <BlockCard key={option.productKey} option={option} />
          ))}
        </div>

        <h3 className="text-lg font-bold text-[#111] mb-4">10er-Block</h3>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {BLOCK_OPTIONS.filter((o) => o.size === 10).map((option) => (
            <BlockCard key={option.productKey} option={option} highlight />
          ))}
        </div>

        {/* Einzelgutschein-CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#0d4f4f] to-[#0a3d3d] p-8 sm:p-12 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Gift size={32} className="text-[#f2a93b]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold mb-2">
                {voucherCtaHeading}
              </h3>
              <p className="text-white/80 leading-relaxed">{voucherCtaText}</p>
            </div>
            <Link
              href="/gutscheine"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#e8654a]/25 hover:shadow-xl hover:shadow-[#e8654a]/30 transition-all duration-200 hover:scale-105 whitespace-nowrap"
            >
              Gutschein kaufen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlockCard({
  option,
  highlight = false,
}: {
  option: BlockOption;
  highlight?: boolean;
}) {
  const discount = discountPercent(option.price, option.fullPrice);
  return (
    <div
      className={`relative rounded-3xl border bg-white p-6 sm:p-8 shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
        highlight ? "border-[#e8654a] shadow-md" : "border-gray-100"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-[#e8654a] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Beliebt
        </span>
      )}
      <p className="text-xs font-bold uppercase tracking-widest text-[#0d4f4f] mb-2">
        {option.duration} Min · {option.size} Behandlungen
      </p>
      <p className="text-3xl font-extrabold text-[#111]">
        €{option.price}
      </p>
      <p className="mt-1 text-sm text-[#666] line-through">
        statt €{option.fullPrice}
      </p>
      <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#f2a93b]/15 px-3 py-1 text-xs font-bold text-[#0d4f4f]">
        <Check size={12} strokeWidth={3} />
        {discount} % Vorteil
      </p>
      <Link
        href={`/gutscheine?product=${option.productKey}`}
        className="mt-6 block rounded-full bg-[#0d4f4f] py-3 text-center text-sm font-bold text-white transition-colors duration-200 hover:bg-[#0a3d3d]"
      >
        Block kaufen
      </Link>
    </div>
  );
}
