import {
  BadgeCheck,
  Gauge,
  Headphones,
  MessageCircle,
  Target,
} from "lucide-react";

const differentiators = [
  {
    title: "Especialización en bases de datos",
    description:
      "Experiencia en administración, optimización, soporte y modernización de entornos de bases de datos empresariales.",
    icon: BadgeCheck,
  },
  {
    title: "Soluciones a la medida",
    description:
      "Diseñamos cada solución de acuerdo con los procesos, objetivos, presupuesto y retos específicos de cada empresa.",
    icon: Target,
  },
  {
    title: "Agilidad sin burocracia",
    description:
      "Trabajamos con comunicación directa, procesos claros y tiempos de respuesta eficientes.",
    icon: Gauge,
  },
  {
    title: "Soporte constante",
    description:
      "Acompañamos a nuestros clientes antes, durante y después de cada implementación para asegurar continuidad y confianza.",
    icon: Headphones,
  },
  {
    title: "Enfoque en resultados",
    description:
      "Priorizamos soluciones que generen valor tangible: mejor rendimiento, mayor control, más disponibilidad y procesos más eficientes.",
    icon: MessageCircle,
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#F9423A]">
            Qué nos diferencia
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Experiencia técnica con atención cercana
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Nos distingue una forma de trabajo ágil, cercana y orientada a
            resultados. Ofrecemos experiencia especializada sin la burocracia de
            las grandes corporaciones.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                  <Icon className="h-6 w-6 text-[#F9423A]" />
                </div>

                <h3 className="mt-6 text-lg font-black tracking-tight text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}