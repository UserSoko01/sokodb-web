import { BarChart3, Code2, Database, Layers3, Server } from "lucide-react";

const technologies = [
  "Oracle",
  "PostgreSQL",
  "EDB",
  "Greenplum",
  "Power BI",
  "Desarrollo de software",
  "Soluciones empresariales",
  "Integración de sistemas",
  "Optimización de bases de datos",
  "Analítica de datos",
];

const areas = [
  {
    title: "Bases de datos",
    description:
      "Administración, optimización, disponibilidad, seguridad y continuidad para entornos críticos.",
    icon: Database,
  },
  {
    title: "Desarrollo de software",
    description:
      "Aplicaciones a la medida alineadas a procesos reales de operación.",
    icon: Code2,
  },
  {
    title: "Analítica empresarial",
    description:
      "Información clara y accionable para mejorar la toma de decisiones.",
    icon: BarChart3,
  },
  {
    title: "Infraestructura tecnológica",
    description:
      "Soluciones preparadas para escalar, integrarse y sostener operaciones empresariales.",
    icon: Server,
  },
];

export function TechnologyExperience() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(167,168,169,0.16),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(249,66,58,0.08),transparent_24%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Experiencia y tecnologías
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Conocimiento técnico para entornos empresariales
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            A lo largo de nuestra trayectoria hemos trabajado con tecnologías y
            ecosistemas orientados a bases de datos, analítica, desarrollo e
            infraestructura empresarial.
          </p>

          <div className="mt-8 rounded-3xl bg-black p-6 text-white">
            <Layers3 className="h-8 w-8 text-[#F9423A]" />
            <p className="mt-4 text-xl font-black">
              No solo implementamos tecnología: entendemos el contexto del
              negocio y construimos soluciones sostenibles.
            </p>
          </div>
        </div>

        <div>
          <div className="grid gap-5 md:grid-cols-2">
            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                    <Icon className="h-6 w-6 text-[#F9423A]" />
                  </div>

                  <h3 className="mt-6 text-xl font-black tracking-tight text-black">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-sm font-semibold text-neutral-500">
              Tecnologías / áreas de experiencia
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}