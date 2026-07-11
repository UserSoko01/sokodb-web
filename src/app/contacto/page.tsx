import type { Metadata } from "next";
import { ContactFAQ } from "@/components/sections/ContactFAQ";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContactInfoCards } from "@/components/sections/ContactInfoCards";
import { TrustClosing } from "@/components/sections/TrustClosing";




export const metadata: Metadata = {
  title: "Contacto",
  description: 
  "Contacta a Soko DB para solicitar asesoría en base de datos, desarrollo de software, analítica de datos y soluciones empresariales."
};

export default function ContactoPage(){
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactInfoCards />
      <ContactFAQ />
      <TrustClosing />
    </>
  );
}