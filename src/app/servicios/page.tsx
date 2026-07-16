import type { Metadata } from "next";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ManagedServicesSection } from "@/components/sections/ManagedServicesSection";
import { SupportedEnginesSection } from "@/components/sections/SupportedEnginesSection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios especializados de SokoDB en bases de datos, analítica, soluciones empresariales y desarrollo de software a la medida.",
};

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <SupportedEnginesSection />
      <ManagedServicesSection />
      <CapabilitiesSection />
      <WhyChooseUs />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}