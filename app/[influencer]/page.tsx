import { notFound } from "next/navigation";
import { Metadata } from "next";
import { isValidInfluencer, getInfluencer } from "@/lib/influencers";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

interface PageProps {
  params: Promise<{ influencer: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { influencer } = await params;
  const config = getInfluencer(influencer);

  if (!config) {
    return {};
  }

  return {
    title: `Join Break-In through ${config.displayName}'s Network | thebreakin`,
    description: `Start your career transformation with ${config.displayName}. Expert job search assistance, mentorship, and career coaching for professionals seeking corporate roles.`,
    openGraph: {
      title: `Join Break-In through ${config.displayName}'s Network`,
      description: `Start your career transformation with ${config.displayName}. Expert job search assistance for professionals.`,
    },
  };
}

export default async function InfluencerPage({ params }: PageProps) {
  const { influencer } = await params;

  // Validate influencer slug against whitelist
  if (!isValidInfluencer(influencer)) {
    notFound();
  }

  const config = getInfluencer(influencer)!;

  return (
    <>
      <Hero
        variant="influencer"
        influencerName={config.displayName}
        referrer={influencer.toLowerCase()}
      />
      <HowItWorks />
      <Services />
      <WhatsIncluded />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
