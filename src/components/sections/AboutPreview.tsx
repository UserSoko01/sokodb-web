import { CheckCircle2, Database, Layers3 } from "lucide-react";

const highlights = [
  "Consultoría experta",
  "Soluciones a la medida",
  "Especialistas en bases de datos",
  "Servicio ágil y cercano",
  "Soporte confiable",
  "Tecnología accesible y escalable",
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
            Tecnología clara, confiable y preparada para crecer con tu empresa
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Tu negocio necesita información confiable, procesos eficientes y
            tecnología capaz de adaptarse a sus objetivos. En SokoDB ayudamos a
            las empresas a modernizar su operación mediante consultoría
            especializada, gestión avanzada de bases de datos y desarrollo de
            software a la medida.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Desde 2017 hemos evolucionado en el mundo de la tecnología
            empresarial, construyendo experiencia en bases de datos, analítica,
            soluciones corporativas y desarrollo de aplicaciones.
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

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-white">
                      <Database className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-black">
                        Bases de datos críticas
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        Administración, optimización, seguridad y continuidad
                        para entornos empresariales.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F9423A] text-white">
                      <Layers3 className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-black">
                        Software a la medida
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        Aplicaciones diseñadas para mejorar procesos, integrar
                        áreas y escalar con la operación.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-black">
                        Acompañamiento experto
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        Atención cercana, comunicación clara y soporte durante
                        todo el ciclo del proyecto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-black p-5 text-white">
                <p className="text-sm text-white/65">Enfoque principal</p>
                <p className="mt-2 text-xl font-black">
                  Soluciones robustas, seguras y escalables.
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