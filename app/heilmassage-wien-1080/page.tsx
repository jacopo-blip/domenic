import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Check,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { getHeilmassagePage, getSettings } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

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

const defaultConditions = [
  "Rückenschmerzen",
  "Nacken & Schulter",
  "Verspannungen",
  "Nach dem Sport",
  "Viel Sitzen",
  "Stress",
];

const defaultEffects = [
  {
    title: "Löst Verspannungen",
    description:
      "Verhärtetes Gewebe wird gezielt gelockert und die Muskulatur entspannt – nicht nur oberflächlich, sondern in der Tiefe.",
  },
  {
    title: "Lindert Schmerzen",
    description:
      "Gezielte Behandlung der Schmerzpunkte – wirksam, ohne unnötigen Druck. Viele berichten schon nach der ersten Behandlung von spürbarer Erleichterung.",
  },
  {
    title: "Verbessert Beweglichkeit",
    description:
      "Mehr Spielraum in Gelenken und Muskeln nach der Behandlung. Besonders spürbar bei Schulter, Nacken und Rücken.",
  },
  {
    title: "Unterstützt Regeneration",
    description:
      "Bessere Durchblutung, schnellere Erholung – vor allem nach sportlicher Belastung oder nach langen Arbeitstagen am Schreibtisch.",
  },
];

const defaultApproach = [
  `Keine Standardmassage – gezielte Behandlung statt „drübermassieren"`,
  "Intensität wird laufend angepasst – nicht zu wenig, nicht zu viel",
  "Feedback jederzeit möglich und erwünscht",
  "Erfahrung und ein gutes Gespür für den richtigen Druck",
];

const defaultFaqs = [
  {
    question:
      "Was ist der Unterschied zwischen Heilmassage und einer normalen Massage?",
    answer:
      "Eine Heilmassage ist eine medizinisch anerkannte Behandlung, die gezielt auf Beschwerden wie Rückenschmerzen, Verspannungen oder eingeschränkte Beweglichkeit abzielt – durchgeführt von einem diplomierten Heilmasseur. Eine Wellnessmassage dient primär der Entspannung. Bei mir steht der therapeutische Nutzen im Vordergrund – Entspannung ist ein angenehmer Nebeneffekt.",
  },
  {
    question: "Wie viele Termine brauche ich bis zur Verbesserung?",
    answer:
      "Das hängt stark von Ihren Beschwerden ab. Akute Verspannungen lassen sich oft schon in 2–3 Terminen deutlich verbessern. Bei chronischen Beschwerden empfehle ich regelmäßigere Behandlungen. Das besprechen wir beim ersten Termin – ganz ohne Verpflichtung.",
  },
  {
    question: "Tut eine Heilmassage weh?",
    answer:
      "Das Ziel ist wirksame Behandlung – nicht Schmerz. Mein Schwerpunkt liegt auf der richtigen Intensität: wirksam, aber ohne unnötigen Druck. Sie können jederzeit sagen, wenn Ihnen etwas zu viel oder zu wenig ist – ich passe mich sofort an.",
  },
  {
    question: "Muss ich etwas zur Behandlung mitbringen?",
    answer:
      "Nein, alles Notwendige ist in der Praxis vorhanden. Kommen Sie einfach pünktlich – und wenn möglich mit einem kurzen Überblick über Ihre aktuellen Beschwerden, damit wir gleich gezielt loslegen können.",
  },
  {
    question:
      "Kann ich die Heilmassage bei der Krankenkasse einreichen?",
    answer:
      "Als diplomierter Heilmasseur bin ich gewerblich tätig. Die öffentliche Krankenkasse übernimmt die Kosten in der Regel nicht direkt. Manche privaten Zusatzversicherungen erstatten Heilmassagen teilweise – bitte erkundigen Sie sich direkt bei Ihrer Versicherung.",
  },
  {
    question: "Wie finde ich die Praxis in Wien 1080?",
    answer:
      "Die Praxis liegt in der Feldgasse 3/20 im 8. Bezirk (Josefstadt). Gut erreichbar mit der U2 (Station Rathaus) oder mit der Straßenbahn J, 5 oder 33. Parkplätze sind in der unmittelbaren Umgebung vorhanden.",
  },
];

const defaultTransportInfo = [
  { label: "U-Bahn", value: "U2 – Station Rathaus" },
  { label: "Straßenbahn", value: "Linien J · 5 · 33" },
  { label: "Parken", value: "Parkplätze in der Umgebung" },
];

export default async function HeilmassageWien() {
  const [page, settings] = await Promise.all([
    getHeilmassagePage(),
    getSettings(),
  ]);

  const conditions = page?.conditions ?? defaultConditions;
  const effectsList = page?.effects ?? defaultEffects;
  const approachPoints = page?.approachPoints ?? defaultApproach;
  const faqs = page?.faqs ?? defaultFaqs;
  const transportInfo = page?.transportInfo ?? defaultTransportInfo;

  const heroImageSrc = page?.heroImage
    ? urlFor(page.heroImage).width(800).height(600).url()
    : "/images/heilmassage-wien.webp";

  const approachImageSrc = page?.approachImage
    ? urlFor(page.approachImage).width(800).height(600).url()
    : "/images/praxis-interior.png";

  const address = settings?.address ?? "Feldgasse 3/20";
  const phone = settings?.phone ?? "";

  return (
    <>
      <FaqJsonLd
        faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
      />
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative bg-[#0d4f4f] overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-16 sm:pt-36 sm:pb-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
                  {page?.heroBadge ?? "Wien 1080 · Josefstadt"}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  {page?.heroHeading ?? "Heilmassage in 1080 Wien"}
                </h1>
                <p className="mt-5 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
                  {page?.heroSubtitle ??
                    "gezielt, wirksam und in der richtigen Intensität"}
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

              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-[#f2a93b]/15 rotate-1 pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                  <Image
                    src={heroImageSrc}
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
              {page?.forWhomHeading ?? "Für wen ist das?"}
            </h2>
            <p className="text-[#555] mb-10 leading-relaxed max-w-2xl">
              {page?.forWhomDescription ??
                "Ob Rückenschmerzen nach langem Sitzen, ein verspannter Nacken oder Muskeln, die nach dem Sport einfach nicht loslassen – wenn Sie sich hier wiedererkennen, sind Sie bei mir richtig."}
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
                  <span className="text-sm font-semibold text-[#111]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USP / WIE ICH ARBEITE ─────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-[#f0f7f7]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-2">
              {page?.approachHeading ?? "Mein Schwerpunkt"}
            </h2>
            <p className="text-[#555] mb-10 leading-relaxed max-w-2xl">
              {page?.approachDescription ?? (
                <>
                  Mein Schwerpunkt liegt auf der{" "}
                  <strong className="text-[#333]">passenden Intensität</strong>.
                  Durch Erfahrung und ein gutes Gespür finde ich meist genau den
                  richtigen Druck – wirksam, aber ohne unnötigen Schmerz.
                </>
              )}
            </p>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <ul className="space-y-4">
                  {approachPoints.map((item) => (
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
                <p className="mt-6 text-[#555] leading-relaxed text-sm">
                  {page?.approachBottomText ??
                    "Keine Massage ist wie die andere. Was Sie bekommen, ist eine Behandlung, die sich an Ihrem Körper und Ihrem Feedback orientiert – nicht an einem Schema."}
                </p>
              </div>

              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src={approachImageSrc}
                  alt="Praxis-Interieur der Heilmassage Wien 1080 – Domenic Hacker"
                  fill
                  className="object-cover"
                  quality={75}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── WAS IST HEILMASSAGE ──────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-4">
              {page?.whatIsHeading ?? "Was ist Heilmassage?"}
            </h2>
            <div className="space-y-4 text-[#555] leading-relaxed">
              {page?.whatIsParagraphs ? (
                page.whatIsParagraphs.map((text, i) => (
                  <p
                    key={i}
                    className={
                      i === page.whatIsParagraphs!.length - 1
                        ? "text-sm text-[#555]/80"
                        : undefined
                    }
                  >
                    {text}
                  </p>
                ))
              ) : (
                <>
                  <p>
                    Heilmassage ist eine{" "}
                    <strong className="text-[#111]">
                      medizinisch anerkannte Behandlung
                    </strong>
                    , die gezielt bei Beschwerden wie Rückenschmerzen,
                    Verspannungen oder eingeschränkter Beweglichkeit eingesetzt
                    wird. Im Unterschied zur Wellnessmassage steht hier der
                    therapeutische Nutzen im Vordergrund — durchgeführt von einem
                    diplomierten Heilmasseur.
                  </p>
                  <p>
                    Ich arbeite systematisch und passe die Intensität laufend an
                    Ihren Körper an. Jede Behandlung beginnt mit einem kurzen
                    Gespräch: Wo sind die Beschwerden? Was soll sich danach
                    anders anfühlen? Erst dann lege ich los — mit dem Druck, den
                    Ihr Körper gerade braucht.
                  </p>
                  <p className="text-sm text-[#555]/80">
                    Neben Heilmassage biete ich auch{" "}
                    <a
                      href="/#leistungen"
                      className="font-semibold text-[#0d4f4f] hover:underline"
                    >
                      klassische Massage und Lymphdrainage
                    </a>{" "}
                    an — sprechen Sie mich gerne an.
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── WIRKUNG ──────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-[#f0f7f7]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-3">
              {page?.effectsHeading ?? "Was Massage bewirkt"}
            </h2>
            <p className="text-[#555] mb-10 leading-relaxed">
              {page?.effectsDescription ??
                "Gezielt eingesetzt erzielt Massage messbare Ergebnisse – nicht nur im Moment, sondern nachhaltig."}
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {effectsList.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white border border-[#0d4f4f]/8 p-6 shadow-sm"
                >
                  <h3 className="font-bold text-[#0d4f4f] mb-2">{title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STANDORT ─────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="rounded-3xl bg-[#0d4f4f] p-8 sm:p-12">
              <div className="grid sm:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
                    Standort
                  </span>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white">
                    {page?.locationHeading ??
                      "Heilmassage Wien 1080 – Josefstadt"}
                  </h2>
                  <p className="mt-4 text-white/65 leading-relaxed">
                    {page?.locationDescription ??
                      "Die Praxis liegt im Herzen des 8. Bezirks – einer der ruhigeren, grünen Ecken Wiens, direkt an der U3 und mehreren Straßenbahnlinien."}
                  </p>
                  <address className="mt-6 not-italic">
                    <div className="flex items-start gap-2">
                      <MapPin
                        size={16}
                        className="text-[#f2a93b] mt-0.5 shrink-0"
                      />
                      <div>
                        <p className="font-bold text-white">{address}</p>
                        <p className="text-white/60">1080 Wien (Josefstadt)</p>
                      </div>
                    </div>
                  </address>
                </div>
                <div className="flex flex-col gap-3">
                  {transportInfo.map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-white/[0.07] border border-white/[0.12] px-5 py-4"
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                        {label}
                      </p>
                      <p className="font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-[#f0f7f7]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f4f] mb-3">
              Häufige Fragen zur Heilmassage in Wien
            </h2>
            <p className="text-[#555] mb-10 leading-relaxed">
              Antworten auf die Fragen, die mir am häufigsten gestellt werden.
            </p>
            <div className="space-y-3">
              {faqs.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group rounded-2xl bg-white border border-[#0d4f4f]/10 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-semibold text-[#111] text-sm sm:text-base list-none">
                    {question}
                    <ChevronDown
                      size={18}
                      className="text-[#0d4f4f] shrink-0 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="px-6 pb-5 text-sm text-[#555] leading-relaxed border-t border-[#0d4f4f]/5 pt-4">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-[#0d4f4f]">
          <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {page?.ctaHeading ?? "Bereit für eine Behandlung?"}
            </h2>
            <p className="text-white/65 mb-10 leading-relaxed">
              {page?.ctaText ??
                "Termin direkt online buchen – oder melden Sie sich, wenn Sie vorher Fragen haben."}
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
      <Footer sanitySettings={settings} />
    </>
  );
}
