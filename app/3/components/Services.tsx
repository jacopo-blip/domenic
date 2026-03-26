"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Droplets, Hand } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Heilmassage",
    description:
      "Therapeutische Massage bei Schmerzen und Verspannungen. Kassenrückerstattung möglich.",
    price: "Ab €55",
    color: "#e8654a",
    bgColor: "#e8654a",
    number: "01",
  },
  {
    icon: Droplets,
    title: "Lymphdrainage",
    description:
      "Sanfte Entstauungstherapie für mehr Wohlbefinden.",
    price: "Ab €55",
    color: "#0d4f4f",
    bgColor: "#0d4f4f",
    number: "02",
  },
  {
    icon: Hand,
    title: "Klassische Massage",
    description:
      "Tiefe Entspannung für Körper und Geist.",
    price: "Ab €55",
    color: "#f2a93b",
    bgColor: "#f2a93b",
    number: "03",
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leistungen" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#f2a93b]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#e8654a]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        {/* Section header */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0d4f4f]/8 px-4 py-1.5 text-sm font-bold text-[#0d4f4f]"
          >
            Leistungen
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
            Individuell abgestimmte Behandlungen für Ihre Gesundheit und Ihr
            Wohlbefinden.
          </motion.p>
        </div>

        {/* Cards */}
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
              {/* Large background number */}
              <span
                className="absolute top-6 right-8 text-[5rem] font-extrabold leading-none opacity-[0.04] select-none"
              >
                {service.number}
              </span>

              {/* Icon */}
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
              <p className="mt-3 text-[#555] leading-relaxed">
                {service.description}
              </p>

              {/* Price pill */}
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
                  href="#kontakt"
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
