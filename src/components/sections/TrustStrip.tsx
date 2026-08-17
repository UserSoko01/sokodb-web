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
    description: "Atención especializada con enfoque práctico y flexible.",
    icon: Handshake,
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-5">
          <div className="grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  tabIndex={0}
                  className="h-fit group min-w-0 cursor-default rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.03)] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] focus-visible:border-[#F9423A]/50 focus-visible:ring-2 focus-visible:ring-[#F9423A]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F9423A]/10 transition-colors duration-300 group-hover:bg-[#F9423A] group-focus-visible:bg-[#F9423A]">
                      <Icon className="h-5 w-5 text-[#F9423A] transition-colors duration-300 group-hover:text-white group-focus-visible:text-white" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold leading-5 text-black">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-h-24 overflow-hidden text-sm leading-6 text-neutral-600 opacity-100 transition-all duration-300 sm:mt-0 sm:max-h-0 sm:opacity-0 sm:group-hover:mt-3 sm:group-hover:max-h-24 sm:group-hover:opacity-100 sm:group-focus-visible:mt-3 sm:group-focus-visible:max-h-24 sm:group-focus-visible:opacity-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <TechnologyLogoMarquee />
        </div>
      </div>
    </section>
  );
}