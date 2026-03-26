"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d4f4f]">
      {/* Bold geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#e8654a]/15" />
        {/* Smaller circle */}
        <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#f2a93b]/10" />
        {/* Diagonal stripe */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#e8654a]/8 to-transparent" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full py-32 sm:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 text-sm font-semibold text-white/90">
                <span className="h-2 w-2 rounded-full bg-[#f2a93b] animate-pulse" />
                Diplomierter Heilmasseur in Wien
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 sm:mt-8 text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-white"
            >
              Ankommen.
              <br />
              <span className="text-[#f2a93b]">Loslassen.</span>
              <br />
              Aufatmen.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-lg text-lg sm:text-xl text-white/75 leading-relaxed"
            >
              Diplomierter Heilmasseur in Wien 1080 — Ihr Raum für Entspannung
              und Heilung.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 sm:mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-[#e8654a]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#e8654a]/40 hover:scale-105"
              >
                Termin buchen
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3.5 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40"
              >
                Leistungen entdecken
                <ArrowDown size={18} />
              </a>
            </motion.div>

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 sm:mt-14 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-[#f2a93b]" />
                Feldgasse 3/20, 1080 Wien
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} className="text-[#f2a93b]" />
                +43 670 189 52 56
              </span>
            </motion.div>
          </div>

          {/* Right side — decorative / large number element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex relative items-center justify-center"
          >
            {/* Decorative card stack */}
            <div className="relative w-full max-w-md">
              {/* Background card */}
              <div className="absolute -top-4 -left-4 w-full h-80 rounded-3xl bg-[#e8654a]/20 rotate-3" />
              {/* Middle card */}
              <div className="absolute -top-2 -left-2 w-full h-80 rounded-3xl bg-[#f2a93b]/20 rotate-1" />
              {/* Main card */}
              <div className="relative w-full h-80 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[8rem] font-extrabold leading-none text-white/10">
                    15+
                  </span>
                  <p className="mt-2 text-lg font-bold text-white">
                    Jahre Erfahrung
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    mit Körperarbeit, Bewegung & Therapie
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="rounded-full bg-[#e8654a]/20 text-[#e8654a] px-3 py-1 text-xs font-bold">
                    Heilmassage
                  </span>
                  <span className="rounded-full bg-[#f2a93b]/20 text-[#f2a93b] px-3 py-1 text-xs font-bold">
                    Lymphdrainage
                  </span>
                  <span className="rounded-full bg-white/15 text-white/80 px-3 py-1 text-xs font-bold">
                    Sporttherapie
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave / section break */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 45V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
