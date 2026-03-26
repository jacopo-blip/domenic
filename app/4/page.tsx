import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function VariantFour() {
  return (
    <div className="bg-[#faf6f1] text-[#2d2418]" style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
