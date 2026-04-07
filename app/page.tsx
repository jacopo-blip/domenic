import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
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
  getTestimonials,
} from "@/sanity/lib/queries";

export default async function Home() {
  const [services, pricingItems, faqItems, about, settings, testimonials] =
    await Promise.all([
      getServices(),
      getPricingItems(),
      getFaqItems(),
      getAbout(),
      getSettings(),
      getTestimonials(),
    ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero sanitySettings={settings} />
        <Services sanityServices={services} />
        <About sanityAbout={about} />
        <GoogleReviews sanityTestimonials={testimonials} />
        <Pricing sanityPricing={pricingItems} sanitySettings={settings} />
        <FAQ sanityFaqs={faqItems} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
