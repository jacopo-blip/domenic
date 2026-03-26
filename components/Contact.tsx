"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:praxis@heilmasseur-domenic.at?subject=Terminanfrage von ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

  return (
    <section id="kontakt" className="bg-[#d4e0ce] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#4a7c59] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Kontakt
          </p>
          <h2 className="text-[#1e3020] text-4xl font-bold">
            Termin vereinbaren
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/15 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[#4a7c59]" />
              </div>
              <div>
                <p className="text-[#1e3020] font-semibold text-sm mb-1">Adresse</p>
                <p className="text-[#4a5945] text-sm leading-relaxed">
                  Feldgasse 3/20<br />1080 Wien
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/15 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-[#4a7c59]" />
              </div>
              <div>
                <p className="text-[#1e3020] font-semibold text-sm mb-1">Telefon</p>
                <a
                  href="tel:+436701895256"
                  className="text-[#4a5945] text-sm hover:text-[#4a7c59] transition-colors"
                >
                  +43 670 189 52 56
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/15 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-[#4a7c59]" />
              </div>
              <div>
                <p className="text-[#1e3020] font-semibold text-sm mb-1">E-Mail</p>
                <a
                  href="mailto:praxis@heilmasseur-domenic.at"
                  className="text-[#4a5945] text-sm hover:text-[#4a7c59] transition-colors"
                >
                  praxis@heilmasseur-domenic.at
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form (mailto) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#e8ede4] rounded-3xl p-8 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="contact-name" className="text-[#1e3020] text-sm font-medium">Ihr Name</label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vorname Nachname"
                className="bg-[#d4e0ce] border border-[#c8d9bf] rounded-xl px-4 py-3 text-sm text-[#1e3020] placeholder:text-[#4a5945]/50 outline-none focus:border-[#4a7c59] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="contact-message" className="text-[#1e3020] text-sm font-medium">Nachricht</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Ich möchte einen Termin für eine Heilmassage vereinbaren..."
                className="bg-[#d4e0ce] border border-[#c8d9bf] rounded-xl px-4 py-3 text-sm text-[#1e3020] placeholder:text-[#4a5945]/50 outline-none focus:border-[#4a7c59] transition-colors resize-none"
              />
            </div>
            <a
              href={mailtoHref}
              className="bg-[#4a7c59] hover:bg-[#3a6347] text-white text-sm font-medium px-6 py-3 rounded-full text-center transition-colors"
            >
              Nachricht senden
            </a>
            <p className="text-[#4a5945] text-xs text-center">
              Öffnet Ihr E-Mail-Programm mit vorausgefüllter Nachricht
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
