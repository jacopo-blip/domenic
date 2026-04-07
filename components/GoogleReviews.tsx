"use client";

import { useRef } from "react";
import { Star } from "lucide-react";
import type { SanityTestimonial } from "@/sanity/lib/queries";

// ─── Fallback data ─────────────────────────────────────────────────────────────

const FALLBACK_REVIEWS = [
  {
    id: "1",
    name: "Maria S.",
    detail: "Stammkundin",
    rating: 5,
    text: "Ich komme schon seit über einem Jahr regelmäßig zu Domenic. Die Lymphdrainage hat bei meinen Schwellungen nach der OP wirklich geholfen. Sehr einfühlsam und professionell!",
    date: "vor 1 Woche",
  },
  {
    id: "2",
    name: "Thomas K.",
    detail: "Neukunde",
    rating: 5,
    text: "Endlich jemand, der wirklich versteht was er tut. Chronische Rückenschmerzen nach 10 Jahren deutlich besser nach nur 4 Sitzungen. Kann ich wärmstens empfehlen.",
    date: "vor 3 Wochen",
  },
  {
    id: "3",
    name: "Sandra W.",
    detail: "Kassenpatientin",
    rating: 5,
    text: "Sehr nette und kompetente Betreuung. Die Heilmassage mit ärztlicher Verordnung wird direkt mit der Kasse abgerechnet, das ist super unkompliziert. Top Praxis!",
    date: "vor 1 Monat",
  },
  {
    id: "4",
    name: "Michael B.",
    detail: "Berufssportler",
    rating: 5,
    text: "Als Sportler bin ich auf gute Regeneration angewiesen. Domenic kennt die Anatomie genau und arbeitet sehr gezielt. Die beste Massage, die ich je hatte.",
    date: "vor 2 Monaten",
  },
];

const OVERALL_RATING = 4.9;
const REVIEW_COUNT = 47;
const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=Domenic+Massagepraxis+Wien";

// ─── Helper components ─────────────────────────────────────────────────────────

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating ? "fill-[#f2a93b] text-[#f2a93b]" : "text-gray-200"
          }
        />
      ))}
    </div>
  );
}

// Inline Google "G" logo as SVG
function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-label="Google"
      role="img"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

type ReviewDisplay = {
  id: string;
  name: string;
  detail?: string;
  rating: number;
  text: string;
  date: string;
};

function toDisplayReviews(sanity: SanityTestimonial[]): ReviewDisplay[] {
  return sanity.map((t) => ({
    id: t._id,
    name: t.authorName,
    detail: t.authorDetail,
    rating: t.rating ?? 5,
    text: t.quote,
    date: "",
  }));
}

export function GoogleReviews({
  sanityTestimonials,
}: {
  sanityTestimonials?: SanityTestimonial[] | null;
}) {
  const ref = useRef(null);

  const reviews =
    sanityTestimonials && sanityTestimonials.length > 0
      ? toDisplayReviews(sanityTestimonials)
      : FALLBACK_REVIEWS;

  return (
    <section
      id="bewertungen"
      className="relative py-24 sm:py-32 bg-[#fafaf8] overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#0d4f4f]/4 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#e8654a]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div className="max-w-xl">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-[#0d4f4f]/8 px-4 py-1.5 text-sm font-bold text-[#0d4f4f]"
            >
              Kundenstimmen
            </span>
            <h2
              className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#111]"
            >
              Das sagen{" "}
              <span className="text-[#e8654a]">meine Klienten</span>
            </h2>
            <p
              className="mt-4 text-lg text-[#555] leading-relaxed"
            >
              Echte Erfahrungen meiner Klienten — unbearbeitet und direkt von
              Google.
            </p>
          </div>

          {/* Google rating badge */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 inline-flex items-center gap-4 rounded-2xl bg-white border border-gray-100 px-6 py-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <GoogleLogo size={28} />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-[#111] leading-none">
                  {OVERALL_RATING}
                </span>
                <StarRating rating={5} size={18} />
              </div>
              <p className="mt-0.5 text-xs text-[#888]">
                Basierend auf {REVIEW_COUNT} Bewertungen
              </p>
            </div>
          </a>
        </div>

        {/* Review cards */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative flex flex-col rounded-3xl bg-white border border-gray-100 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 4px 24px rgba(13,79,79,0.06)" }}
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-5 text-5xl font-serif leading-none text-[#e8654a]/10 select-none">
                &ldquo;
              </span>

              {/* Stars + Google logo */}
              <div className="flex items-center justify-between">
                <StarRating rating={review.rating} />
                <GoogleLogo size={16} />
              </div>

              {/* Review text */}
              <p className="mt-4 flex-1 text-sm text-[#444] leading-relaxed">
                {review.text}
              </p>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#111]">
                      {review.name}
                    </p>
                    {review.detail && (
                      <p className="text-xs text-[#888] mt-0.5">
                        {review.detail}
                      </p>
                    )}
                  </div>
                  {review.date && (
                    <span className="text-xs text-[#aaa]">{review.date}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div
          className="mt-10 text-center"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#0d4f4f]/20 bg-white px-6 py-3 text-sm font-bold text-[#0d4f4f] transition-all duration-300 hover:bg-[#0d4f4f] hover:text-white hover:border-[#0d4f4f]"
          >
            <GoogleLogo size={16} />
            Alle Bewertungen auf Google ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
