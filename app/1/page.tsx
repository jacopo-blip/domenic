import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function DesignVariant1() {
  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f0]">
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
