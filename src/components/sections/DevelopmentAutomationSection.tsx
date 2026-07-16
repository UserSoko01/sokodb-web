import {
  Bot,
  BrainCircuit,
  Code2,
  GitBranch,
  Layers3,
  Network,
  Workflow,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    title: "Desarrollo y modernización",
    description:
      "Aplicaciones web, escritorio, APIs, microservicios y modernización de sistemas legados con tecnologías empresariales.",
    items: [".NET", "VB.Net", "ASP", "JavaScript", "PHP", "APIs", "Microservicios"],
    icon: Code2,
  },
  {
    title: "Automatización de procesos CORE",
    description:
      "Automatización de alto volumen, integración de sistemas y orquestación de procesos críticos para mejorar velocidad operativa.",
    items: [
      "Procesos críticos",
      "Alto volumen",
      "Integración de sistemas",
      "Orquestación",
    ],
    icon: Workflow,
  },
  {
    title: "Automatización e IA empresarial",
    description:
      "Integramos inteligencia artificial en sistemas corporativos para reducir carga operativa y mejorar la toma de decisiones.",
    items: [
      "Chatbots",
      "Asistentes corporativos",
      "Clasificación de datos",
      "Búsqueda semántica",
      "Extracción de información",
    ],
    icon: BrainCircuit,
  },
  {
    title: "Integración empresarial",
    description:
      "Conectamos plataformas, aplicaciones y servicios mediante arquitecturas de integración modernas y escalables.",
    items: [
      "MuleSoft",
      "Oracle SOA",
      "Oracle WebLogic",
      "OCI",
      "API Gateway",
    ],
    icon: Network,
  },
];

const valuePoints = [
  {
    title: "Reducción de costos",
    icon: Zap,
  },
  {
    title: "Mayor velocidad operativa",
    icon: GitBranch,
  },
  {
    title: "Integración total y estabilidad",
    icon: Layers3,
  },
  {
    title: "Entregables rápidos y medibles",
    icon: Bot,
  },
];

export function DevelopmentAutomationSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(167,168,169,0.16),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(249,66,58,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-[#F9423A]">
              Desarrollo, integración y automatización
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
              Soluciones empresariales listas para producción
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Desarrollamos, integramos y automatizamos soluciones tecnológicas
              para acelerar procesos, conectar sistemas, modernizar plataformas
              y mejorar la eficiencia operativa de tu organización.
            </p>

            <div className="mt-8 rounded-3xl bg-black p-6 text-white">
              <Workflow className="h-8 w-8 text-[#F9423A]" />
              <p className="mt-4 text-xl font-black">
                Ciclos ágiles, arquitectura escalable, integración estable y
                entregables medibles para procesos críticos de negocio.
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

                  <div className="mt-5 flex flex-wrap gap-2">
                    {capability.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)]">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {valuePoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F9423A]/10">
                    <Icon className="h-5 w-5 text-[#F9423A]" />
                  </div>

                  <p className="mt-4 font-black text-black">{point.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}