import {
  BadgeCheck,
  Handshake,
  Headphones,
  Lightbulb,
  Medal,
  Target,
} from "lucide-react";

const reasons = [
  {
    title: "Especialización técnica",
    description:
      "Experiencia enfocada en plataformas de datos, integración, automatización, infraestructura y tecnologías empresariales.",
    icon: BadgeCheck,
  },
  {
    title: "Soluciones a la medida",
    description:
      "Cada proyecto se adapta al contexto, objetivos, presupuesto, operación y prioridades reales de la organización.",
    icon: Target,
  },
  {
    title: "Alianzas y ecosistemas líderes",
    description:
      "Trabajo con tecnologías y ecosistemas empresariales como IBM, Oracle, EDB, PostgreSQL, MuleSoft y plataformas cloud.",
    icon: Medal,
  },
  {
    title: "Atención cercana y ágil",
    description:
      "Comunicación directa, seguimiento constante y procesos claros para avanzar sin burocracia innecesaria.",
    icon: Handshake,
  },
  {
    title: "Soporte flexible",
    description:
      "Modalidades por bolsa de horas, proyecto fijo, atención remota, híbrida o en sitio, con esquemas 5×8 o 7×24.",
    icon: Headphones,
  },
  {
    title: "Valor competitivo",
    description:
      "Soluciones especializadas, medibles y sostenibles, con enfoque en eficiencia, continuidad y retorno operativo.",
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
            Especialización, agilidad y soluciones enfocadas en resultados
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Combinamos conocimiento técnico, atención cercana y experiencia en
            tecnologías empresariales para ayudar a tu organización a operar con
            mayor seguridad, continuidad y eficiencia.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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