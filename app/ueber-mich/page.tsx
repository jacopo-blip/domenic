import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Flower2,
  Footprints,
  Activity,
  Target,
  Zap,
  CircleDot,
  Hand,
  Waves,
  BatteryCharging,
  ArrowLeft,
  Calendar,
  MapPin,
  Quote,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAbout } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Über Domenic Hacker | Heilmasseur Wien 1080",
  description:
    "Diplomierter Heilmasseur mit 15+ Jahren Erfahrung und 11 Qualifikationen in Wien 1080. Erfahren Sie mehr über Domenic Hackers Weg, seine Ausbildungen und Therapiephilosophie.",
  openGraph: {
    title: "Über Domenic Hacker | Heilmasseur Wien 1080",
    description:
      "Diplomierter Heilmasseur mit 15+ Jahren Erfahrung in Wien 1080. Nuad Thai, Lymphdrainage, Akupunktur-Massage und mehr.",
    url: "https://heilmasseur-domenic.at/ueber-mich",
  },
  alternates: {
    canonical: "https://heilmasseur-domenic.at/ueber-mich",
  },
};

const FALLBACK_CREDENTIALS = [
  { icon: Award, label: "Diplomierter Heilmasseur" },
  { icon: Flower2, label: "Nuad Thai Massage (Watpo-Stil)" },
  { icon: Flower2, label: "Thai Tisch Massage" },
  { icon: Footprints, label: "Manuelle Lymphdrainage (Dr. Vodder)" },
  { icon: Hand, label: "Bindegewebs-Massage" },
  { icon: Activity, label: "Sportbetreuer" },
  { icon: Target, label: "Dorn-Breuss Wirbelsäulenbehandlung" },
  { icon: Zap, label: "Fußreflexzonen-Massage" },
  { icon: CircleDot, label: "Akupunktur Massage (Penzel)" },
  { icon: Waves, label: "Schröpfen" },
  { icon: BatteryCharging, label: "Elektrotherapie" },
];

const FALLBACK_BIO = [
  "Ich verbinde fundiertes Fachwissen mit einem feinen Gespür für den Körper. Bewegung prägt mein Leben — sowohl in der Therapie als auch im Breakdance, der meine Körperwahrnehmung nachhaltig geschult hat.",
  "Durch meine Erfahrung in Rehabilitationsinstituten behandle ich Beschwerden gezielt und unterstütze Sie dabei, wieder mehr Bewegungsfreiheit zu gewinnen. Heilmasseur ist meine Berufung — Ihre Entspannung mein Ziel.",
  "Ich habe meine Ausbildung mit ausgezeichnetem Erfolg abgeschlossen. Eine ständige Fortbildung steht für mich an oberster Stelle.",
];

export default async function UeberMichPage() {
  const about = await getAbout();

  const bio =
    about?.bio && about.bio.length > 0 ? about.bio : FALLBACK_BIO;

  const credentials =
    about?.credentials && about.credentials.length > 0
      ? about.credentials.map((label, i) => ({
          icon: FALLBACK_CREDENTIALS[i % FALLBACK_CREDENTIALS.length].icon,
          label,
        }))
      : FALLBACK_CREDENTIALS;

  const yearsExperience = about?.yearsExperience ?? "15+";
  const qualificationsCount = about?.qualificationsCount ?? "11";

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative bg-[#0d4f4f] pt-24 pb-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e8654a] via-[#f2a93b] to-[#0d4f4f]" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#e8654a]/8 pointer-events-none" />
          <div className="absolute top-20 -left-32 w-[350px] h-[350px] rounded-full bg-[#f2a93b]/5 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              Zurück zur Startseite
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
              {/* Left — text */}
              <div className="pb-16 lg:pb-24">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white/80">
                  Heilmasseur in Wien 1080
                </span>

                <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight text-white">
                  Domenic{" "}
                  <span className="text-[#f2a93b]">Hacker</span>
                </h1>

                <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-md">
                  Diplomierter Heilmasseur mit Leidenschaft für Bewegung und
                  gezieltes Arbeiten am Körper. Seit über {yearsExperience} Jahren
                  helfe ich Menschen, Schmerzen zu lindern und Wohlbefinden
                  zurückzugewinnen.
                </p>

                {/* Stats row */}
                <div className="mt-8 flex flex-wrap gap-6">
                  <div>
                    <span className="block text-3xl font-extrabold text-[#f2a93b]">
                      {yearsExperience}
                    </span>
                    <span className="text-sm text-white/50">Jahre Erfahrung</span>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div>
                    <span className="block text-3xl font-extrabold text-[#f2a93b]">
                      {qualificationsCount}
                    </span>
                    <span className="text-sm text-white/50">Qualifikationen</span>
                  </div>
                  <div className="w-px bg-white/15" />
                  <div className="flex items-start gap-1.5">
                    <MapPin size={14} className="text-[#e8654a] mt-1 shrink-0" />
                    <div>
                      <span className="block text-white/90 font-semibold text-sm">
                        Feldgasse 3/20
                      </span>
                      <span className="text-sm text-white/50">1080 Wien</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/buchen"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#e8654a]/30 hover:shadow-xl hover:shadow-[#e8654a]/35 hover:scale-105 transition-all duration-200"
                >
                  <Calendar size={16} />
                  Jetzt Termin buchen
                </Link>
              </div>

              {/* Right — portrait */}
              <div className="relative lg:self-end">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-t-3xl bg-[#f2a93b]/15 rotate-1 pointer-events-none" />
                <div className="relative rounded-t-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                  <Image
                    src="/images/hero-portrait.png"
                    alt="Domenic Hacker – Diplomierter Heilmasseur in Wien"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mein Weg ──────────────────────────────────────────────── */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image column */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl bg-[#0d4f4f]/8 rotate-2 pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
                  <Image
                    src="/images/domenic-wien.webp"
                    alt="Domenic Hacker bei der Behandlung"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Breakdance overlay */}
                <div className="absolute -bottom-4 -right-4 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/images/breakdance.jpg"
                    alt="Domenic Hacker beim Breakdance – Körpergefühl und Bewegung"
                    fill
                    className="object-cover"
                    quality={75}
                  />
                </div>
              </div>

              {/* Text column */}
              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0d4f4f]/8 px-4 py-1.5 text-sm font-bold text-[#0d4f4f]">
                  Mein Weg
                </span>

                <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight text-[#111]">
                  Von der Bewegung{" "}
                  <span className="text-[#0d4f4f]">zur Heilung</span>
                </h2>

                <div className="mt-6 space-y-4 text-base text-[#555] leading-relaxed">
                  {bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Highlight cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#0d4f4f]/5 border border-[#0d4f4f]/10 p-4">
                    <span className="block text-2xl font-extrabold text-[#0d4f4f]">
                      Ausgezeichnet
                    </span>
                    <span className="text-sm text-[#555]">
                      Abschluss mit Auszeichnung
                    </span>
                  </div>
                  <div className="rounded-2xl bg-[#e8654a]/5 border border-[#e8654a]/10 p-4">
                    <span className="block text-2xl font-extrabold text-[#e8654a]">
                      Reha-Erfahrung
                    </span>
                    <span className="text-sm text-[#555]">
                      In Rehabilitationsinstituten
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Qualifikationen ───────────────────────────────────────── */}
        <section className="py-24 sm:py-32 bg-[#0d4f4f] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e8654a] via-[#f2a93b] to-[#0d4f4f]" />
          <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-[#f2a93b]/5 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white/80">
                  Ausbildungen &amp; Qualifikationen
                </span>
                <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight text-white">
                  {qualificationsCount} anerkannte{" "}
                  <span className="text-[#f2a93b]">Zertifizierungen</span>
                </h2>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Stetige Weiterbildung ist für mich keine Pflicht, sondern
                  Überzeugung — damit Sie stets von den wirksamsten Methoden
                  profitieren.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {credentials.map((cred) => (
                    <div
                      key={cred.label}
                      className="flex items-center gap-3 rounded-2xl bg-white/[0.06] border border-white/[0.08] px-4 py-3.5 hover:bg-white/[0.1] transition-colors duration-200"
                    >
                      <cred.icon size={18} className="text-[#f2a93b] shrink-0" />
                      <span className="text-sm font-semibold text-white/85">
                        {cred.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zertifikate-Bild */}
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/images/zertifikate.jpg"
                  alt="Zertifikate und Ausbildungsnachweise von Domenic Hacker, Heilmasseur Wien"
                  fill
                  className="object-cover"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d4f4f]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-semibold text-white">
                    Alle Qualifikationen staatlich anerkannt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Behandlungsraum ───────────────────────────────────────── */}
        <section className="relative h-64 sm:h-80 overflow-hidden">
          <Image
            src="/images/behandlungsraum.webp"
            alt="Behandlungsraum der Heilmassage-Praxis von Domenic Hacker in Wien 1080"
            fill
            className="object-cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-[#0d4f4f]/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl sm:text-2xl font-bold text-white/90 tracking-wide text-center px-4">
              Eine Atmosphäre, in der Sie sich wohlfühlen
            </p>
          </div>
        </section>

        {/* ── Meine Philosophie ─────────────────────────────────────── */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0d4f4f]/8 px-4 py-1.5 text-sm font-bold text-[#0d4f4f]">
                  Meine Philosophie
                </span>
                <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight text-[#111]">
                  Kein{" "}
                  <span className="text-[#e8654a]">„Drüberarbeiten"</span> —
                  sondern gezielte Wirkung
                </h2>

                <div className="mt-6 space-y-4 text-base text-[#555] leading-relaxed">
                  <p>
                    Jeder Körper spricht eine eigene Sprache. Deshalb beginne
                    ich jede Behandlung mit einem kurzen Gespräch: Wo drückt
                    der Schuh? Was soll sich danach anders anfühlen? Erst dann
                    lege ich los — mit der Intensität, die Ihr Körper gerade
                    braucht.
                  </p>
                  <p>
                    Zu viel Druck löst Schutzmechanismen aus, zu wenig bringt
                    nichts. Mein Ziel ist die goldene Mitte: eine Behandlung,
                    die Sie spüren, ohne Sie zu überfordern.
                  </p>
                  <p>
                    Meine Breakdance-Vergangenheit hat mir gelehrt, wie
                    Bewegung und Körpergefühl zusammenspielen — dieses Wissen
                    fließt direkt in meine Arbeit ein.
                  </p>
                </div>
              </div>

              {/* Quote card */}
              <div className="relative">
                <div className="rounded-3xl bg-[#0d4f4f] p-8 sm:p-10">
                  <Quote
                    size={40}
                    className="text-[#f2a93b] mb-4 opacity-80"
                    fill="currentColor"
                  />
                  <blockquote className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
                    „Heilmasseur ist meine Berufung. Ich höre auf den Körper —
                    und dann arbeite ich gezielt dort, wo er es wirklich
                    braucht."
                  </blockquote>
                  <footer className="mt-6 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="/images/domenic-1080.webp"
                        alt="Domenic Hacker"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-white">
                        Domenic Hacker
                      </span>
                      <span className="text-xs text-white/50">
                        Diplomierter Heilmasseur, Wien 1080
                      </span>
                    </div>
                  </footer>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#f2a93b]/10 border border-[#f2a93b]/20 p-4 text-center">
                    <span className="block text-2xl font-extrabold text-[#f2a93b]">
                      {yearsExperience}
                    </span>
                    <span className="text-xs text-[#555]">Jahre Erfahrung</span>
                  </div>
                  <div className="rounded-2xl bg-[#e8654a]/10 border border-[#e8654a]/20 p-4 text-center">
                    <span className="block text-2xl font-extrabold text-[#e8654a]">
                      1080
                    </span>
                    <span className="text-xs text-[#555]">Wien, Josefstadt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-[#e8654a] to-[#f2a93b]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold text-white leading-tight">
              Bereit für Ihre erste Behandlung?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
              Buchen Sie jetzt Ihren Termin online — unkompliziert und in
              wenigen Schritten.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/buchen"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#e8654a] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <Calendar size={18} />
                Termin online buchen
              </Link>
              <a
                href="tel:+4367018952556"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors duration-200"
              >
                +43 670 189 52 56
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
