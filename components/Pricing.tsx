"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Info, ExternalLink } from "lucide-react";

const rows = [
  { service: "Heilmassage", p30: "\u20ac55", p45: "\u20ac70", p60: "\u20ac85" },
  { service: "Lymphdrainage", p30: "\u20ac55", p45: "\u20ac70", p60: "\u20ac85" },
  { service: "Klassische Massage", p30: "\u20ac55", p45: "\u20ac70", p60: "\u20ac85" },
];

export function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="preise"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#0d4f4f]/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#e8654a]/10 px-4 py-1.5 text-sm font-bold text-[#e8654a]"
          >
            Transparente Preise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#111]"
          >
            Faire Preise,{" "}
            <span className="text-[#e8654a]">spürbare Wirkung</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-[#555]"
          >
            Alle Behandlungen werden individuell auf Ihre Bedürfnisse
            abgestimmt.
          </motion.p>
        </div>

        {/* Pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 sm:mt-20 max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-white border border-gray-100 shadow-xl shadow-black/5 overflow-hidden">
            <div className="grid grid-cols-4 bg-[#0d4f4f] text-white">
              <div className="px-6 sm:px-8 py-5 font-extrabold text-sm sm:text-base">
                Behandlung
              </div>
              <div className="px-4 sm:px-6 py-5 text-center font-extrabold text-sm sm:text-base">
                30 Min
              </div>
              <div className="px-4 sm:px-6 py-5 text-center font-extrabold text-sm sm:text-base">
                45 Min
              </div>
              <div className="px-4 sm:px-6 py-5 text-center font-extrabold text-sm sm:text-base">
                <span className="inline-flex items-center gap-1.5">
                  60 Min
                  <span className="bg-[#f2a93b] text-[10px] font-bold px-2 py-0.5 rounded-full text-[#111]">
                    Beliebt
                  </span>
                </span>
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.service}
                className={`grid grid-cols-4 items-center ${
                  i < rows.length - 1 ? "border-b border-gray-100" : ""
                } hover:bg-[#0d4f4f]/[0.02] transition-colors`}
              >
                <div className="px-6 sm:px-8 py-5 sm:py-6">
                  <span className="font-bold text-sm sm:text-base text-[#111]">
                    {row.service}
                  </span>
                </div>
                <div className="px-4 sm:px-6 py-5 sm:py-6 text-center">
                  <span className="text-lg sm:text-xl font-extrabold text-[#333]">
                    {row.p30}
                  </span>
                </div>
                <div className="px-4 sm:px-6 py-5 sm:py-6 text-center">
                  <span className="text-lg sm:text-xl font-extrabold text-[#333]">
                    {row.p45}
                  </span>
                </div>
                <div className="px-4 sm:px-6 py-5 sm:py-6 text-center">
                  <span className="text-lg sm:text-xl font-extrabold text-[#e8654a]">
                    {row.p60}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Insurance note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-start gap-4 rounded-2xl bg-gradient-to-r from-[#0d4f4f]/[0.06] to-[#0d4f4f]/[0.02] border border-[#0d4f4f]/10 p-6 sm:p-8"
          >
            <div className="flex-shrink-0 mt-0.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d4f4f]/10">
                <Info size={20} className="text-[#0d4f4f]" />
              </div>
            </div>
            <div>
              <p className="font-bold text-[#111]">
                Zuschüsse von Krankenkassen & Versicherungen
              </p>
              <p className="mt-1 text-sm text-[#555] leading-relaxed">
                Je nach Krankenkasse bekommen Sie einen Teil Ihrer Massagekosten
                zurück. Sie haben auch die Möglichkeit, einen Teil der
                Therapiekosten bei einer Zusatzversicherung einzureichen.
                Privatversicherungen erstatten bis zu 100% der Therapiekosten
                zurück. Informieren Sie sich jetzt — es lohnt sich!
              </p>
              <a
                href="https://www.heilmasseur-domenic.at/#heilmasseur-zuschüsse"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#0d4f4f] hover:underline"
              >
                Heilmasseur-Zuschüsse nach Kassen
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {[
              "Individuell abgestimmt",
              "Keine Vertragsbindung",
              "Flexible Terminvergabe",
            ].map((feat) => (
              <span
                key={feat}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#555]"
              >
                <Check size={16} className="text-[#0d4f4f]" />
                {feat}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
