"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const credentials = [
  "Diplomierter Heilmasseur",
  "Thai-Massage (Watpo, Thailand)",
  "Manuelle Lymphdrainage",
  "Sporttherapie & Triggerpunkttherapie",
  "Dorn-Breuss Methode",
  "Reflexzonenmassage",
  "Akupunkturmassage nach Penzel",
];

export function About() {
  return (
    <section id="ueber-domenic" className="bg-[#d4e0ce] py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        {/* Organic image shape */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-gradient-to-br from-[#c8d9bf] to-[#4a7c59] flex items-center justify-center">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-white/25 flex items-center justify-center">
              <span className="text-white/60 text-sm text-center px-4">Foto<br />Domenic Hacker</span>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <p className="text-[#4a7c59] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Über mich
          </p>
          <h2 className="text-[#1e3020] text-4xl font-bold mb-5">
            Heilmassage ist meine Berufung
          </h2>
          <p className="text-[#4a5945] text-base leading-relaxed mb-4">
            Als diplomierter Heilmasseur bringe ich nicht nur handwerkliches Können, sondern auch ein tiefes Verständnis für den menschlichen Körper mit. Meine Leidenschaft für Bewegung — geprägt durch Jahre des Breakdancings — hat mir ein einzigartiges Körperbewusstsein gegeben, das ich täglich in meiner Arbeit einsetze.
          </p>
          <p className="text-[#4a5945] text-base leading-relaxed mb-8">
            Ich habe meine Ausbildung durch zahlreiche Spezialisierungen vertieft — von Thai-Massage in Thailand bis hin zu Lymphdrainage und Sporttherapie. Ihr Wohlbefinden und Ihre Gesundheit stehen bei mir immer im Mittelpunkt.
          </p>

          <div className="grid sm:grid-cols-2 gap-2">
            {credentials.map((c) => (
              <div key={c} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#4a7c59] flex-shrink-0" />
                <span className="text-[#4a5945] text-sm">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
