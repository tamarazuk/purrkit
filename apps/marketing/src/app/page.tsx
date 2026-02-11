import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import OpenSource from "@/components/sections/OpenSource";
import Waitlist from "@/components/sections/Waitlist";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <OpenSource />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
