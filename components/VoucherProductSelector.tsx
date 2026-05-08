"use client";

import { Check, Gift } from "lucide-react";
import type { SanityVoucherProductType } from "@/sanity/lib/queries";

type ProductOption = {
  productType: SanityVoucherProductType;
  size: 5 | 10;
  duration: 30 | 45 | 60;
  price: number;
  fullPrice: number;
};

const BLOCK_OPTIONS: ProductOption[] = [
  { productType: "block_5_30", size: 5, duration: 30, price: 259, fullPrice: 275 },
  { productType: "block_5_45", size: 5, duration: 45, price: 329, fullPrice: 350 },
  { productType: "block_5_60", size: 5, duration: 60, price: 399, fullPrice: 425 },
  { productType: "block_10_30", size: 10, duration: 30, price: 489, fullPrice: 550 },
  { productType: "block_10_45", size: 10, duration: 45, price: 619, fullPrice: 700 },
  { productType: "block_10_60", size: 10, duration: 60, price: 749, fullPrice: 850 },
];

function discountPercent(price: number, fullPrice: number): number {
  return Math.round(((fullPrice - price) / fullPrice) * 100);
}

export type SelectedProduct =
  | { productType: SanityVoucherProductType; kind: "block"; price: number; size: number; duration: number }
  | { productType: "voucher_custom"; kind: "custom"; customAmountEur: number };

export function VoucherProductSelector({
  selected,
  onSelect,
  customAmount,
  onCustomAmountChange,
}: {
  selected: SelectedProduct | null;
  onSelect: (product: SelectedProduct) => void;
  customAmount: number;
  onCustomAmountChange: (value: number) => void;
}) {
  return (
    <div className="space-y-10">
      {/* 5er-Blöcke */}
      <div>
        <h2 className="text-lg font-bold text-[#111] mb-4">5er-Block</h2>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {BLOCK_OPTIONS.filter((o) => o.size === 5).map((o) => (
            <BlockCard
              key={o.productType}
              option={o}
              selected={selected?.productType === o.productType}
              onSelect={() =>
                onSelect({
                  productType: o.productType,
                  kind: "block",
                  price: o.price,
                  size: o.size,
                  duration: o.duration,
                })
              }
            />
          ))}
        </div>
      </div>

      {/* 10er-Blöcke */}
      <div>
        <h2 className="text-lg font-bold text-[#111] mb-4">10er-Block</h2>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {BLOCK_OPTIONS.filter((o) => o.size === 10).map((o) => (
            <BlockCard
              key={o.productType}
              option={o}
              selected={selected?.productType === o.productType}
              highlight
              onSelect={() =>
                onSelect({
                  productType: o.productType,
                  kind: "block",
                  price: o.price,
                  size: o.size,
                  duration: o.duration,
                })
              }
            />
          ))}
        </div>
      </div>

      {/* Einzelgutschein */}
      <div>
        <h2 className="text-lg font-bold text-[#111] mb-4">Einzelgutschein</h2>
        <div
          className={`rounded-3xl border bg-gradient-to-br from-[#0d4f4f] to-[#0a3d3d] p-8 text-white transition-all ${
            selected?.productType === "voucher_custom" ? "ring-4 ring-[#e8654a]" : ""
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Gift size={24} className="text-[#f2a93b]" aria-hidden={true} />
            </div>
            <div>
              <p className="text-lg font-extrabold">Frei wählbarer Betrag</p>
              <p className="text-sm text-white/80">Einlösbar gegen jede Behandlung — €30 bis €500</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-[#f2a93b]">€</span>
            <input
              type="number"
              min={30}
              max={500}
              step={5}
              value={customAmount}
              onChange={(e) => onCustomAmountChange(Number(e.target.value))}
              className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-2xl font-extrabold text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#f2a93b]"
            />
            <button
              type="button"
              onClick={() =>
                onSelect({
                  productType: "voucher_custom",
                  kind: "custom",
                  customAmountEur: customAmount,
                })
              }
              disabled={customAmount < 30 || customAmount > 500}
              className="rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#e8654a]/25 hover:shadow-xl hover:shadow-[#e8654a]/30 disabled:opacity-50 transition-all duration-200"
            >
              Auswählen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockCard({
  option,
  selected,
  highlight = false,
  onSelect,
}: {
  option: ProductOption;
  selected: boolean;
  highlight?: boolean;
  onSelect: () => void;
}) {
  const discount = discountPercent(option.price, option.fullPrice);
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative rounded-3xl border bg-white p-6 sm:p-8 shadow-sm transition-all duration-200 hover:shadow-lg motion-safe:hover:scale-[1.02] text-left ${
        selected ? "border-[#0d4f4f] ring-4 ring-[#0d4f4f]/20" : highlight ? "border-[#e8654a]" : "border-gray-100"
      }`}
    >
      {highlight && !selected && (
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-[#e8654a] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Beliebt
        </span>
      )}
      <p className="text-xs font-bold uppercase tracking-widest text-[#0d4f4f] mb-2">
        {option.duration} Min · {option.size} Behandlungen
      </p>
      <p className="text-3xl font-extrabold text-[#111]">€{option.price}</p>
      <p className="mt-1 text-sm text-[#666]">
        <s>statt €{option.fullPrice}</s>
      </p>
      <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#f2a93b]/15 px-3 py-1 text-xs font-bold text-[#0d4f4f]">
        <Check size={12} strokeWidth={3} aria-hidden={true} />
        {discount} % Vorteil
      </p>
    </button>
  );
}
