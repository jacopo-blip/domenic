"use client";

import { motion } from "framer-motion";
import { Heart, Droplets, Sparkles } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Heilmassage",
    description:
      "Gezielte Tiefenmassage zur Schmerzlinderung und Behandlung von Muskelverspannungen. Auf ärztliche Verordnung kassenrückerstattungsfähig.",
    highlight: "Kassenrückerstattung möglich",
  },
  {
    icon: Droplets,
    title: "Lymphdrainage",
    description:
      "Sanfte Entstauungstherapie zur Förderung des Lymphflusses, Entgiftung und Stärkung des Immunsystems. Ideal bei Schwellungen und Ödemen.",
    highlight: "Sanft & effektiv",
  },
  {
    icon: Sparkles,
    title: "Klassische Massage",
    description:
      "Ausgleichende Ganzkörpermassage zur tiefen Entspannung und Stressreduktion. Für Körper und Geist gleichermaßen.",
    highlight: "Tiefe Entspannung",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="bg-[#e8ede4] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#4a7c59] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Leistungen
          </p>
          <h2 className="text-[#1e3020] text-4xl font-bold">
            Was ich für Sie tue
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#d4e0ce] rounded-3xl p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#4a7c59]/15 flex items-center justify-center">
                <s.icon size={22} className="text-[#4a7c59]" />
              </div>
              <h3 className="text-[#1e3020] text-xl font-bold">{s.title}</h3>
              <p className="text-[#4a5945] text-sm leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#c8d9bf]">
                <span className="text-[#4a7c59] text-xs font-semibold">
                  {s.highlight}
                </span>
                <span className="text-[#1e3020] font-bold text-sm">ab €55</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
