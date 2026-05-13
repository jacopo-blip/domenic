export type Duration = 30 | 45 | 60;
export type Size = 5 | 10;

export type BlockProductKey =
  | "block_5_30"
  | "block_5_45"
  | "block_5_60"
  | "block_10_30"
  | "block_10_45"
  | "block_10_60";

export type BlockOption = {
  size: Size;
  duration: Duration;
  price: number;
  fullPrice: number;
  productKey: BlockProductKey;
};

// productKey values must align with STRIPE_PRICE_BLOCK_* env vars
// and the Sanity voucher.productType options list.
// Single source of truth — if you change prices here, update Stripe + Sanity too.
export const BLOCK_OPTIONS: readonly BlockOption[] = [
  { size: 5, duration: 30, price: 259, fullPrice: 275, productKey: "block_5_30" },
  { size: 5, duration: 45, price: 329, fullPrice: 350, productKey: "block_5_45" },
  { size: 5, duration: 60, price: 399, fullPrice: 425, productKey: "block_5_60" },
  { size: 10, duration: 30, price: 489, fullPrice: 550, productKey: "block_10_30" },
  { size: 10, duration: 45, price: 619, fullPrice: 700, productKey: "block_10_45" },
  { size: 10, duration: 60, price: 749, fullPrice: 850, productKey: "block_10_60" },
] as const;

export const DURATIONS: readonly Duration[] = [30, 45, 60] as const;
export const SIZES: readonly Size[] = [5, 10] as const;

export function getBlockOption(size: Size, duration: Duration): BlockOption {
  const found = BLOCK_OPTIONS.find(
    (o) => o.size === size && o.duration === duration,
  );
  if (!found) {
    throw new Error(`No block option for size=${size}, duration=${duration}`);
  }
  return found;
}

export function discountPercent(price: number, fullPrice: number): number {
  return Math.round(((fullPrice - price) / fullPrice) * 100);
}
