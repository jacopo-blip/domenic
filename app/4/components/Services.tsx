"use client";

import { motion } from "framer-motion";
import { Heart, Droplets, Hand } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
  delay: number;
}

function ServiceCard({ icon, title, description, price, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-3xl bg-white p-8 sm:p-10 shadow-[0_4px_30px_rgba(45,36,24,0.06)] hover:shadow-[0_8px_40px_rgba(194,112,78,0.12)] transition-all duration-500"
    >
      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#c2704e]/10 text-[#c2704e] group-hover:bg-[#c2704e] group-hover:text-white transition-all duration-400">
        {icon}
      </div>

      <h3
        className="text-xl sm:text-2xl font-bold text-[#2d2418] mb-3"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {title}
      </h3>

      <p className="text-[#7a6e60] leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-end justify-between border-t border-[#f0e6d8] pt-5">
        <span className="text-sm text-[#7a6e60]">Ab</span>
        <span className="text-2xl font-bold text-[#c2704e]">&euro;55</span>
      </div>
    </motion.div>
  );
}

const services = [
  {
    icon: <Heart size={26} strokeWidth={1.8} />,
    title: "Heilmassage",
    description:
      "Therapeutische Massage bei Schmerzen und Verspannungen. Kassenrückerstattung möglich.",
    price: "Ab €55",
  },
  {
    icon: <Droplets size={26} strokeWidth={1.8} />,
    title: "Lymphdrainage",
    description:
      "Sanfte Entstauungstherapie für mehr Wohlbefinden.",
    price: "Ab €55",
  },
  {
    icon: <Hand size={26} strokeWidth={1.8} />,
    title: "Klassische Massage",
    description:
      "Tiefe Entspannung für Körper und Geist.",
    price: "Ab €55",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="relative py-24 sm:py-32 bg-[#faf6f1]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#c2704e] mb-3">
            Leistungen
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2418]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Mein Angebot f&uuml;r Sie
          </h2>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-[#c2704e]/40" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              delay={i * 0.15}
            />
          ))}
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
            d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z"
            fill="#f5efe6"
          />
        </svg>
      </div>
    </section>
  );
}
