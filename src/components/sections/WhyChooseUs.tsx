import {
  BadgeCheck,
  Headphones,
  Lightbulb,
  MessageCircle,
  Target,
} from "lucide-react";

const reasons = [
  {
    title: "Especialización real",
    description:
      "Experiencia en tecnologías empresariales, bases de datos, analítica y desarrollo de software para entornos críticos.",
    icon: BadgeCheck,
  },
  {
    title: "Soluciones a la medida",
    description:
      "Cada proyecto se diseña según las necesidades, presupuesto y objetivos específicos de la empresa.",
    icon: Target,
  },
  {
    title: "Agilidad y comunicación",
    description:
      "Trabajamos con procesos claros, comunicación constante y tiempos de respuesta eficientes.",
    icon: MessageCircle,
  },
  {
    title: "Soporte continuo",
    description:
      "Acompañamos a nuestros clientes antes, durante y después de cada implementación.",
    icon: Headphones,
  },
  {
    title: "Valor accesible",
    description:
      "Ofrecemos soluciones tecnológicas de alto valor sin estructuras innecesariamente complejas o costosas.",
    icon: Lightbulb,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(249,66,58,0.07),transparent_24%),radial-gradient(circle_at_90%_80%,rgba(167,168,169,0.18),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#F9423A]">
            Por qué elegir a SokoDB
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Experiencia técnica con atención cercana
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Combinamos conocimiento técnico, comunicación directa y soluciones
            realistas para ayudar a tu empresa a operar con mayor confianza.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                  <Icon className="h-6 w-6 text-[#F9423A]" />
                </div>

                <h3 className="mt-6 text-lg font-black tracking-tight text-black">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}