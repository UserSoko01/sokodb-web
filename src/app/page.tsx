import { AboutPreview } from "@/components/sections/AboutPreview";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HuitzoHomeCtaDemo } from "@/components/sections/HuitzoHomeCtaDemo";
import { getHuitzoHomeCtaVariant } from "@/lib/demo-variants";

type HomePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = searchParams ? await searchParams : {};
  const huitzoCtaVariant = getHuitzoHomeCtaVariant(params.huitzoCta);

  return (
    <>
      <HomeHero />
      <TrustStrip />
      <AboutPreview />

      {huitzoCtaVariant ? (
        <HuitzoHomeCtaDemo variant={huitzoCtaVariant} />
      ) : null}

      <ServicesPreview />
      <BenefitsSection />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}