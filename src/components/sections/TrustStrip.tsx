import { BadgeCheck, Database, Handshake, Layers3 } from "lucide-react";
import { TechnologyLogoMarquee } from "@/components/shared/TechnologyLogoMarquee";

const trustItems = [
  {
    title: "Experiencia desde 2021",
    description: "Trayectoria en soluciones tecnológicas empresariales.",
    icon: BadgeCheck,
  },
  {
    title: "Especialistas en datos",
    description:
      "Consultoría, optimización y administración de plataformas de datos.",
    icon: Database,
  },
  {
    title: "Integración y automatización",
    description:
      "Soluciones para conectar sistemas y acelerar procesos críticos.",
    icon: Layers3,
  },
  {
    title: "Servicio ágil y cercano",
    description:
      "Atención especializada con enfoque práctico y flexible.",
    icon: Handshake,
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="min-w-0 rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F9423A]/10">
                      <Icon className="h-5 w-5 text-[#F9423A]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold leading-5 text-black">
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

          <TechnologyLogoMarquee />
        </div>
      </div>
    </section>
  );
}