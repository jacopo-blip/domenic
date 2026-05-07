import type { SanityKrankenkasse } from "@/sanity/lib/queries";

const FALLBACK_KASSEN: SanityKrankenkasse[] = [
  {
    name: "ÖGK",
    fullName: "Österreichische Gesundheitskasse",
    reimbursement: "Stand 2026 — bitte direkt erfragen",
    condition: "In der Regel ärztliche Überweisung erforderlich",
  },
  {
    name: "BVAEB",
    fullName: "Versicherungsanstalt öffentlich Bediensteter",
    reimbursement: "Stand 2026 — bitte direkt erfragen",
    condition: "In der Regel ärztliche Überweisung erforderlich",
  },
  {
    name: "SVS",
    fullName: "Sozialversicherung der Selbständigen",
    reimbursement: "Stand 2026 — bitte direkt erfragen",
    condition: "In der Regel ärztliche Überweisung erforderlich",
  },
  {
    name: "Privat",
    fullName: "Private Zusatzversicherungen",
    reimbursement: "Bis zu 100 % je nach Tarif",
    condition: "Tarif-abhängig — Police prüfen",
  },
];

export function KrankenkassenTabelle({
  heading,
  intro,
  items,
  disclaimer,
}: {
  heading: string;
  intro: string;
  items?: SanityKrankenkasse[] | null;
  disclaimer: string;
}) {
  const data = items && items.length > 0 ? items : FALLBACK_KASSEN;

  return (
    <section className="py-16 sm:py-24 bg-[#f0f7f7]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-3">
          {heading}
        </h2>
        <p className="text-[#555] mb-10 leading-relaxed max-w-2xl">{intro}</p>

        <div className="rounded-3xl bg-white border border-gray-100 shadow-xl shadow-black/5 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0d4f4f] text-white">
                <th className="px-4 sm:px-6 py-4 text-left font-extrabold text-sm sm:text-base">
                  Kasse
                </th>
                <th className="px-4 sm:px-6 py-4 text-left font-extrabold text-sm sm:text-base">
                  Erstattung
                </th>
                <th className="hidden sm:table-cell px-4 sm:px-6 py-4 text-left font-extrabold text-sm sm:text-base">
                  Voraussetzung
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={row.name}
                  className={
                    i < data.length - 1 ? "border-b border-gray-100" : ""
                  }
                >
                  <td className="px-4 sm:px-6 py-4 align-top">
                    <p className="font-bold text-[#111]">{row.name}</p>
                    <p className="text-xs text-[#666]">{row.fullName}</p>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[#333] align-top">
                    {row.reimbursement}
                  </td>
                  <td className="hidden sm:table-cell px-4 sm:px-6 py-4 text-sm text-[#555] align-top">
                    {row.condition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-[#666] italic max-w-3xl">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
