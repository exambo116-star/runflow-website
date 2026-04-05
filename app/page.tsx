import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { CallToAction } from "@/components/landing/call-to-action";
import { FeaturesSection } from "@/components/landing/features-section";
import { HeroSection } from "@/components/landing/hero-section";
import { PricingSection } from "@/components/landing/pricing-section";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="hero-top-backdrop absolute inset-x-0 top-0 -z-10 h-[960px] sm:h-[900px] lg:h-[860px]" />
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CallToAction />
      <SiteFooter />
    </main>
  );
}
