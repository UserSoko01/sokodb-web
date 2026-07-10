import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TechnologyExperience } from "@/components/sections/TechnologyExperience";
import { ValuesGrid } from "@/components/sections/ValuesGrid";


export const metadata: Metadata = {
  title: "Nosotros",
  description: 
    "Conoce a Soko DB, consultora tecnológica especializada en bases de datos, desarrollo de software a la medida y soluciones empresariales."
};

export default function NosotrosPage() {
  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <DifferentiatorsSection />  
      <TechnologyExperience />
      <ValuesGrid />
      <FinalCTA />
    </>
  );
}