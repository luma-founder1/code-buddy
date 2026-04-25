import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import BeforeAfter from "@/components/site/BeforeAfter";
import Features from "@/components/site/Features";
import HowItWorks from "@/components/site/HowItWorks";
import Pricing from "@/components/site/Pricing";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BeforeAfter />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};


export default Index;
