"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Droplets, Hand } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Heilmassage",
    description:
      "Tiefenwirksame Heilmassage zur Linderung von Verspannungen und Stress. Durch gezielte Techniken werden Blockaden gelöst, die Durchblutung gefördert und die Muskulatur entspannt. Ideal bei Schmerzen und Bewegungseinschränkungen mit ärztlicher Verordnung.",
    price: "Ab \u20ac55",
    color: "#e8654a",
    bgColor: "#e8654a",
    number: "01",
  },
  {
    icon: Droplets,
    title: "Lymphdrainage",
    description:
      "Sanfte manuelle Technik zur Entgiftung und Entstauung. Hilft bei Lymphödemen, Schwellungen nach OPs oder Verletzungen und fördert das Immunsystem. Auch ideal zur kosmetischen Anwendung bei Wassereinlagerungen und Cellulite.",
    price: "Ab \u20ac55",
    color: "#0d4f4f",
    bgColor: "#0d4f4f",
    number: "02",
  },
  {
    icon: Hand,
    title: "Klassische Massage",
    description:
      "Diese Massage bringt Körper und Geist wieder in Balance. Der Kreislauf beruhigt sich, die Atmung vertieft sich und die Muskulatur entspannt. Stresshormone werden reduziert und das Immunsystem gestärkt. Ideal für alle, die viel sitzen oder unter Anspannung stehen.",
    price: "Ab \u20ac55",
    color: "#f2a93b",
    bgColor: "#f2a93b",
    number: "03",
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="leistungen"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#f2a93b]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#e8654a]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0d4f4f]/8 px-4 py-1.5 text-sm font-bold text-[#0d4f4f]"
          >
            Massagen-Angebot
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#111]"
          >
            Was ich für Sie{" "}
            <span className="text-[#e8654a]">tun kann</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-[#555] leading-relaxed"
          >
            Hier geht es nicht nur um Entspannung, sondern um Ihr Wohlbefinden.
            Ich unterstütze Sie dabei, Verspannungen zu lösen, Schmerzen zu
            lindern und mehr Bewegungsfreiheit zu gewinnen.
          </motion.p>
        </div>

        <div className="mt-14 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative rounded-3xl bg-white border border-gray-100 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2"
              style={{
                boxShadow: `0 4px 30px ${service.bgColor}10`,
              }}
            >
              <span className="absolute top-6 right-8 text-[5rem] font-extrabold leading-none opacity-[0.04] select-none">
                {service.number}
              </span>

              <div
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${service.bgColor}12` }}
              >
                <service.icon
                  size={26}
                  style={{ color: service.color }}
                  strokeWidth={2.5}
                />
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-[#111]">
                {service.title}
              </h3>
              <p className="mt-3 text-[#555] leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span
                  className="inline-flex rounded-full px-4 py-1.5 text-sm font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${service.bgColor}, ${service.bgColor}cc)`,
                  }}
                >
                  {service.price}
                </span>
                <a
                  href="/buchen"
                  className="text-sm font-bold transition-colors hover:underline"
                  style={{ color: service.color }}
                >
                  Termin buchen &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
