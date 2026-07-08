import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";


export const metadata: Metadata = {
  title: "Nosotros",
  description: 
    "Conoce a Soko DB, consultora tecnológica especializada en bases de datos, desarrollo de software a la medida y soluciones empresariales."
};

export default function NosotrosPage() {
  return (
    <>
      <AboutHero />  
    </>
  );
}