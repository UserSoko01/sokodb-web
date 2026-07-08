import Link from "next/link";
import { ArrowRight, BarChart3, Database, ServerCog } from "lucide-react";

const heroCards = [
  {
    title: "Bases de datos",
    description: "Optimización, administración y soporte especializado.",
    icon: Database,
  },
  {
    title: "Analítica",
    description: "Información clara para tomar mejores decisiones.",
    icon: BarChart3,
  },
  {
    title: "Soluciones empresariales",
    description: "Tecnología alineada a procesos reales de negocio.",
    icon: ServerCog,
  },
];

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(249,66,58,0.08),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(167,168,169,0.18),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Soluciones tecnológicas para empresas
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-black md:text-6xl">
            Servicios especializados para impulsar tu operación
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Diseñamos, implementamos y optimizamos soluciones en bases de datos,
            analítica, automatización y desarrollo de software a la medida para
            empresas que buscan eficiencia, seguridad y crecimiento.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F9423A] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#D92E27]"
            >
              Agenda una asesoría
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-7 py-4 font-semibold text-black transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              Solicitar propuesta
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
                <div>
                  <p className="text-sm font-semibold text-neutral-500">
                    Portafolio SokoDB
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-black">
                    Capacidades tecnológicas
                  </h2>
                </div>

                <span className="rounded-full bg-[#F9423A]/10 px-4 py-2 text-sm font-semibold text-[#F9423A]">
                  B2B Tech
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {heroCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.title}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                          <Icon className="h-6 w-6 text-[#F9423A]" />
                        </div>

                        <div>
                          <h3 className="font-black text-black">
                            {card.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-neutral-600">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-black p-5 text-white">
                <p className="text-sm text-white/60">
                  Enfoque de implementación
                </p>
                <p className="mt-2 text-xl font-black">
                  Diagnóstico, diseño, implementación y soporte continuo.
                </p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#F9423A]/25" />
          <div className="pointer-events-none absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-[#A7A8A9]/15" />
        </div>
      </div>
    </section>
  );
}