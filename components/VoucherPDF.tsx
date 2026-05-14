import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { SanityVoucher } from "@/sanity/lib/queries";
import { formatExpiry } from "@/lib/voucher/expiry";
import { PRODUCT_PRICES_EUR } from "@/lib/stripe/products";

// Note: Spec §6.5 mentioned a logo from settings.logo as the first layout element.
// We deliberately use a text-only brand block ("HEILMASSEUR · WIEN 1080 / Domenic Hacker")
// to avoid an extra Sanity asset fetch during PDF render in the webhook handler. The
// brand text serves the same identification purpose. If a logo image is needed later,
// the webhook handler in Task 5 can fetch settings and pass `logoUrl` as a prop, and
// this component can conditionally render <Image src={logoUrl}/> at the top.

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "Helvetica",
    color: "#111",
  },
  headerBar: {
    height: 6,
    backgroundColor: "#0d4f4f",
    marginBottom: 30,
  },
  brand: {
    fontSize: 11,
    color: "#666",
    marginBottom: 4,
  },
  brandName: {
    fontSize: 14,
    fontWeight: 700,
    color: "#0d4f4f",
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    color: "#0d4f4f",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 30,
  },
  valueBox: {
    backgroundColor: "#f0f7f7",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  valueLabel: {
    fontSize: 9,
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  valuePrimary: {
    fontSize: 22,
    fontWeight: 700,
    color: "#111",
    marginBottom: 4,
  },
  valueSecondary: {
    fontSize: 11,
    color: "#666",
  },
  recipientBox: {
    marginBottom: 24,
  },
  recipientText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#333",
  },
  codeBox: {
    backgroundColor: "#0d4f4f",
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },
  codeLabel: {
    fontSize: 9,
    color: "rgba(255,255,255,0.7)",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  codeValue: {
    fontSize: 28,
    fontFamily: "Courier-Bold",
    color: "#fff",
    letterSpacing: 4,
  },
  metaSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  metaCol: {
    flex: 1,
  },
  metaLabel: {
    fontSize: 8,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 11,
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 50,
    left: 50,
    right: 50,
    fontSize: 8,
    color: "#888",
    lineHeight: 1.4,
  },
});

const PRODUCT_LABELS: Record<string, string> = {
  block_5_30: "5er-Block · 30 Minuten",
  block_5_45: "5er-Block · 45 Minuten",
  block_5_60: "5er-Block · 60 Minuten",
  block_10_30: "10er-Block · 30 Minuten",
  block_10_45: "10er-Block · 45 Minuten",
  block_10_60: "10er-Block · 60 Minuten",
  voucher_custom: "Einzelgutschein",
};

export type VoucherPDFData = Pick<
  SanityVoucher,
  | "code"
  | "productType"
  | "sessionsTotal"
  | "durationMin"
  | "customAmount"
  | "buyerName"
  | "recipientName"
  | "purchasedAt"
  | "expiresAt"
> & {
  // Tatsächlich bezahlter Preis (cents) — vom Webhook aus session.amount_total
  // gesetzt, damit der PDF-Wert "eingefroren" am Kaufzeitpunkt bleibt und nicht
  // vom Drift im PRODUCT_PRICES_EUR-Fallback abhängt, wenn Sanity-Preise sich
  // später ändern. Optional aus Backward-Compat-Gründen.
  purchasedPriceCents?: number | null;
};

export function VoucherPDF({ voucher }: { voucher: VoucherPDFData }) {
  const productLabel = PRODUCT_LABELS[voucher.productType] ?? voucher.productType;
  const isCustom = voucher.productType === "voucher_custom";
  const blockPriceEur =
    typeof voucher.purchasedPriceCents === "number"
      ? Math.round(voucher.purchasedPriceCents / 100)
      : PRODUCT_PRICES_EUR[voucher.productType];

  const valuePrimary = isCustom
    ? `€ ${voucher.customAmount ?? "—"}`
    : `${voucher.sessionsTotal} × ${voucher.durationMin}-Minuten-Behandlung`;

  // For block products, show the EUR amount paid as secondary info alongside product label
  const valueSecondaryText = isCustom
    ? productLabel
    : blockPriceEur
    ? `${productLabel} · Wert: € ${blockPriceEur}`
    : productLabel;

  return (
    <Document
      title={`Gutschein ${voucher.code}`}
      author="Heilmasseur Domenic Hacker"
      subject="Massage-Gutschein"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.headerBar} />
        <Text style={styles.brand}>HEILMASSEUR · WIEN 1080</Text>
        <Text style={styles.brandName}>Domenic Hacker</Text>

        <Text style={styles.title}>Gutschein</Text>
        <Text style={styles.subtitle}>für eine Behandlung in der Praxis</Text>

        <View style={styles.valueBox}>
          <Text style={styles.valueLabel}>Wert</Text>
          <Text style={styles.valuePrimary}>{valuePrimary}</Text>
          <Text style={styles.valueSecondary}>{valueSecondaryText}</Text>
        </View>

        {voucher.recipientName ? (
          <View style={styles.recipientBox}>
            <Text style={styles.metaLabel}>Für</Text>
            <Text style={styles.recipientText}>{voucher.recipientName}</Text>
          </View>
        ) : null}

        <View style={styles.codeBox}>
          <Text style={styles.codeLabel}>Code</Text>
          <Text style={styles.codeValue}>{voucher.code}</Text>
        </View>

        <View style={styles.metaSection}>
          <View style={styles.metaCol}>
            <Text style={styles.metaLabel}>Gültig bis</Text>
            <Text style={styles.metaValue}>{formatExpiry(voucher.expiresAt)}</Text>
          </View>
          <View style={styles.metaCol}>
            <Text style={styles.metaLabel}>Termin buchen</Text>
            <Text style={styles.metaValue}>heilmasseur-domenic.at/buchen</Text>
          </View>
        </View>

        <Text style={styles.footer}>
          {`Heilmasseur Domenic Hacker · Feldgasse 3/20 · 1080 Wien · praxis@heilmasseur-domenic.at\nEinlösbar gegen jede Behandlung in der Praxis. Bei Vorlage des Codes oder PDFs.\nGutscheine sind 3 Jahre ab Kauf gültig. Nicht in bar auszahlbar.`}
        </Text>
      </Page>
    </Document>
  );
}
