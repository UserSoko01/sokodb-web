import type { Metadata } from "next";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ManagedServicesSection } from "@/components/sections/ManagedServicesSection";
import { SupportedEnginesSection } from "@/components/sections/SupportedEnginesSection";
import { DevelopmentAutomationSection } from "@/components/sections/DevelopmentAutomationSection"; 
import { EnterpriseEquipmentSection } from "@/components/sections/EnterpriseEquipmentSection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios especializados de SokoDB en consultoría de base de datos, servicios administrados, integración, automatización, analítica e infraestructura empresarial.",
};

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <SupportedEnginesSection />
      <ManagedServicesSection />
      <DevelopmentAutomationSection />
      <EnterpriseEquipmentSection />
      <CapabilitiesSection />
      <WhyChooseUs />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}