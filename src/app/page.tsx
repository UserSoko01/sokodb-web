import { AboutPreview } from "@/components/sections/AboutPreview";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <AboutPreview />
    </>
  );
}