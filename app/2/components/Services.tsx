"use client";

import { motion } from "framer-motion";
import { Heart, Droplets, Hand } from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

interface Service {
  number: string;
  title: string;
  description: string;
  price: string;
  icon: ComponentType<LucideProps>;
}

const services: Service[] = [
  {
    number: "01",
    title: "Heilmassage",
    description:
      "Therapeutische Massage bei Schmerzen und Verspannungen. Kassenrückerstattung möglich.",
    price: "Ab €55",
    icon: Heart,
  },
  {
    number: "02",
    title: "Lymphdrainage",
    description:
      "Sanfte Entstauungstherapie für mehr Wohlbefinden.",
    price: "Ab €55",
    icon: Droplets,
  },
  {
    number: "03",
    title: "Klassische Massage",
    description:
      "Tiefe Entspannung für Körper und Geist.",
    price: "Ab €55",
    icon: Hand,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const, delay: i * 0.15 },
  }),
};

export function Services() {
  return (
    <section id="leistungen" className="bg-[#fafaf8] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#c23b22] text-[11px] font-light tracking-[0.3em] uppercase">
            01
          </span>
          <span className="block flex-1 h-px bg-[#e5e5e0]" />
        </div>
        <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl font-extralight tracking-tight mb-16">
          Leistungen
        </h2>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e5e0]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-[#fafaf8] p-8 sm:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[#c5c5c0] text-xs font-light tracking-[0.2em]">
                    {service.number}
                  </span>
                  <Icon size={18} strokeWidth={1} className="text-[#6b6b6b]" />
                </div>

                <h3 className="text-[#1a1a1a] text-lg font-light tracking-wide mb-4">
                  {service.title}
                </h3>

                <p className="text-[#6b6b6b] text-sm font-light leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[#e5e5e0]">
                  <span className="text-[#1a1a1a] text-sm font-light">
                    {service.price}
                  </span>
                  <a
                    href="#kontakt"
                    className="text-[#6b6b6b] text-[11px] font-light tracking-[0.15em] uppercase hover:text-[#c23b22] transition-colors duration-300"
                  >
                    Buchen →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
