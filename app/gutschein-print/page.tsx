import Link from "next/link";

export default function GutscheinPrintIndex() {
  const variants = [
    {
      id: 1,
      name: "Klassisch Elegant",
      desc: "Petrol-Hintergrund mit Gold-Akzent, zentriert, Spa-Feeling",
    },
    {
      id: 2,
      name: "Magazin",
      desc: "Asymmetrisch, weiß mit starkem Typo-Block in Coral",
    },
    {
      id: 3,
      name: "Soft & Warm",
      desc: "Creme-Hintergrund mit Coral-Gold-Verlauf, einladend",
    },
    {
      id: 4,
      name: "Minimalistisch",
      desc: "Viel Weißraum, dünne Petrol-Linien, sehr typografisch",
    },
    {
      id: 5,
      name: "Karten-Stil",
      desc: "Zwei-Spalten-Layout mit Petrol-Block links, Felder rechts",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        padding: "48px 24px",
        maxWidth: 640,
        margin: "0 auto",
        background: "white",
        borderRadius: 12,
      }}
    >
      <h1
        style={{
          fontSize: 26,
          fontWeight: 800,
          color: "#0d4f4f",
          marginBottom: 8,
          letterSpacing: "-0.3px",
        }}
      >
        Gutschein-Varianten
      </h1>
      <p style={{ color: "#555", marginBottom: 28, fontSize: 14, lineHeight: 1.55 }}>
        Wähle eine Variante zur Vorschau. Druckformat: A6 quer (148&thinsp;×&thinsp;105&thinsp;mm),
        4 Gutscheine passen auf einen A4-Bogen. Beim Drucken: <strong>Cmd&thinsp;/&thinsp;Strg&thinsp;+&thinsp;P</strong> →
        Papierformat A6 quer, Skalierung 100&thinsp;%, Hintergrundgrafiken aktivieren.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {variants.map((v) => (
          <Link
            key={v.id}
            href={`/gutschein-print/${v.id}`}
            style={{
              display: "block",
              padding: "16px 20px",
              background: "white",
              borderRadius: 12,
              border: "1px solid rgba(13,79,79,0.16)",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.18s",
            }}
          >
            <strong style={{ color: "#0d4f4f", fontSize: 15 }}>
              Variante {v.id}: {v.name}
            </strong>
            <br />
            <span style={{ fontSize: 13, color: "#555" }}>{v.desc}</span>
          </Link>
        ))}
      </div>
      <p
        style={{
          marginTop: 32,
          fontSize: 12,
          color: "#777",
          lineHeight: 1.55,
          borderTop: "1px solid #eee",
          paddingTop: 16,
        }}
      >
        Jeder Gutschein hat eine Vorder- und Rückseite. Felder für Wert, Empfänger und
        Gutschein-Nr. werden nach dem Druck handschriftlich ausgefüllt.
      </p>
    </div>
  );
}
