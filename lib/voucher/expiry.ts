const VALIDITY_YEARS = 3;

export function expiryFromNow(): Date {
  const now = new Date();
  return new Date(now.getFullYear() + VALIDITY_YEARS, now.getMonth(), now.getDate());
}

export function formatExpiry(d: Date | string): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("de-AT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
