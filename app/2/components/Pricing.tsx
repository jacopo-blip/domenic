"use client";

import { motion } from "framer-motion";

interface PricingRow {
  service: string;
  min30: string;
  min45: string;
  min60: string;
}

const rows: PricingRow[] = [
  { service: "Heilmassage", min30: "€55", min45: "€70", min60: "€85" },
  { service: "Lymphdrainage", min30: "€55", min45: "€70", min60: "€85" },
  { service: "Klassische Massage", min30: "€55", min45: "€70", min60: "€85" },
];

const slow = { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const };

export function Pricing() {
  return (
    <section id="preise" className="bg-[#fafaf8] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#c23b22] text-[11px] font-light tracking-[0.3em] uppercase">
            03
          </span>
          <span className="block flex-1 h-px bg-[#e5e5e0]" />
        </div>
        <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl font-extralight tracking-tight mb-16">
          Preise
        </h2>

        {/* Pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...slow, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-[#1a1a1a]">
                <th className="text-left pb-4 text-[#6b6b6b] text-[11px] font-light tracking-[0.25em] uppercase w-2/5">
                  Leistung
                </th>
                <th className="text-center pb-4 text-[#6b6b6b] text-[11px] font-light tracking-[0.25em] uppercase w-1/5">
                  30 Min
                </th>
                <th className="text-center pb-4 text-[#6b6b6b] text-[11px] font-light tracking-[0.25em] uppercase w-1/5">
                  45 Min
                </th>
                <th className="text-center pb-4 text-[#6b6b6b] text-[11px] font-light tracking-[0.25em] uppercase w-1/5">
                  60 Min
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[#e5e5e0] group"
                >
                  <td className="py-5 text-[#1a1a1a] text-sm sm:text-base font-light">
                    {row.service}
                  </td>
                  <td className="py-5 text-center text-[#1a1a1a] text-sm sm:text-base font-light">
                    {row.min30}
                  </td>
                  <td className="py-5 text-center text-[#1a1a1a] text-sm sm:text-base font-light">
                    {row.min45}
                  </td>
                  <td className="py-5 text-center text-[#1a1a1a] text-sm sm:text-base font-light">
                    {row.min60}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...slow, delay: 0.4 }}
          className="mt-10 flex items-start gap-3"
        >
          <span className="block w-1.5 h-1.5 rounded-full bg-[#c23b22] mt-1.5 shrink-0" />
          <p className="text-[#6b6b6b] text-sm font-light leading-relaxed">
            Kassenrückerstattung möglich — bis zu 100% bei Privatversicherung
          </p>
        </motion.div>
      </div>
    </section>
  );
}
