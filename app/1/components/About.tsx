"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const credentials = [
  "Diplomierter Heilmasseur",
  "Thai-Massage (Watpo)",
  "Manuelle Lymphdrainage",
  "Sporttherapie & Triggerpunkttherapie",
  "Dorn-Breuss Methode",
  "Reflexzonenmassage",
  "Akupunkturmassage nach Penzel",
];

export function About() {
  return (
    <section id="ueber-mich" className="relative bg-[#141414] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a96e]">
              Über mich
            </p>
            <h2
              className="mb-8 text-3xl tracking-wide text-[#f5f5f0] sm:text-4xl md:text-5xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Domenic Hacker
            </h2>
            <div className="mb-8 h-px w-16 bg-[#c9a96e]/50" />
            <p className="mb-6 text-[15px] leading-[1.8] text-[#a0a0a0]">
              Domenic Hacker verbindet jahrelange Breakdance-Erfahrung mit
              fundierter Ausbildung als Heilmasseur. Sein einzigartiges
              Körperbewusstsein fließt in jede Behandlung ein.
            </p>
            <p className="text-[15px] leading-[1.8] text-[#a0a0a0]">
              Mit einem tiefen Verständnis für den menschlichen Körper und einer
              Leidenschaft für Bewegung bietet er individuelle Behandlungen, die
              auf Ihre Bedürfnisse abgestimmt sind.
            </p>
          </motion.div>

          {/* Right column — credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="border border-[#c9a96e]/15 bg-[#1a1a1a] p-8 sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <Award size={22} strokeWidth={1.5} className="text-[#c9a96e]" />
                <h3
                  className="text-lg tracking-wide text-[#f5f5f0]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Qualifikationen
                </h3>
              </div>

              <ul className="space-y-4">
                {credentials.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={18}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-[#c9a96e]"
                    />
                    <span className="text-[15px] text-[#a0a0a0]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
