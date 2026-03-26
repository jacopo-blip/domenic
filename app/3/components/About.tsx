"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Flower2,
  Footprints,
  Activity,
  Target,
  Zap,
  CircleDot,
} from "lucide-react";

const credentials = [
  { icon: Award, label: "Diplomierter Heilmasseur" },
  { icon: Flower2, label: "Thai-Massage (Watpo)" },
  { icon: Footprints, label: "Manuelle Lymphdrainage" },
  { icon: Activity, label: "Sporttherapie & Triggerpunkttherapie" },
  { icon: Target, label: "Dorn-Breuss Methode" },
  { icon: Zap, label: "Reflexzonenmassage" },
  { icon: CircleDot, label: "Akupunkturmassage nach Penzel" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="ueber-mich"
      className="relative py-24 sm:py-32 bg-[#0d4f4f] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e8654a] via-[#f2a93b] to-[#0d4f4f]" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#e8654a]/8" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#f2a93b]/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — decorative panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Stacked cards visual */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-[#e8654a]/20 -rotate-3" />
              <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl bg-[#f2a93b]/15 -rotate-1" />
              <div className="relative rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 p-10 sm:p-12">
                <span className="text-[7rem] sm:text-[9rem] font-extrabold leading-none text-white/[0.07] block">
                  DH
                </span>
                <div className="mt-4">
                  <p className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    Domenic
                    <br />
                    Hacker
                  </p>
                  <p className="mt-3 text-white/60 text-lg">
                    Diplomierter Heilmasseur
                  </p>
                </div>
                {/* Stats row */}
                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { value: "15+", label: "Jahre Erfahrung" },
                    { value: "7", label: "Qualifikationen" },
                    { value: "1080", label: "Wien" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <span className="block text-2xl sm:text-3xl font-extrabold text-[#f2a93b]">
                        {stat.value}
                      </span>
                      <span className="block mt-1 text-xs text-white/50">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — text content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white/80"
            >
              Über mich
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
            >
              Von der Bewegung{" "}
              <span className="text-[#f2a93b]">zur Heilung</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-white/70 leading-relaxed"
            >
              Domenic Hacker verbindet jahrelange Breakdance-Erfahrung mit
              fundierter Ausbildung als Heilmasseur. Sein einzigartiges
              Körperbewusstsein fließt in jede Behandlung ein.
            </motion.p>

            {/* Credentials grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/[0.06] border border-white/[0.08] px-4 py-3"
                >
                  <cred.icon size={18} className="text-[#f2a93b] shrink-0" />
                  <span className="text-sm font-semibold text-white/80">
                    {cred.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
