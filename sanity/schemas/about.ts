import { defineField, defineType } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "Über mich",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Abschnittstitel",
      type: "string",
      initialValue: "Von der Bewegung zur Heilung",
    }),
    defineField({
      name: "bio",
      title: "Biografie (Absätze)",
      type: "array",
      of: [{ type: "text" }],
      description: "Jeder Eintrag = ein Absatz",
    }),
    defineField({
      name: "image",
      title: "Profilbild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "yearsExperience",
      title: "Jahre Erfahrung (z.B. '15+')",
      type: "string",
      initialValue: "15+",
    }),
    defineField({
      name: "qualificationsCount",
      title: "Anzahl Qualifikationen (z.B. '11')",
      type: "string",
      initialValue: "11",
    }),
    defineField({
      name: "location",
      title: "Standort (z.B. '1080 Wien')",
      type: "string",
      initialValue: "1080 Wien",
    }),
    defineField({
      name: "credentials",
      title: "Qualifikationen & Ausbildungen",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
