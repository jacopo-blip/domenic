"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Subtle radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />

      {/* Gold accent lines */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-32 w-px bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Small pre-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c9a96e]"
        >
          Diplomierter Heilmasseur in Wien
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-8 text-4xl leading-tight tracking-wide text-[#f5f5f0] sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Ankommen.
          <br />
          Loslassen.
          <br />
          Aufatmen.
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-8 h-px w-24 origin-center bg-[#c9a96e]/60"
        />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-[#a0a0a0] md:text-xl"
        >
          Diplomierter Heilmasseur in Wien 1080 — Ihr Raum für Entspannung und
          Heilung.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center border border-[#c9a96e] bg-[#c9a96e] px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#0a0a0a] transition-all duration-300 hover:bg-[#dfc08a] hover:border-[#dfc08a]"
          >
            Termin buchen
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center border border-[#c9a96e]/40 px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e] transition-all duration-300 hover:border-[#c9a96e] hover:bg-[#c9a96e]/10"
          >
            Leistungen entdecken
          </a>
        </motion.div>
      </div>

      {/* Bottom gold line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-px bg-gradient-to-t from-transparent via-[#c9a96e]/30 to-transparent" />
    </section>
  );
}
