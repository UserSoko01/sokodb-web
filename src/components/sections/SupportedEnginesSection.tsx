import { Database, Server, ShieldCheck } from "lucide-react";

const engines = [
  "Oracle",
  "PostgreSQL",
  "EDB",
  "Greenplum",
  "SQL Server",
  "Informix",
  "MySQL",
  "DB2",
];

export function SupportedEnginesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-[#F9423A]">
              Motores soportados
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
              Especialistas en plataformas de datos empresariales
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Trabajamos con motores de bases de datos empresariales para
              diseñar, implementar, migrar, optimizar y mantener ambientes
              seguros, escalables y de alto desempeño.
            </p>

            <div className="mt-8 rounded-3xl bg-black p-6 text-white">
              <ShieldCheck className="h-8 w-8 text-[#F9423A]" />
              <p className="mt-4 text-xl font-black">
                Consultoría especializada para ambientes críticos, continuidad
                operativa y evolución tecnológica.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {engines.map((engine) => (
                <article
                  key={engine}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                      <Database className="h-6 w-6 text-[#F9423A]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-black">
                        {engine}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600">
                        Motor soportado
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="flex items-start gap-4">
                <Server className="mt-1 h-6 w-6 shrink-0 text-[#F9423A]" />
                <div>
                  <h3 className="font-black text-black">
                    Ambientes empresariales
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Implementación de nuevos ambientes, migraciones,
                    actualizaciones, alta disponibilidad, respaldo, recuperación,
                    monitoreo proactivo, performance tuning y análisis de
                    capacidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}