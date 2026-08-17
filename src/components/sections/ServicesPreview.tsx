import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/content/services";

export function ServicesPreview() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#F9423A]">
            Nuestros servicios destacados
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Soluciones tecnológicas para operar mejor, decidir mejor y crecer
            mejor
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Diseñamos, implementamos y optimizamos soluciones tecnológicas para
            empresas que necesitan mejorar su operación, proteger su información
            y tomar mejores decisiones.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={
                index < 4
                  ? "lg:col-span-3"
                  : "lg:col-span-4"
              }
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/servicios"
            className="group inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 font-semibold text-white transition-colors hover:bg-[#F9423A]"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}