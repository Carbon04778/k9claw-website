import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.siteName} — Dog Cleanup Without Bending Over`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTASection />
    </>
  );
}
