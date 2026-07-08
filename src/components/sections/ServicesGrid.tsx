import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#F9423A]">
            Servicios principales
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Tecnología alineada a las necesidades de tu empresa
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Acompañamos a tu empresa en diferentes áreas tecnológicas, desde la
            gestión avanzada de bases de datos hasta el desarrollo de soluciones
            empresariales a la medida.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}