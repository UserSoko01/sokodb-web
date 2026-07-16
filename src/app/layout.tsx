import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets:['latin'],
  variable:'--font-sans'
});

export const metadata: Metadata = {
  title: {
    default: "Soko DB | Consultoría en bases de datos y desarrollo de software",
    template: "%s | Soko DB"
  },
  description: 
  "Consultoría tecnológica especializada en bases de datos, desarrollo de software a la medida, analítica de datos y soluciones empresariales."
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
      </body>
    </html>
  );
}
