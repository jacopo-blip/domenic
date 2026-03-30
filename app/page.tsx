import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
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
  const [services, pricingItems, faqItems, about, settings] = await Promise.all(
    [getServices(), getPricingItems(), getFaqItems(), getAbout(), getSettings()]
  );

  return (
    <>
      <Navbar />
      <main>
        <Hero sanitySettings={settings} />
        <Services sanityServices={services} />
        <About sanityAbout={about} />
        <Pricing sanityPricing={pricingItems} sanitySettings={settings} />
        <FAQ sanityFaqs={faqItems} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
