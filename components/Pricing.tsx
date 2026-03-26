"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";

const services = ["Heilmassage", "Lymphdrainage", "Klassische Massage"];
const durations = [
  { label: "30 Min", price: "€55" },
  { label: "45 Min", price: "€70" },
  { label: "60 Min", price: "€85" },
];

export function Pricing() {
  return (
    <section id="preise" className="bg-[#e8ede4] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#4a7c59] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Preise
          </p>
          <h2 className="text-[#1e3020] text-4xl font-bold">
            Transparente Preise
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#d4e0ce] rounded-3xl overflow-hidden"
        >
          {/* Header row */}
          <div className="grid grid-cols-4 bg-[#4a7c59] text-white text-sm font-semibold">
            <div className="p-4 col-span-1">Leistung</div>
            {durations.map((d) => (
              <div key={d.label} className="p-4 text-center">{d.label}</div>
            ))}
          </div>

          {/* Data rows */}
          {services.map((s, i) => (
            <div
              key={s}
              className={`grid grid-cols-4 text-sm border-b border-[#c8d9bf] last:border-0 ${
                i % 2 === 0 ? "bg-[#d4e0ce]" : "bg-[#dce8d7]"
              }`}
            >
              <div className="p-4 text-[#1e3020] font-medium">{s}</div>
              {durations.map((d) => (
                <div key={d.label} className="p-4 text-center text-[#1e3020] font-semibold">
                  {d.price}
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Kassenhinweis */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex gap-3 bg-[#4a7c59]/10 border border-[#4a7c59]/20 rounded-2xl p-5"
        >
          <Info size={18} className="text-[#4a7c59] flex-shrink-0 mt-0.5" />
          <p className="text-[#4a5945] text-sm leading-relaxed">
            <strong className="text-[#1e3020]">Kassenrückerstattung möglich:</strong> Bei ärztlicher Verordnung kann die Heilmassage von der Krankenkasse teilweise oder vollständig (bis zu 100% bei Privatversicherung) rückerstattet werden. Sprechen Sie mich gerne darauf an.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
