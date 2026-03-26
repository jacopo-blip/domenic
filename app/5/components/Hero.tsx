"use client";

import { motion } from "framer-motion";
import { ArrowDown, Shield, Award, Clock } from "lucide-react";

const badges = [
  { icon: Shield, label: "Diplomierter Heilmasseur" },
  { icon: Award, label: "Kassenrückerstattung" },
  { icon: Clock, label: "Flexible Termine" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a5276] via-[#1a5276] to-[#0e3350]" />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-[#27ae60] animate-pulse" />
              Praxis in Wien 1080
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Ankommen.
            <br />
            Loslassen.
            <br />
            <span className="text-[#5dade2]">Aufatmen.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-white/75 max-w-xl leading-relaxed"
          >
            Diplomierter Heilmasseur in Wien 1080 — Ihr Raum für Entspannung
            und Heilung.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+436701895256"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2980b9] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#2980b9]/25 transition-all duration-200 hover:bg-[#3498db] hover:shadow-xl hover:shadow-[#2980b9]/30 hover:-translate-y-0.5"
            >
              Termin vereinbaren
            </a>
            <a
              href="#leistungen"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              Leistungen entdecken
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-6"
          >
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 text-white/60"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <badge.icon className="h-4 w-4 text-white/80" />
                </div>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
