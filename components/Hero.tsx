"use client";

import { ArrowDown, Star } from "lucide-react";
import Image from "next/image";
import type { SanitySettings } from "@/sanity/lib/queries";
import type { ReviewSummary } from "@/components/GoogleReviewsBadge";

const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=Heilmasseur+Domenic+Hacker+Wien";

export function Hero({
  sanitySettings,
  reviewSummary,
}: {
  sanitySettings?: SanitySettings | null;
  reviewSummary?: ReviewSummary;
}) {
  const headline = sanitySettings?.heroHeadline ?? "Weniger Schmerzen.";
  const headlineAccent = sanitySettings?.heroHeadlineAccent ?? "Tiefe Entspannung.";
  const subheading =
    sanitySettings?.heroSubheading ??
    "Gezielte Heilmassage bei Verspannungen, Stress und Rückenbeschwerden. Ihr Raum für Entspannung und Heilung in Wien 1080.";


  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ clipPath: "inset(0 0 -1px 0)" }}
    >
      {/* Parallax background — position:fixed inside clip-path for mobile compatibility */}
      <div className="fixed inset-x-0 top-0 h-[100lvh]" style={{ zIndex: 0 }}>
        <Image
          src="/images/domenic-1080.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Dark teal overlay for readability */}
      <div className="absolute inset-0 bg-[#0d4f4f]/80" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#e8654a]/15" />
        <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#f2a93b]/10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#e8654a]/8 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full py-32 sm:py-40" style={{ zIndex: 3 }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 text-sm font-semibold text-white/90">
                <span className="h-2 w-2 rounded-full bg-[#f2a93b] animate-pulse" />
                Diplomierter Heilmasseur in Wien
              </span>
            </div>

            <h1 className="mt-6 sm:mt-8 text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-white">
              {headline}
              <br />
              <span className="text-[#f2a93b]">{headlineAccent}</span>
            </h1>

            {reviewSummary && (
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 sm:mt-6 flex w-fit flex-wrap items-center gap-x-3 gap-y-1 transition-opacity duration-300 hover:opacity-80"
              >
                <div className="flex -space-x-2">
                  {reviewSummary.avatars.map((a, i) => (
                    <div
                      key={i}
                      className="relative h-9 w-9 rounded-full border-2 border-[#0d4f4f] bg-white/20 flex items-center justify-center text-xs font-bold text-white overflow-hidden"
                    >
                      {a.name.charAt(0).toUpperCase()}
                      {a.photoUri && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={a.photoUri}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#f2a93b] text-[#f2a93b]"
                      />
                    ))}
                  </div>
                  <span className="text-base font-bold text-white/90 leading-none">
                    {reviewSummary.rating.toFixed(1)}
                  </span>
                </div>
                <span className="text-sm text-white/75">
                  {reviewSummary.count} Google Bewertungen
                </span>
              </a>
            )}

            <p className="mt-5 max-w-lg text-lg sm:text-xl text-white/75 leading-relaxed">
              {subheading}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
              <a
                href="/buchen"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e8654a] to-[#f2a93b] px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-[#e8654a]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#e8654a]/40 hover:scale-105"
              >
                Jetzt Termin sichern
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3.5 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40"
              >
                Zum Angebot
                <ArrowDown size={18} />
              </a>
            </div>

          </div>

          <div className="hidden lg:flex relative items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-[420px] rounded-3xl bg-[#e8654a]/20 rotate-3" />
              <div className="absolute -top-2 -left-2 w-full h-[420px] rounded-3xl bg-[#f2a93b]/20 rotate-1" />
              <div className="relative w-full h-[420px] rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 overflow-hidden">
                <Image
                  src="/images/hero-portrait.png"
                  alt="Heilmasseur Domenic Hacker"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-lg font-bold text-white">
                    Domenic Hacker
                  </p>
                  <p className="text-sm text-white/70">
                    Diplomierter Heilmasseur
                  </p>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    <span className="rounded-full bg-[#e8654a]/30 text-white px-3 py-1 text-xs font-bold">
                      Heilmassage
                    </span>
                    <span className="rounded-full bg-[#f2a93b]/30 text-white px-3 py-1 text-xs font-bold">
                      Lymphdrainage
                    </span>
                    <span className="rounded-full bg-white/20 text-white px-3 py-1 text-xs font-bold">
                      Klassische Massage
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-1px] left-0 right-0" style={{ zIndex: 3 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 45V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
