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
    <section id="ueber-mich" className="relative py-24 sm:py-32 bg-[#f5efe6]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — visual placeholder / decorative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#c2704e]/15 via-[#c2704e]/8 to-[#5c6b4a]/10 overflow-hidden">
              {/* Decorative arch */}
              <div className="absolute inset-8 rounded-3xl border-2 border-[#c2704e]/15" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#c2704e]/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#c2704e]/15" />

              {/* Award icon in center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                <Award size={48} className="text-[#c2704e]/60" strokeWidth={1.2} />
                <span className="text-sm font-medium text-[#c2704e]/70 tracking-wide">
                  Diplomiert
                </span>
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-8 left-8 flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#c2704e]/25" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#c2704e] mb-3">
              &Uuml;ber mich
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2418] mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Domenic Hacker
            </h2>

            <p className="text-[#7a6e60] text-base sm:text-lg leading-relaxed mb-8">
              Domenic Hacker verbindet jahrelange Breakdance-Erfahrung mit
              fundierter Ausbildung als Heilmasseur. Sein einzigartiges
              K&ouml;rperbewusstsein flie&szlig;t in jede Behandlung ein.
            </p>

            {/* Credentials */}
            <div className="space-y-3">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-[#5c6b4a] shrink-0" strokeWidth={2} />
                  <span className="text-[#2d2418] text-sm sm:text-base">{cred}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
            d="M0,20 C360,55 720,5 1080,35 C1260,48 1380,25 1440,20 L1440,60 L0,60 Z"
            fill="#faf6f1"
          />
        </svg>
      </div>
    </section>
  );
}
