import { CheckCircle2, Database, Layers3, Server } from "lucide-react";

const highlights = [
  "Consultoría de Base de Datos",
  "Servicios Administrados",
  "Desarrollo e integración",
  "Automatización de procesos",
  "Data Analytics & Management",
  "Infraestructura empresarial",
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(167,168,169,0.16),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(249,66,58,0.08),transparent_24%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Actualizamos tu mundo digital
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Soluciones especializadas para plataformas de datos, integración e
            infraestructura
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Tu organización necesita plataformas de datos confiables, procesos
            integrados e infraestructura tecnológica capaz de sostener
            operaciones críticas. En SokoDB ayudamos a modernizar ambientes
            empresariales mediante consultoría especializada, servicios
            administrados, integración tecnológica y soluciones escalables.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Desde 2021 hemos construido experiencia en bases de datos,
            integración, automatización, analítica e infraestructura
            empresarial, trabajando con tecnologías y ecosistemas líderes para
            maximizar el valor de la información.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F9423A]" />
                <span className="text-sm font-semibold text-neutral-800">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
                <div>
                  <p className="text-sm font-semibold text-neutral-500">
                    Capacidades SokoDB
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-black">
                    Soluciones empresariales
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                  <Database className="h-6 w-6 text-[#F9423A]" />
                </div>
              </div>

              <div className="mt-6 grid items-start gap-4">
                <article
                  tabIndex={0}
                  className="group h-fit cursor-default rounded-2xl border border-neutral-200 bg-neutral-50 p-5 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)] focus-visible:border-[#F9423A]/50 focus-visible:ring-2 focus-visible:ring-[#F9423A]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-white transition-colors duration-300 group-hover:bg-[#F9423A] group-focus-visible:bg-[#F9423A]">
                      <Database className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-bold text-black">
                        Plataformas de datos críticas
                      </h4>

                      <p className="mt-3 max-h-32 overflow-hidden text-sm leading-6 text-neutral-600 opacity-100 transition-all duration-300 sm:mt-0 sm:max-h-0 sm:opacity-0 sm:group-hover:mt-3 sm:group-hover:max-h-32 sm:group-hover:opacity-100 sm:group-focus-visible:mt-3 sm:group-focus-visible:max-h-32 sm:group-focus-visible:opacity-100">
                        Implementación, migraciones, alta disponibilidad, respaldo,
                        monitoreo, performance tuning y análisis de capacidad.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  tabIndex={0}
                  className="group h-fit cursor-default rounded-2xl border border-neutral-200 bg-neutral-50 p-5 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)] focus-visible:border-[#F9423A]/50 focus-visible:ring-2 focus-visible:ring-[#F9423A]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F9423A] text-white">
                      <Layers3 className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-bold text-black">
                        Integración y automatización
                      </h4>

                      <p className="mt-3 max-h-32 overflow-hidden text-sm leading-6 text-neutral-600 opacity-100 transition-all duration-300 sm:mt-0 sm:max-h-0 sm:opacity-0 sm:group-hover:mt-3 sm:group-hover:max-h-32 sm:group-hover:opacity-100 sm:group-focus-visible:mt-3 sm:group-focus-visible:max-h-32 sm:group-focus-visible:opacity-100">
                        APIs, microservicios, automatización de procesos CORE, integración de
                        sistemas y soluciones con IA empresarial.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  tabIndex={0}
                  className="group h-fit cursor-default rounded-2xl border border-neutral-200 bg-neutral-50 p-5 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)] focus-visible:border-[#F9423A]/50 focus-visible:ring-2 focus-visible:ring-[#F9423A]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white transition-colors duration-300 group-hover:bg-[#F9423A] group-focus-visible:bg-[#F9423A]">
                      <Server className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-bold text-black">
                        Infraestructura empresarial
                      </h4>

                      <p className="mt-3 max-h-32 overflow-hidden text-sm leading-6 text-neutral-600 opacity-100 transition-all duration-300 sm:mt-0 sm:max-h-0 sm:opacity-0 sm:group-hover:mt-3 sm:group-hover:max-h-32 sm:group-hover:opacity-100 sm:group-focus-visible:mt-3 sm:group-focus-visible:max-h-32 sm:group-focus-visible:opacity-100">
                        Servidores, almacenamiento, redes, conectividad y equipo de cómputo
                        para fortalecer la operación tecnológica.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="mt-6 rounded-2xl bg-black p-5 text-white">
                <p className="text-sm text-white/65">Enfoque principal</p>
                <p className="mt-2 text-xl font-black">
                  Datos, integración, automatización e infraestructura para
                  empresas que necesitan operar mejor.
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