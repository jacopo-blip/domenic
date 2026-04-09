import { defineField, defineType } from "sanity";

export const homePageSchema = defineType({
  name: "homePage",
  title: "Startseite",
  type: "document",
  fields: [
    // ── Hero ─────────────────────────────────────────────────
    defineField({
      name: "heroBackgroundImage",
      title: "Hero — Hintergrundbild",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "heroPortraitImage",
      title: "Hero — Portrait-Bild (Karte rechts)",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),

    // ── About Teaser ──────────────────────────────────────────
    defineField({
      name: "aboutTeaserBadge",
      title: "About-Teaser — Badge-Text",
      type: "string",
      initialValue: "Über Domenic Hacker",
      group: "aboutTeaser",
    }),
    defineField({
      name: "aboutTeaserHeading",
      title: "About-Teaser — Überschrift",
      type: "string",
      initialValue: "Diplomierter Heilmasseur",
      group: "aboutTeaser",
    }),
    defineField({
      name: "aboutTeaserHeadingAccent",
      title: "About-Teaser — Überschrift (Akzent)",
      type: "string",
      initialValue: "mit Leidenschaft",
      group: "aboutTeaser",
    }),
    defineField({
      name: "aboutTeaserImage",
      title: "About-Teaser — Bild",
      type: "image",
      options: { hotspot: true },
      group: "aboutTeaser",
    }),

    // ── Praxis ────────────────────────────────────────────────
    defineField({
      name: "praxisBadge",
      title: "Praxis — Badge-Text",
      type: "string",
      initialValue: "Die Praxis",
      group: "praxis",
    }),
    defineField({
      name: "praxisHeading",
      title: "Praxis — Überschrift",
      type: "string",
      initialValue: "Ihr Raum für",
      group: "praxis",
    }),
    defineField({
      name: "praxisHeadingAccent",
      title: "Praxis — Überschrift (Akzent)",
      type: "string",
      initialValue: "Erholung",
      group: "praxis",
    }),
    defineField({
      name: "praxisDescription",
      title: "Praxis — Beschreibung",
      type: "text",
      rows: 4,
      initialValue:
        "Meine Praxis befindet sich in einem ruhigen Altbau in der Josefstadt — mitten in Wien, aber abseits vom Trubel. Helle Räume, eine angenehme Atmosphäre und alles, was Sie für eine entspannte Behandlung brauchen.",
      group: "praxis",
    }),
    defineField({
      name: "praxisImage",
      title: "Praxis — Bild",
      type: "image",
      options: { hotspot: true },
      group: "praxis",
    }),
  ],
  groups: [
    { name: "hero", title: "Hero" },
    { name: "aboutTeaser", title: "Über-mich-Teaser" },
    { name: "praxis", title: "Praxis-Sektion" },
  ],
  preview: {
    prepare: () => ({ title: "Startseite" }),
  },
});
