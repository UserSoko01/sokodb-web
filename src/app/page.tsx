import { AboutPreview } from "@/components/sections/AboutPreview";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
    </>
  );
}