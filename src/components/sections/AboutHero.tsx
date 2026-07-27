import Link from "next/link";
import { ArrowRight, Database, ShieldCheck, Users } from "lucide-react";

const metrics = [
  {
    value: "2021",
    label: "trayectoria en tecnología empresarial",
  },
  {
    value: "IBM   Oracle  EDB",
    label: "alianzas y ecosistemas tecnológicos",
  },
  {
    value: "BD",
    label: "especialistas en plataformas de datos",
  },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(249,66,58,0.08),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(167,168,169,0.18),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Consultoría especializada en tecnologías de la información
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-black md:text-6xl">
            Somos el aliado tecnológico que impulsa tu negocio
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            En SokoDB ayudamos a organizaciones de diversos sectores a fortalecer,
            modernizar y optimizar sus plataformas de datos mediante consultoría
            especializada, integración tecnológica y soluciones empresariales seguras,
            escalables y de alto desempeño.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
            Desde 2021 combinamos experiencia técnica, atención cercana y alianzas
            estratégicas con líderes tecnológicos como IBM, Oracle y EDB para entregar
            soluciones alineadas a las necesidades reales de cada organización.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/servicios"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F9423A] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#D92E27]"
            >
              Conocer servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-7 py-4 font-semibold text-black transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              Contactar ahora
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
                <div>
                  <p className="text-sm font-semibold text-neutral-500">
                    SokoDB
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-black">
                    Consultoría tecnológica especializada
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                  <Database className="h-6 w-6 text-[#F9423A]" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                  >
                    <p className="text-3xl font-black text-black">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#F9423A]" />
                    <div>
                      <h3 className="font-black text-black">
                        Plataformas de datos confiables
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        Diseño, implementación, optimización y soporte para entornos de datos seguros, escalables y de alto desempeño.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex items-start gap-4">
                    <Users className="mt-1 h-6 w-6 shrink-0 text-[#F9423A]" />
                    <div>
                      <h3 className="font-black text-black">
                        Especialistas certificados
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        Experiencia en tecnologías como PostgreSQL, Oracle, SQL Server, MySQL, Informix, EDB y otros motores empresariales.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-black p-5 text-white">
                  <p className="text-sm text-white/60">Propósito</p>
                  <p className="mt-2 text-xl font-black">
                    Modernizar plataformas, integrar sistemas y maximizar el valor de la información empresarial.
                  </p>
                </div>
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