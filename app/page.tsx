import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {
  getServices,
  getPricingItems,
  getFaqItems,
  getAbout,
  getSettings,
} from "@/sanity/lib/queries";

export default async function Home() {
  const [services, pricingItems, faqItems, about, settings] =
    await Promise.all([
      getServices(),
      getPricingItems(),
      getFaqItems(),
      getAbout(),
      getSettings(),
    ]);

  const teaserText =
    about?.bio && about.bio.length > 0
      ? about.bio[0]
      : "Ich verbinde fundiertes Fachwissen mit einem feinen Gespür für den Körper. Bewegung prägt mein Leben — sowohl in der Therapie als auch im Breakdance, der meine Körperwahrnehmung nachhaltig geschult hat.";

  return (
    <>
      <Navbar />
      <main>
        <Hero sanitySettings={settings} />
        <Services sanityServices={services} />
        <GoogleReviews />
        <Pricing sanityPricing={pricingItems} sanitySettings={settings} />

        {/* About Teaser */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-14">
              <div className="relative shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#0d4f4f]/10 shadow-xl">
                <Image
                  src="/images/domenic-wien.webp"
                  alt="Domenic Hacker – Diplomierter Heilmasseur Wien"
                  fill
                  className="object-cover object-[75%_20%]"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0d4f4f]/8 px-4 py-1.5 text-sm font-bold text-[#0d4f4f]">
                  Über Domenic Hacker
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#111] leading-tight">
                  Diplomierter Heilmasseur{" "}
                  <span className="text-[#0d4f4f]">mit Leidenschaft</span>
                </h2>
                <p className="mt-3 text-base text-[#555] leading-relaxed max-w-xl">
                  {teaserText}
                </p>
                <Link
                  href="/ueber-mich"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[#0d4f4f] px-6 py-2.5 text-sm font-bold text-[#0d4f4f] hover:bg-[#0d4f4f] hover:text-white transition-all duration-200"
                >
                  Mehr über mich
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQ sanityFaqs={faqItems} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
