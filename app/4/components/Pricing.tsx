"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";

const pricingData = [
  { service: "Heilmassage", min30: "€55", min45: "€70", min60: "€85" },
  { service: "Lymphdrainage", min30: "€55", min45: "€70", min60: "€85" },
  { service: "Klassische Massage", min30: "€55", min45: "€70", min60: "€85" },
];

export function Pricing() {
  return (
    <section id="preise" className="relative py-24 sm:py-32 bg-[#faf6f1]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#c2704e] mb-3">
            Preise
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2418]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Transparente Preisgestaltung
          </h2>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-[#c2704e]/40" />
        </motion.div>

        {/* Pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl bg-white shadow-[0_4px_30px_rgba(45,36,24,0.06)] overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-4 bg-[#c2704e] text-white">
            <div className="px-5 sm:px-8 py-4 text-sm font-semibold">Behandlung</div>
            <div className="px-3 sm:px-6 py-4 text-sm font-semibold text-center">30 Min</div>
            <div className="px-3 sm:px-6 py-4 text-sm font-semibold text-center">45 Min</div>
            <div className="px-3 sm:px-6 py-4 text-sm font-semibold text-center">60 Min</div>
          </div>

          {/* Table rows */}
          {pricingData.map((row, i) => (
            <div
              key={row.service}
              className={`grid grid-cols-4 items-center ${
                i !== pricingData.length - 1 ? "border-b border-[#f0e6d8]" : ""
              } ${i % 2 === 1 ? "bg-[#faf6f1]/50" : ""}`}
            >
              <div className="px-5 sm:px-8 py-5 text-sm sm:text-base font-medium text-[#2d2418]">
                {row.service}
              </div>
              <div className="px-3 sm:px-6 py-5 text-center text-sm sm:text-base font-semibold text-[#8b6f4e]">
                {row.min30}
              </div>
              <div className="px-3 sm:px-6 py-5 text-center text-sm sm:text-base font-semibold text-[#8b6f4e]">
                {row.min45}
              </div>
              <div className="px-3 sm:px-6 py-5 text-center text-sm sm:text-base font-semibold text-[#c2704e]">
                {row.min60}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Insurance note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-start gap-3 rounded-2xl bg-[#5c6b4a]/8 border border-[#5c6b4a]/15 px-6 py-5"
        >
          <Info size={20} className="text-[#5c6b4a] shrink-0 mt-0.5" />
          <p className="text-sm sm:text-base text-[#5c6b4a] leading-relaxed">
            <span className="font-semibold">Kassenr&uuml;ckerstattung m&ouml;glich</span> —
            bis zu 100% bei Privatversicherung.
          </p>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z"
            fill="#f5efe6"
          />
        </svg>
      </div>
    </section>
  );
}
