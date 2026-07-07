import { AboutPreview } from "@/components/sections/AboutPreview";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { BenefitsSection } from "@/components/sections/BenefisSections";
import { ProcessSection } from "@/components/sections/ProcessSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <BenefitsSection />
      <ProcessSection />
    </>
  );
}