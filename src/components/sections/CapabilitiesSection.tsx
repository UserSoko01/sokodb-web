import {
  BarChart3,
  GitBranch,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    title: "Continuidad operativa",
    description:
      "Diseñamos soluciones orientadas a mantener la disponibilidad, estabilidad y operación continua de plataformas críticas.",
    icon: ShieldCheck,
  },
  {
    title: "Modernización tecnológica",
    description:
      "Acompañamos procesos de actualización, migración y evolución de ambientes legados hacia arquitecturas más seguras y escalables.",
    icon: RefreshCw,
  },
  {
    title: "Integración de sistemas",
    description:
      "Conectamos aplicaciones, bases de datos, servicios y plataformas para mejorar el flujo de información entre áreas.",
    icon: GitBranch,
  },
  {
    title: "Automatización de procesos",
    description:
      "Identificamos tareas repetitivas o críticas y diseñamos soluciones que reducen carga operativa y aceleran la ejecución.",
    icon: Workflow,
  },
  {
    title: "Gestión y análisis de datos",
    description:
      "Transformamos información dispersa en indicadores, reportes y modelos útiles para mejorar la toma de decisiones.",
    icon: BarChart3,
  },
  {
    title: "Seguridad y control",
    description:
      "Aplicamos buenas prácticas para proteger datos, controlar accesos, reducir riesgos y fortalecer ambientes empresariales.",
    icon: LockKeyhole,
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold text-[#F9423A]">
              Capacidades transversales
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
              Tecnología para fortalecer operación, datos e infraestructura
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Más allá de cada servicio individual, SokoDB acompaña a las
              organizaciones en retos tecnológicos integrales: continuidad,
              modernización, seguridad, automatización, integración y mejor
              aprovechamiento de la información.
            </p>

            <div className="mt-8 rounded-3xl bg-black p-6 text-white">
              <ShieldCheck className="h-8 w-8 text-[#F9423A]" />
              <p className="mt-4 text-xl font-black">
                Un enfoque integral para plataformas críticas, procesos de
                negocio e infraestructura empresarial.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                    <Icon className="h-6 w-6 text-[#F9423A]" />
                  </div>

                  <h3 className="mt-6 text-xl font-black tracking-tight text-black">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}