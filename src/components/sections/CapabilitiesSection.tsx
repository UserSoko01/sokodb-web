import {
  BarChart3,
  CloudUpload,
  Gauge,
  Headphones,
  Puzzle,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    title: "Arquitectura y rendimiento",
    description:
      "Diseñamos arquitecturas tecnológicas confiables, seguras y preparadas para soportar operaciones críticas.",
    icon: Gauge,
  },
  {
    title: "Migración y modernización",
    description:
      "Acompañamos procesos de actualización, migración y modernización de plataformas para mejorar estabilidad y eficiencia.",
    icon: CloudUpload,
  },
  {
    title: "Soporte y administración",
    description:
      "Brindamos acompañamiento técnico para mantener la continuidad, seguridad y disponibilidad de tus sistemas.",
    icon: Headphones,
  },
  {
    title: "Automatización de procesos",
    description:
      "Identificamos tareas repetitivas y diseñamos soluciones que reducen carga operativa y mejoran productividad.",
    icon: Workflow,
  },
  {
    title: "Analítica para decisiones",
    description:
      "Convertimos información dispersa en indicadores claros para tomar decisiones con mayor certeza.",
    icon: BarChart3,
  },
  {
    title: "Integración de sistemas",
    description:
      "Conectamos plataformas, bases de datos y aplicaciones para mejorar el flujo de información entre áreas.",
    icon: Puzzle,
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold text-[#F9423A]">
              Cómo podemos ayudarte
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
              Capacidades para resolver retos tecnológicos reales
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Nuestro trabajo no se limita a implementar herramientas.
              Analizamos el contexto de tu empresa, detectamos oportunidades de
              mejora y construimos soluciones sostenibles.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                    <Icon className="h-6 w-6 text-[#F9423A]" />
                  </div>

                  <h3 className="mt-6 text-xl font-black tracking-tight text-black">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}