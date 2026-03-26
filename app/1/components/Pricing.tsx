"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";

const rows = [
  { service: "Heilmassage", min30: "€55", min45: "€70", min60: "€85" },
  { service: "Lymphdrainage", min30: "€55", min45: "€70", min60: "€85" },
  { service: "Klassische Massage", min30: "€55", min45: "€70", min60: "€85" },
];

export function Pricing() {
  return (
    <section id="preise" className="relative bg-[#0a0a0a] py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a96e]">
            Transparent & fair
          </p>
          <h2
            className="text-3xl tracking-wide text-[#f5f5f0] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Preise
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#c9a96e]/50" />
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-x-auto border border-[#c9a96e]/15 bg-[#141414]"
        >
          <table className="w-full min-w-[480px] text-left">
            <thead>
              <tr className="border-b border-[#c9a96e]/15">
                <th className="px-6 py-5 text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e] sm:px-8">
                  Behandlung
                </th>
                <th className="px-6 py-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e] sm:px-8">
                  30 Min
                </th>
                <th className="px-6 py-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e] sm:px-8">
                  45 Min
                </th>
                <th className="px-6 py-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e] sm:px-8">
                  60 Min
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.service}
                  className={`transition-colors duration-200 hover:bg-[#1a1a1a] ${
                    i < rows.length - 1 ? "border-b border-[#c9a96e]/10" : ""
                  }`}
                >
                  <td
                    className="px-6 py-5 text-[15px] text-[#f5f5f0] sm:px-8"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {row.service}
                  </td>
                  <td className="px-6 py-5 text-center text-[15px] text-[#a0a0a0] sm:px-8">
                    {row.min30}
                  </td>
                  <td className="px-6 py-5 text-center text-[15px] text-[#a0a0a0] sm:px-8">
                    {row.min45}
                  </td>
                  <td className="px-6 py-5 text-center text-[15px] text-[#a0a0a0] sm:px-8">
                    {row.min60}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Insurance note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-start gap-3 border border-[#c9a96e]/10 bg-[#141414] px-6 py-5"
        >
          <Info size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#c9a96e]" />
          <p className="text-sm leading-relaxed text-[#a0a0a0]">
            Kassenrückerstattung möglich — bis zu 100% bei Privatversicherung.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
