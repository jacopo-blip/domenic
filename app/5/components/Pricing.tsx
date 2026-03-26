"use client";

import { motion } from "framer-motion";
import { Clock, Info } from "lucide-react";

const services = ["Heilmassage", "Lymphdrainage", "Klassische Massage"];

const durations = [
  { label: "30 min", price: "€55" },
  { label: "45 min", price: "€70" },
  { label: "60 min", price: "€85" },
];

export function Pricing() {
  return (
    <section
      id="preise"
      className="scroll-mt-20 py-24 sm:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#2980b9] tracking-wide uppercase mb-3">
            Preise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2833] tracking-tight">
            Transparente Preisgestaltung
          </h2>
          <p className="mt-4 text-[#566573] text-lg leading-relaxed">
            Alle Behandlungen zum fairen Preis — ohne versteckte Kosten.
          </p>
        </motion.div>

        {/* Pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-[#e8eef3] overflow-hidden bg-white shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-4 bg-[#f0f4f8] border-b border-[#e8eef3]">
              <div className="p-5 sm:p-6">
                <span className="text-sm font-semibold text-[#1c2833] uppercase tracking-wide">
                  Behandlung
                </span>
              </div>
              {durations.map((d) => (
                <div key={d.label} className="p-5 sm:p-6 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-sm font-semibold text-[#1c2833] uppercase tracking-wide">
                    <Clock className="h-3.5 w-3.5 text-[#2980b9]" />
                    {d.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Table rows */}
            {services.map((service, idx) => (
              <div
                key={service}
                className={`grid grid-cols-4 transition-colors hover:bg-[#f8fafc] ${
                  idx < services.length - 1 ? "border-b border-[#e8eef3]" : ""
                }`}
              >
                <div className="p-5 sm:p-6 flex items-center">
                  <span className="text-sm sm:text-base font-semibold text-[#1c2833]">
                    {service}
                  </span>
                </div>
                {durations.map((d) => (
                  <div
                    key={d.label}
                    className="p-5 sm:p-6 flex items-center justify-center"
                  >
                    <span className="text-lg sm:text-xl font-bold text-[#1a5276]">
                      {d.price}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Info banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 rounded-xl bg-[#f0f4f8] border border-[#e8eef3] p-5 sm:p-6 flex items-start gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#27ae60]/10 flex-shrink-0">
              <Info className="h-5 w-5 text-[#27ae60]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1c2833] mb-1">
                Kassenrückerstattung möglich
              </p>
              <p className="text-sm text-[#566573] leading-relaxed">
                Bis zu 100% Rückerstattung bei Privatversicherung. Gerne berate
                ich Sie persönlich zu Ihren Erstattungsmöglichkeiten.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
