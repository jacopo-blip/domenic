"use client";

import { motion } from "framer-motion";

const credentials = [
  "Diplomierter Heilmasseur",
  "Thai-Massage (Watpo)",
  "Manuelle Lymphdrainage",
  "Sporttherapie & Triggerpunkttherapie",
  "Dorn-Breuss Methode",
  "Reflexzonenmassage",
  "Akupunkturmassage nach Penzel",
];

const slow = { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const };

export function About() {
  return (
    <section id="ueber-mich" className="bg-[#f5f4f0] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#c23b22] text-[11px] font-light tracking-[0.3em] uppercase">
            02
          </span>
          <span className="block flex-1 h-px bg-[#ddddd8]" />
        </div>
        <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl font-extralight tracking-tight mb-16">
          Über mich
        </h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...slow, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-[#1a1a1a] text-lg sm:text-xl font-extralight leading-relaxed mb-6">
              Domenic Hacker verbindet jahrelange Breakdance-Erfahrung mit fundierter
              Ausbildung als Heilmasseur.
            </p>
            <p className="text-[#6b6b6b] text-base font-light leading-relaxed">
              Sein einzigartiges Körperbewusstsein fließt in jede Behandlung ein.
              Durch die Verbindung von Bewegungskunst und therapeutischem Wissen
              entsteht ein ganzheitlicher Ansatz, der auf die individuellen
              Bedürfnisse jedes Klienten eingeht.
            </p>
          </motion.div>

          {/* Right: credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...slow, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <span className="text-[#6b6b6b] text-[11px] font-light tracking-[0.25em] uppercase block mb-6">
              Qualifikationen
            </span>
            <ul className="space-y-0">
              {credentials.map((cred, i) => (
                <li
                  key={i}
                  className="py-3 border-b border-[#ddddd8] flex items-center gap-3 group"
                >
                  <span className="block w-1 h-1 rounded-full bg-[#c5c5c0] group-hover:bg-[#c23b22] transition-colors duration-300" />
                  <span className="text-[#1a1a1a] text-sm font-light">
                    {cred}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
