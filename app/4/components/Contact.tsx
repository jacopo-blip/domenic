"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { type FormEvent } from "react";

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:praxis@heilmasseur-domenic.at?subject=${subject}&body=${body}`;
  }

  return (
    <section id="kontakt" className="relative py-24 sm:py-32 bg-[#f5efe6]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#c2704e] mb-3">
            Kontakt
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2418]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Schreiben Sie mir
          </h2>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-[#c2704e]/40" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-[#7a6e60] text-base sm:text-lg leading-relaxed">
              Ich freue mich auf Ihre Nachricht. Vereinbaren Sie einfach einen Termin
              oder stellen Sie mir Ihre Fragen.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#c2704e]/10 text-[#c2704e] shrink-0">
                  <MapPin size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-[#2d2418] text-sm mb-1">Adresse</p>
                  <p className="text-[#7a6e60]">Feldgasse 3/20, 1080 Wien</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#c2704e]/10 text-[#c2704e] shrink-0">
                  <Phone size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-[#2d2418] text-sm mb-1">Telefon</p>
                  <a
                    href="tel:+436701895256"
                    className="text-[#7a6e60] hover:text-[#c2704e] transition-colors"
                  >
                    +43 670 189 52 56
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#c2704e]/10 text-[#c2704e] shrink-0">
                  <Mail size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-[#2d2418] text-sm mb-1">E-Mail</p>
                  <a
                    href="mailto:praxis@heilmasseur-domenic.at"
                    className="text-[#7a6e60] hover:text-[#c2704e] transition-colors"
                  >
                    praxis@heilmasseur-domenic.at
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-8 sm:p-10 shadow-[0_4px_30px_rgba(45,36,24,0.06)]"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact4-name"
                    className="block text-sm font-medium text-[#2d2418] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact4-name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-[#e8ddd0] bg-[#faf6f1] px-4 py-3 text-[#2d2418] placeholder:text-[#b5a99a] focus:outline-none focus:ring-2 focus:ring-[#c2704e]/30 focus:border-[#c2704e] transition-all"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact4-email"
                    className="block text-sm font-medium text-[#2d2418] mb-2"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="contact4-email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-[#e8ddd0] bg-[#faf6f1] px-4 py-3 text-[#2d2418] placeholder:text-[#b5a99a] focus:outline-none focus:ring-2 focus:ring-[#c2704e]/30 focus:border-[#c2704e] transition-all"
                    placeholder="ihre@email.at"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact4-message"
                    className="block text-sm font-medium text-[#2d2418] mb-2"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="contact4-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-[#e8ddd0] bg-[#faf6f1] px-4 py-3 text-[#2d2418] placeholder:text-[#b5a99a] focus:outline-none focus:ring-2 focus:ring-[#c2704e]/30 focus:border-[#c2704e] transition-all resize-none"
                    placeholder="Wie kann ich Ihnen helfen?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#c2704e] px-6 py-4 text-base font-semibold text-white shadow-[0_4px_20px_rgba(194,112,78,0.3)] hover:bg-[#a85d3e] hover:shadow-[0_6px_28px_rgba(194,112,78,0.4)] transition-all"
                >
                  <Send size={18} strokeWidth={2} />
                  Nachricht senden
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
