import type { StructureBuilder } from "sanity/structure";

// Helper: singleton document list item
function singleton(S: StructureBuilder, title: string, schemaType: string, id: string) {
  return S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(schemaType).documentId(id));
}

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Inhalt")
    .items([
      // ── Allgemein ─────────────────────────────────────────
      S.listItem()
        .title("Allgemein")
        .child(
          S.list()
            .title("Allgemein")
            .items([
              singleton(S, "Einstellungen", "settings", "settings"),
            ])
        ),

      S.divider(),

      // ── Seiten ────────────────────────────────────────────
      singleton(S, "Startseite", "homePage", "homePage"),
      singleton(S, "Heilmassage Wien", "heilmassagePage", "heilmassagePage"),
      singleton(S, "Über mich", "about", "about"),
      singleton(S, "Buchen", "buchenPage", "buchenPage"),
      singleton(S, "Impressum", "impressumPage", "impressumPage"),
      singleton(S, "Datenschutz", "datenschutzPage", "datenschutzPage"),

      S.divider(),

      // ── Inhalte (Listen) ──────────────────────────────────
      S.listItem()
        .title("Leistungen")
        .schemaType("service")
        .child(S.documentTypeList("service").title("Leistungen")),

      S.listItem()
        .title("Preise")
        .schemaType("pricingItem")
        .child(S.documentTypeList("pricingItem").title("Preise")),

      S.listItem()
        .title("FAQs (Startseite)")
        .schemaType("faqItem")
        .child(S.documentTypeList("faqItem").title("FAQs")),

      S.listItem()
        .title("Kundenstimmen")
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Kundenstimmen")),
    ]);
