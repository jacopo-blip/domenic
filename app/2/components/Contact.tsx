"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const slow = { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const };

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
    <section id="kontakt" className="bg-[#f5f4f0] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#c23b22] text-[11px] font-light tracking-[0.3em] uppercase">
            04
          </span>
          <span className="block flex-1 h-px bg-[#ddddd8]" />
        </div>
        <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl font-extralight tracking-tight mb-16">
          Kontakt
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...slow, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-[#1a1a1a] text-lg font-extralight leading-relaxed mb-10">
              Ich freue mich auf Ihre Nachricht. Vereinbaren Sie jetzt Ihren
              persönlichen Termin.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={16} strokeWidth={1} className="text-[#6b6b6b] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#6b6b6b] text-[11px] font-light tracking-[0.2em] uppercase block mb-1">
                    Adresse
                  </span>
                  <span className="text-[#1a1a1a] text-sm font-light">
                    Feldgasse 3/20, 1080 Wien
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={16} strokeWidth={1} className="text-[#6b6b6b] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#6b6b6b] text-[11px] font-light tracking-[0.2em] uppercase block mb-1">
                    Telefon
                  </span>
                  <a
                    href="tel:+436701895256"
                    className="text-[#1a1a1a] text-sm font-light hover:text-[#c23b22] transition-colors duration-300"
                  >
                    +43 670 189 52 56
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={16} strokeWidth={1} className="text-[#6b6b6b] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#6b6b6b] text-[11px] font-light tracking-[0.2em] uppercase block mb-1">
                    E-Mail
                  </span>
                  <a
                    href="mailto:praxis@heilmasseur-domenic.at"
                    className="text-[#1a1a1a] text-sm font-light hover:text-[#c23b22] transition-colors duration-300"
                  >
                    praxis@heilmasseur-domenic.at
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...slow, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="contact2-name"
                    className="text-[#6b6b6b] text-[11px] font-light tracking-[0.2em] uppercase block mb-3"
                  >
                    Name
                  </label>
                  <input
                    id="contact2-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-[#ddddd8] pb-2 text-[#1a1a1a] text-sm font-light focus:outline-none focus:border-[#c23b22] transition-colors duration-300 placeholder:text-[#c5c5c0]"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact2-email"
                    className="text-[#6b6b6b] text-[11px] font-light tracking-[0.2em] uppercase block mb-3"
                  >
                    E-Mail
                  </label>
                  <input
                    id="contact2-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-[#ddddd8] pb-2 text-[#1a1a1a] text-sm font-light focus:outline-none focus:border-[#c23b22] transition-colors duration-300 placeholder:text-[#c5c5c0]"
                    placeholder="ihre@email.at"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact2-message"
                  className="text-[#6b6b6b] text-[11px] font-light tracking-[0.2em] uppercase block mb-3"
                >
                  Nachricht
                </label>
                <textarea
                  id="contact2-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-[#ddddd8] pb-2 text-[#1a1a1a] text-sm font-light focus:outline-none focus:border-[#c23b22] transition-colors duration-300 resize-none placeholder:text-[#c5c5c0]"
                  placeholder="Wie kann ich Ihnen helfen?"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 bg-[#1a1a1a] text-white text-xs font-light tracking-[0.2em] uppercase hover:bg-[#333] transition-colors duration-300"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
