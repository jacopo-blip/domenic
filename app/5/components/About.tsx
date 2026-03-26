"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, User } from "lucide-react";

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
    <section
      id="ueber-mich"
      className="scroll-mt-20 py-24 sm:py-32 bg-[#f0f4f8]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Image placeholder / visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1a5276] to-[#0e3350] p-12 sm:p-16 aspect-[4/3] flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Subtle pattern */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <User className="h-10 w-10 text-white/80" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Domenic Hacker
                  </h3>
                  <p className="text-white/60 text-sm font-medium">
                    Diplomierter Heilmasseur
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 rounded-xl bg-white p-4 shadow-lg shadow-[#1a5276]/10 border border-[#e8eef3]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#27ae60]/10">
                    <Award className="h-5 w-5 text-[#27ae60]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1c2833]">7+ Qualifikationen</p>
                    <p className="text-xs text-[#566573]">Zertifiziert & geprüft</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-[#2980b9] tracking-wide uppercase mb-3">
              Über mich
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2833] tracking-tight mb-6">
              Erfahrung trifft auf Leidenschaft
            </h2>
            <p className="text-[#566573] text-lg leading-relaxed mb-4">
              Domenic Hacker verbindet jahrelange Breakdance-Erfahrung mit
              fundierter Ausbildung als Heilmasseur. Sein einzigartiges
              Körperbewusstsein fließt in jede Behandlung ein.
            </p>
            <p className="text-[#566573] leading-relaxed mb-8">
              Mit einem tiefen Verständnis für den menschlichen Körper und einem
              breiten Spektrum an Techniken bietet er individuell abgestimmte
              Therapien auf höchstem Niveau.
            </p>

            {/* Credentials */}
            <div>
              <h3 className="text-sm font-semibold text-[#1c2833] uppercase tracking-wide mb-4">
                Qualifikationen
              </h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {credentials.map((cred) => (
                  <div
                    key={cred}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#27ae60] flex-shrink-0" />
                    <span className="text-sm text-[#566573] font-medium">
                      {cred}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
