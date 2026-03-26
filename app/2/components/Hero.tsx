"use client";

import { motion } from "framer-motion";

const slow = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const };

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fafaf8] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content — takes 7 cols */}
          <div className="lg:col-span-7">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...slow, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-[#c23b22]" />
              <span className="text-[#6b6b6b] text-[11px] font-light tracking-[0.3em] uppercase">
                Heilmasseur in Wien
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...slow, delay: 0.4 }}
              className="text-[#1a1a1a] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[1.1] tracking-tight"
            >
              Ankommen.
              <br />
              <span className="text-[#6b6b6b]">Loslassen.</span>
              <br />
              Aufatmen.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...slow, delay: 0.7 }}
              className="mt-8 text-[#6b6b6b] text-base sm:text-lg font-light leading-relaxed max-w-lg"
            >
              Diplomierter Heilmasseur in Wien 1080 — Ihr Raum für Entspannung und Heilung.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...slow, delay: 1.0 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a
                href="#kontakt"
                className="inline-block px-8 py-3.5 bg-[#c23b22] text-white text-xs font-light tracking-[0.2em] uppercase hover:bg-[#a83220] transition-colors duration-300"
              >
                Termin buchen
              </a>
              <a
                href="#leistungen"
                className="text-[#6b6b6b] text-xs font-light tracking-[0.15em] uppercase hover:text-[#1a1a1a] transition-colors duration-300 flex items-center gap-2"
              >
                Mehr erfahren
                <span className="inline-block w-6 h-px bg-[#6b6b6b]" />
              </a>
            </motion.div>
          </div>

          {/* Right decorative element — 5 cols */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="hidden lg:flex lg:col-span-5 justify-center items-center"
          >
            <div className="relative w-72 h-72">
              {/* Enso-inspired circle */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  stroke="#e5e5e0"
                  strokeWidth="0.5"
                />
                <path
                  d="M 100 10 A 90 90 0 1 1 40 170"
                  stroke="#1a1a1a"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.15"
                />
                <circle cx="100" cy="100" r="2" fill="#c23b22" />
              </svg>
              {/* Vertical text */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                <span className="text-[10px] font-light tracking-[0.4em] uppercase text-[#c5c5c0]">
                  Wien 1080
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="h-px bg-[#e5e5e0]" />
        </div>
      </div>
    </section>
  );
}
