import {
  Gauge,
  Headphones,
  Layers3,
  ShieldCheck,
  Target,
} from "lucide-react";

const benefits = [
  {
    title: "Experiencia especializada",
    description:
      "Contamos con experiencia técnica en bases de datos, desarrollo de software y soluciones empresariales para entornos críticos.",
    icon: ShieldCheck,
  },
  {
    title: "Soluciones a la medida",
    description:
      "Diseñamos soluciones alineadas a la operación, presupuesto y objetivos específicos de cada empresa.",
    icon: Target,
  },
  {
    title: "Agilidad operativa",
    description:
      "Trabajamos con procesos claros y comunicación constante para entregar soluciones eficientes sin burocracia innecesaria.",
    icon: Gauge,
  },
  {
    title: "Soporte constante",
    description:
      "Acompañamos a nuestros clientes antes, durante y después de cada implementación para asegurar continuidad y confianza.",
    icon: Headphones,
  },
  {
    title: "Tecnología escalable",
    description:
      "Construimos soluciones preparadas para crecer junto con tu empresa, manteniendo rendimiento, seguridad y estabilidad.",
    icon: Layers3,
  },
];

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_20%,rgba(249,66,58,0.07),transparent_24%),radial-gradient(circle_at_95%_80%,rgba(167,168,169,0.18),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-[#F9423A]">
              Beneficios principales
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
              Tecnología confiable, atención cercana y resultados medibles
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Nuestro enfoque combina experiencia técnica, soluciones a la
              medida y acompañamiento constante para que cada proyecto genere
              valor real en la operación de tu empresa.
            </p>

            <div className="mt-8 rounded-3xl bg-black p-6 text-white">
              <p className="text-sm text-white/60">Enfoque SokoDB</p>
              <p className="mt-2 text-2xl font-black">
                Soluciones robustas, seguras y preparadas para escalar.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex items-center gap-4 sm:w-64">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F9423A]/10 transition-colors group-hover:bg-[#F9423A]">
                        <Icon className="h-6 w-6 text-[#F9423A] transition-colors group-hover:text-white" />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-neutral-400">
                          0{index + 1}
                        </p>
                        <h3 className="text-xl font-black tracking-tight text-black">
                          {benefit.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-neutral-600">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}