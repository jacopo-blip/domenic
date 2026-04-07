import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Heilmassage Wien 1080 | Praxis Domenic Hacker",
  description:
    "Heilmassage in Wien 1080 (Josefstadt) – gezielt, wirksam und in der richtigen Intensität. Rückenschmerzen, Verspannungen, Nacken & Schulter. Jetzt Termin buchen.",
  alternates: {
    canonical: "https://heilmasseur-domenic.at/heilmassage-wien-1080",
  },
  openGraph: {
    title: "Heilmassage Wien 1080 | Praxis Domenic Hacker",
    description:
      "Heilmassage in Wien 1080 – gezielt, wirksam und in der richtigen Intensität. Jetzt Termin buchen.",
    url: "https://heilmasseur-domenic.at/heilmassage-wien-1080",
    locale: "de_AT",
    type: "website",
  },
};

const conditions = [
  "Rückenschmerzen",
  "Nacken & Schulter",
  "Verspannungen",
  "Nach dem Sport",
  "Viel Sitzen",
  "Stress",
];

const services = [
  "Heilmassage",
  "Klassische Massage",
  "Individuell angepasst",
  "Passende Intensität",
];

const effects = [
  { title: "Löst Verspannungen", desc: "Verhärtetes Gewebe wird gezielt gelockert und die Muskulatur entspannt." },
  { title: "Lindert Schmerzen", desc: "Gezielte Behandlung der Schmerzpunkte – wirksam, ohne unnötigen Druck." },
  { title: "Verbessert Beweglichkeit", desc: "Mehr Spielraum in Gelenken und Muskeln nach der Behandlung." },
  { title: "Unterstützt Regeneration", desc: "Fördert die Durchblutung und beschleunigt die Erholung des Körpers." },
];

const approach = [
  `Keine Standardmassage \u2013 gezielte Behandlung statt \u201Edr\u00FCbermassieren\u201C`,
  "Intensität wird laufend angepasst – nicht zu wenig, nicht zu viel",
  "Feedback jederzeit möglich und erwünscht",
  "Erfahrung und ein gutes Gespür für den richtigen Druck",
];

export default function HeilmassageWien() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative bg-[#0d4f4f] overflow-hidden">
          {/* subtle texture overlay */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-0 sm:pt-36">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
              {/* Text */}
              <div className="pb-16 lg:pb-24">
                <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
                  Wien 1080 · Josefstadt
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  Heilmassage in 1080 Wien
                </h1>
                <p className="mt-5 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
                  gezielt, wirksam und in der richtigen Intensität
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/buchen"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#e8654a]/30 transition-all duration-200 hover:shadow-xl hover:shadow-[#e8654a]/40 hover:scale-[1.03]"
                  >
                    Termin buchen
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </Link>
                  <a
                    href="/#kontakt"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                  >
                    Kontakt
                  </a>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative lg:self-end">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-t-3xl bg-[#f2a93b]/15 rotate-1 pointer-events-none" />
                <div className="relative rounded-t-3xl overflow-hidden aspect-[4/3] max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                  <Image
                    src="/images/heilmassage-wien.webp"
                    alt="Heilmassage Behandlung in Wien 1080 – Praxis Domenic Hacker"
                    fill
                    className="object-cover"
                    priority
                    quality={75}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FÜR WEN ──────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-2">
              Für wen ist das?
            </h2>
            <p className="text-[#555] mb-10 leading-relaxed">
              Wenn du dich hier wiedererkennst, bist du bei mir richtig.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {conditions.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-[#f5fafa] border border-[#0d4f4f]/10 px-4 py-3.5"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#e8654a] to-[#f2a93b] flex items-center justify-center">
                    <Check size={11} strokeWidth={3} className="text-white" />
                  </span>
                  <span className="text-sm font-semibold text-[#111]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USP / WIE ICH ARBEITE ─────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-[#f0f7f7]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-4">
                  Mein Schwerpunkt
                </h2>
                <p className="text-[#333] leading-relaxed mb-4">
                  Mein Schwerpunkt liegt auf der <strong>passenden Intensität</strong>.
                  Durch Erfahrung und ein gutes Gespür finde ich meist genau den
                  richtigen Druck – wirksam, aber ohne unnötigen Schmerz.
                </p>
                <p className="text-[#555] leading-relaxed">
                  Keine Massage ist wie die andere. Was du bekommst, ist eine
                  Behandlung, die sich an deinem Körper und deinem Feedback
                  orientiert – nicht an einem Schema.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0d4f4f] mb-5">
                  Wie ich arbeite
                </h3>
                <ul className="space-y-4">
                  {approach.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-[#e8654a] flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-[#333] leading-relaxed text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Praxis-Interieur */}
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/praxis-interior.png"
                  alt="Praxis-Interieur der Heilmassage Wien 1080 – Domenic Hacker"
                  fill
                  className="object-cover"
                  quality={75}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── WAS ICH MACHE ────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-3">
              Was ich mache
            </h2>
            <p className="text-[#555] mb-10 leading-relaxed">
              Heilmassage und klassische Massage – individuell angepasst, in
              passender Intensität.
            </p>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0d4f4f]/20 bg-[#f5fafa] px-5 py-2.5 text-sm font-semibold text-[#0d4f4f]"
                >
                  <span
                    aria-hidden
                    className="w-1.5 h-1.5 rounded-full bg-[#e8654a]"
                  />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WIRKUNG ──────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-[#f0f7f7]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-3">
              Was Massage bewirkt
            </h2>
            <p className="text-[#555] mb-10 leading-relaxed">
              Gezielt eingesetzt erzielt Massage messbare Ergebnisse.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {effects.map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white border border-[#0d4f4f]/8 p-6 shadow-sm"
                >
                  <h3 className="font-bold text-[#0d4f4f] mb-2">{title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-[#0d4f4f]">
          <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Bereit für eine Behandlung?
            </h2>
            <p className="text-white/65 mb-10 leading-relaxed">
              Termin direkt online buchen – oder melde dich, wenn du vorher
              Fragen hast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/buchen"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#e8654a]/30 transition-all duration-200 hover:shadow-xl hover:shadow-[#e8654a]/40 hover:scale-[1.03]"
              >
                Termin vereinbaren
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <a
                href="/#kontakt"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                Kontakt
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
