"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Feldgasse 3/20, 1080 Wien",
    href: "https://maps.google.com/?q=Feldgasse+3+1080+Wien",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+43 670 189 52 56",
    href: "tel:+436701895256",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "praxis@heilmasseur-domenic.at",
    href: "mailto:praxis@heilmasseur-domenic.at",
  },
  {
    icon: Clock,
    label: "Termine",
    value: "Nach Vereinbarung",
    href: "tel:+436701895256",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:praxis@heilmasseur-domenic.at?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="kontakt"
      className="scroll-mt-20 py-24 sm:py-32 bg-[#f0f4f8]"
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
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2833] tracking-tight">
            Vereinbaren Sie Ihren Termin
          </h2>
          <p className="mt-4 text-[#566573] text-lg leading-relaxed">
            Ich freue mich auf Ihre Nachricht — persönlich, telefonisch oder per
            E-Mail.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 rounded-xl bg-white border border-[#e8eef3] p-5 transition-all duration-200 hover:shadow-md hover:shadow-[#1a5276]/5 hover:border-[#2980b9]/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f0f4f8] flex-shrink-0">
                  <item.icon className="h-5 w-5 text-[#1a5276]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#566573] uppercase tracking-wide mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[#1c2833] font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white border border-[#e8eef3] p-6 sm:p-8 shadow-sm"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact5-name"
                    className="block text-sm font-semibold text-[#1c2833] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact5-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ihr Name"
                    className="w-full rounded-xl border border-[#e8eef3] bg-[#f8fafc] px-4 py-3 text-[#1c2833] text-sm placeholder:text-[#566573]/50 outline-none transition-all focus:border-[#2980b9] focus:ring-2 focus:ring-[#2980b9]/10"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact5-email"
                    className="block text-sm font-semibold text-[#1c2833] mb-2"
                  >
                    E-Mail
                  </label>
                  <input
                    id="contact5-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ihre@email.at"
                    className="w-full rounded-xl border border-[#e8eef3] bg-[#f8fafc] px-4 py-3 text-[#1c2833] text-sm placeholder:text-[#566573]/50 outline-none transition-all focus:border-[#2980b9] focus:ring-2 focus:ring-[#2980b9]/10"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="contact5-message"
                  className="block text-sm font-semibold text-[#1c2833] mb-2"
                >
                  Nachricht
                </label>
                <textarea
                  id="contact5-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ihre Nachricht..."
                  className="w-full rounded-xl border border-[#e8eef3] bg-[#f8fafc] px-4 py-3 text-[#1c2833] text-sm placeholder:text-[#566573]/50 outline-none transition-all resize-none focus:border-[#2980b9] focus:ring-2 focus:ring-[#2980b9]/10"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-[#2980b9] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1a5276] hover:shadow-md"
              >
                <Send className="h-4 w-4" />
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
