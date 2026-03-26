"use client";

import { motion } from "framer-motion";
import { Heart, Droplets, Hand, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Heilmassage",
    description:
      "Therapeutische Massage bei Schmerzen und Verspannungen. Kassenrückerstattung möglich.",
    price: "Ab €55",
    features: ["Schmerzlinderung", "Verspannungen lösen", "Kassenrückerstattung"],
  },
  {
    icon: Droplets,
    title: "Lymphdrainage",
    description:
      "Sanfte Entstauungstherapie für mehr Wohlbefinden.",
    price: "Ab €55",
    features: ["Entstauung", "Sanfte Technik", "Mehr Wohlbefinden"],
  },
  {
    icon: Hand,
    title: "Klassische Massage",
    description:
      "Tiefe Entspannung für Körper und Geist.",
    price: "Ab €55",
    features: ["Tiefenentspannung", "Stressabbau", "Regeneration"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Services() {
  return (
    <section
      id="leistungen"
      className="scroll-mt-20 py-24 sm:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#2980b9] tracking-wide uppercase mb-3">
            Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2833] tracking-tight">
            Behandlungen für Ihr Wohlbefinden
          </h2>
          <p className="mt-4 text-[#566573] text-lg leading-relaxed">
            Individuell abgestimmte Therapien — professionell, einfühlsam und
            auf Ihre Bedürfnisse zugeschnitten.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-[#e8eef3] bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#1a5276]/5 hover:border-[#2980b9]/20"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#2980b9] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f0f4f8] text-[#1a5276] transition-colors duration-300 group-hover:bg-[#1a5276] group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1c2833] mb-3">
                {service.title}
              </h3>
              <p className="text-[#566573] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-[#566573]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#27ae60] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-[#e8eef3]">
                <span className="text-lg font-bold text-[#1a5276]">
                  {service.price}
                </span>
                <a
                  href="tel:+436701895256"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2980b9] transition-colors hover:text-[#1a5276]"
                >
                  Termin buchen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
