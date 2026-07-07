import {
  BadgeCheck,
  Building2,
  Database,
  Handshake,
} from "lucide-react";

const trustItems = [
  {
    title: "Expertos desde 2017",
    description: "Experiencia en transformación tecnológica empresarial.",
    icon: BadgeCheck,
  },
  {
    title: "Especialistas en bases de datos",
    description: "Consultoría, optimización y administración especializada.",
    icon: Database,
  },
  {
    title: "Soluciones para empresas",
    description: "Tecnología robusta, segura y preparada para escalar.",
    icon: Building2,
  },
  {
    title: "Servicio ágil y cercano",
    description: "Atención especializada sin burocracia innecesaria.",
    icon: Handshake,
  },
];

const technologies = ["Oracle", "PostgreSQL", "EDB", "Power BI"];

export function TrustStrip() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F9423A]/10">
                      <Icon className="h-5 w-5 text-[#F9423A]" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-black">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.03)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Tecnologías
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700"
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