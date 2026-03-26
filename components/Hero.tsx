"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section className="min-h-screen bg-[#e8ede4] pt-16 flex flex-col">
      {/* Main hero content */}
      <div className="flex-1 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 py-20">
        {/* Text */}
        <div className="flex-1">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#4a7c59] text-xs font-semibold tracking-[0.15em] uppercase mb-5"
          >
            Heilmasseur · Wien 1080
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#1e3020] text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Ankommen.<br />
            Loslassen.<br />
            Aufatmen.
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#4a5945] text-base leading-relaxed mb-8 max-w-md"
          >
            Diplomierter Heilmasseur mit einem einzigartigen Gespür für den menschlichen Körper. Heilmassage, Lymphdrainage & Klassische Massage in Wien.
          </motion.p>
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#kontakt"
              className="bg-[#4a7c59] hover:bg-[#3a6347] text-white px-7 py-3 rounded-full font-medium transition-colors text-center"
            >
              Termin buchen
            </a>
            <a
              href="#leistungen"
              className="border border-[#4a7c59] text-[#4a7c59] hover:bg-[#d4e0ce] px-7 py-3 rounded-full font-medium transition-colors text-center"
            >
              Leistungen ansehen
            </a>
          </motion.div>
        </div>

        {/* Organic shape / image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div
            className="w-72 h-72 md:w-96 md:h-96 rounded-[60%_40%_55%_45%/45%_55%_45%_55%] bg-gradient-to-br from-[#c8d9bf] to-[#4a7c59] flex items-center justify-center"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[60%_40%_55%_45%/45%_55%_45%_55%] bg-white/30 flex items-center justify-center">
              <span className="text-white/60 text-sm text-center px-4">Foto<br />Domenic Hacker</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-[#d4e0ce] border-t border-[#c8d9bf]"
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap gap-8 md:gap-16">
          <div>
            <span className="block text-[#1e3020] text-xl font-bold">3</span>
            <span className="text-[#4a5945] text-xs">Massagearten</span>
          </div>
          <div>
            <span className="block text-[#1e3020] text-xl font-bold">ab €55</span>
            <span className="text-[#4a5945] text-xs">pro 30 Minuten</span>
          </div>
          <div>
            <span className="block text-[#1e3020] text-xl font-bold">Dipl.</span>
            <span className="text-[#4a5945] text-xs">Heilmasseur</span>
          </div>
          <div>
            <span className="block text-[#1e3020] text-xl font-bold">100%</span>
            <span className="text-[#4a5945] text-xs">Kassenrückerstattung möglich</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
