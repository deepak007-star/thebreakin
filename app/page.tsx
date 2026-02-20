import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <WhatsIncluded />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
