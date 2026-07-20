import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/shared/FloatingWhatsAppButton";

const inter = Inter({
  subsets:["latin"],
  variable:"--font-sans"
});

export const metadata: Metadata = {
  title: {
    default: "Soko DB | Consultoría especializada en tecnologías de la información",
    template: "%s | Soko DB"
  },
  description: 
  "Soluciones y consultoría especializada en plataformas de datos, servicios administrados, integración, automatización, analítica e infraestructura empresarial."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
