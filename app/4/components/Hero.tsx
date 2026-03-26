"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#faf6f1] via-[#f5efe6] to-[#f0e6d8]">
      {/* Decorative arch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-b-full bg-[#c2704e]/[0.06] blur-[1px]" />

      {/* Decorative dots */}
      <div className="absolute top-32 left-8 sm:left-20 flex flex-col gap-3 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#c2704e]" />
        ))}
      </div>
      <div className="absolute bottom-40 right-8 sm:right-20 flex flex-col gap-3 opacity-20">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#5c6b4a]" />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 text-sm font-medium tracking-[0.2em] uppercase text-[#c2704e]"
        >
          Diplomierter Heilmasseur in Wien
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-[#2d2418]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Ankommen.{" "}
          <span className="text-[#c2704e]">Loslassen.</span>{" "}
          <br className="hidden sm:block" />
          Aufatmen.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#7a6e60] max-w-2xl mx-auto leading-relaxed"
        >
          Diplomierter Heilmasseur in Wien 1080 — Ihr Raum
          f&uuml;r Entspannung und Heilung.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+436701895256"
            className="rounded-full bg-[#c2704e] px-8 py-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(194,112,78,0.35)] hover:bg-[#a85d3e] hover:shadow-[0_6px_30px_rgba(194,112,78,0.45)] transition-all"
          >
            Jetzt Termin vereinbaren
          </a>
          <a
            href="#leistungen"
            className="rounded-full border-2 border-[#c2704e]/30 px-8 py-4 text-base font-semibold text-[#c2704e] hover:bg-[#c2704e]/[0.07] transition-all"
          >
            Leistungen entdecken
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-[#c2704e]/50" />
        </motion.div>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#faf6f1"
          />
        </svg>
      </div>
    </section>
  );
}
