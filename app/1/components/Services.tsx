"use client";

import { motion } from "framer-motion";
import { Heart, Droplets, Hand } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
  index: number;
}

function ServiceCard({ icon, title, description, price, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative flex flex-col border border-[#c9a96e]/15 bg-[#141414] p-8 sm:p-10 transition-all duration-500 hover:border-[#c9a96e]/40 hover:bg-[#1a1a1a]"
    >
      {/* Top gold accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent group-hover:via-[#c9a96e]/60 transition-all duration-500" />

      <div className="mb-6 text-[#c9a96e]">{icon}</div>

      <h3
        className="mb-4 text-xl tracking-wide text-[#f5f5f0] sm:text-2xl"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {title}
      </h3>

      <p className="mb-8 flex-1 text-[15px] leading-relaxed text-[#a0a0a0]">
        {description}
      </p>

      <div className="flex items-end justify-between border-t border-[#c9a96e]/10 pt-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#a0a0a0]">
          {price}
        </span>
        <a
          href="#kontakt"
          className="text-xs uppercase tracking-[0.15em] text-[#c9a96e] transition-colors duration-300 hover:text-[#dfc08a]"
        >
          Termin vereinbaren &rarr;
        </a>
      </div>
    </motion.div>
  );
}

const services = [
  {
    icon: <Heart size={28} strokeWidth={1.5} />,
    title: "Heilmassage",
    description:
      "Therapeutische Massage bei Schmerzen und Verspannungen. Kassenrückerstattung möglich.",
    price: "Ab €55",
  },
  {
    icon: <Droplets size={28} strokeWidth={1.5} />,
    title: "Lymphdrainage",
    description:
      "Sanfte Entstauungstherapie für mehr Wohlbefinden.",
    price: "Ab €55",
  },
  {
    icon: <Hand size={28} strokeWidth={1.5} />,
    title: "Klassische Massage",
    description:
      "Tiefe Entspannung für Körper und Geist.",
    price: "Ab €55",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="relative bg-[#0a0a0a] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a96e]">
            Was ich anbiete
          </p>
          <h2
            className="text-3xl tracking-wide text-[#f5f5f0] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Leistungen
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#c9a96e]/50" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
