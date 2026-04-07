"use client";

import { useEffect, useState, useCallback } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  CheckCircle,
  CalendarCheck,
  RotateCcw,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

const steps = [
  { step: "1", text: "Behandlung auswählen" },
  { step: "2", text: "Wunschtermin wählen" },
  { step: "3", text: "Kontaktdaten eingeben" },
];

export function BookingContent() {
  const [booked, setBooked] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Listen for Calendly event_scheduled postMessage
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (
        e.origin === "https://calendly.com" &&
        e.data?.event === "calendly.event_scheduled"
      ) {
        setBooked(true);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const resetBooking = useCallback(() => {
    setBooked(false);
    setIframeKey((k) => k + 1);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d4f4f]">
      <Navbar />

      {/* Hero section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#e8654a]/15" />
          <div className="absolute bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#f2a93b]/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Termin online buchen —{" "}
              <span className="text-[#f2a93b]">schnell & unkompliziert</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">
              In 3 einfachen Schritten zu Ihrem Termin
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              {steps.map((s, i) => (
                <div key={s.step} className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f2a93b] text-[#111] font-extrabold text-base aspect-square">
                    {s.step}
                  </span>
                  <span className="text-white/80 font-semibold text-sm">
                    {s.text}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden sm:block text-white/30 ml-4">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendly — directly on the page, no container */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6">
          <p className="text-sm text-[#555] text-center">
            Medizinische Massagen erfolgen auf Grundlage einer ärztlichen
            Verordnung.
          </p>
        </div>

        {booked ? (
          <div className="mx-auto max-w-2xl px-5 sm:px-8 py-20 text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#0d4f4f]/10 mb-6">
              <CalendarCheck size={40} className="text-[#0d4f4f]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#111]">
              Termin erfolgreich gebucht!
            </h2>
            <p className="mt-3 text-lg text-[#555]">
              Sie erhalten in Kürze eine Bestätigung per E-Mail.
            </p>
            <button
              onClick={resetBooking}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#e8654a]/25 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <RotateCcw size={18} />
              Weiteren Termin buchen
            </button>
          </div>
        ) : (
          // TODO: Calendly Cookie-Banner sitzt links unten im iFrame (position: fixed).
          // Kann nur in Domenics Calendly Account Settings > Cookie Consent
          // auf "centered" umgestellt werden - von aussen nicht steuerbar.
          //
          // Mobile scrolling fix: iframe is made tall enough to avoid internal
          // scrolling. scrolling="no" + touch-action:pan-y ensure the page
          // (not the iframe) handles touch-scroll on mobile.
          <div style={{ touchAction: "pan-y" }}>
            <iframe
              key={iframeKey}
              src="https://calendly.com/praxis-heilmasseur-domenic"
              className="w-full border-0 min-h-[900px] sm:min-h-[700px]"
              scrolling="no"
              title="Termin buchen bei Heilmasseur Domenic Hacker"
            />
          </div>
        )}
      </section>

      {/* Info & Map section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111]">
                So finden Sie{" "}
                <span className="text-[#0d4f4f]">die Praxis</span>
              </h2>
              <p className="mt-3 text-[#555] leading-relaxed">
                Die Praxis befindet sich im 8. Bezirk (Josefstadt) und ist mit
                öffentlichen Verkehrsmitteln gut erreichbar.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    icon: MapPin,
                    label: "Adresse",
                    value: "Feldgasse 3/20, 1080 Wien",
                    href: "https://maps.google.com/?q=Feldgasse+3,+1080+Wien",
                    color: "#e8654a",
                  },
                  {
                    icon: Phone,
                    label: "Telefon",
                    value: "+43 670 189 52 56",
                    href: "tel:+4367018952556",
                    color: "#0d4f4f",
                  },
                  {
                    icon: Mail,
                    label: "E-Mail",
                    value: "praxis@heilmasseur-domenic.at",
                    href: "mailto:praxis@heilmasseur-domenic.at",
                    color: "#f2a93b",
                  },
                  {
                    icon: Clock,
                    label: "Termine",
                    value: "Nach Vereinbarung",
                    color: "#0d4f4f",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl bg-white border border-gray-100 p-5 shadow-sm"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-1 block text-sm sm:text-base font-semibold text-[#111] hover:text-[#0d4f4f] transition-colors"
                        >
                          {item.value}
                          {item.href.startsWith("http") && (
                            <ExternalLink
                              size={14}
                              className="inline ml-1.5 -mt-0.5"
                            />
                          )}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm sm:text-base font-semibold text-[#111]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-2">
                {[
                  "Barrierefreier Zugang",
                  "Parkplätze in der Nähe",
                  "U-Bahn Rathaus (U2) in 5 Min.",
                ].map((info) => (
                  <div
                    key={info}
                    className="flex items-center gap-2 text-sm text-[#555]"
                  >
                    <CheckCircle size={16} className="text-[#0d4f4f]" />
                    {info}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.6!2d16.349!3d48.211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFeldgasse+3%2C+1080+Wien!5e0!3m2!1sde!2sat!4v1"
                className="w-full h-[400px] lg:h-full min-h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Praxis Standort - Feldgasse 3/20, 1080 Wien"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} Domenic Hacker. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-4">
            <a href="/" className="hover:text-white transition-colors">
              Startseite
            </a>
            <a href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
