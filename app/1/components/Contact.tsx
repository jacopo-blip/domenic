"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Terminanfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:praxis@heilmasseur-domenic.at?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontakt" className="relative bg-[#141414] py-28 sm:py-36">
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
            Jetzt Termin vereinbaren
          </p>
          <h2
            className="text-3xl tracking-wide text-[#f5f5f0] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Kontakt
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#c9a96e]/50" />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-[#c9a96e]" />
              <div>
                <h4 className="mb-1 text-sm font-medium uppercase tracking-[0.15em] text-[#f5f5f0]">
                  Adresse
                </h4>
                <p className="text-[15px] leading-relaxed text-[#a0a0a0]">
                  Feldgasse 3/20
                  <br />
                  1080 Wien
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-[#c9a96e]" />
              <div>
                <h4 className="mb-1 text-sm font-medium uppercase tracking-[0.15em] text-[#f5f5f0]">
                  Telefon
                </h4>
                <a
                  href="tel:+4367018952556"
                  className="text-[15px] text-[#a0a0a0] transition-colors hover:text-[#c9a96e]"
                >
                  +43 670 189 52 56
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-[#c9a96e]" />
              <div>
                <h4 className="mb-1 text-sm font-medium uppercase tracking-[0.15em] text-[#f5f5f0]">
                  E-Mail
                </h4>
                <a
                  href="mailto:praxis@heilmasseur-domenic.at"
                  className="text-[15px] text-[#a0a0a0] transition-colors hover:text-[#c9a96e]"
                >
                  praxis@heilmasseur-domenic.at
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#a0a0a0]"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-[#c9a96e]/20 bg-[#1a1a1a] px-5 py-3.5 text-[15px] text-[#f5f5f0] placeholder-[#555] outline-none transition-colors focus:border-[#c9a96e]/60"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#a0a0a0]"
              >
                E-Mail
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-[#c9a96e]/20 bg-[#1a1a1a] px-5 py-3.5 text-[15px] text-[#f5f5f0] placeholder-[#555] outline-none transition-colors focus:border-[#c9a96e]/60"
                placeholder="ihre@email.at"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#a0a0a0]"
              >
                Nachricht
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full resize-none border border-[#c9a96e]/20 bg-[#1a1a1a] px-5 py-3.5 text-[15px] text-[#f5f5f0] placeholder-[#555] outline-none transition-colors focus:border-[#c9a96e]/60"
                placeholder="Ihre Nachricht oder Terminwunsch..."
              />
            </div>

            <button
              type="submit"
              className="w-full border border-[#c9a96e] bg-[#c9a96e] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#0a0a0a] transition-all duration-300 hover:bg-[#dfc08a] hover:border-[#dfc08a]"
            >
              Nachricht senden
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
