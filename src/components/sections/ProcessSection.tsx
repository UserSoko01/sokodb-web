import {
  ClipboardList,
  Compass,
  Rocket,
  Settings,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu infraestructura, procesos, necesidades y objetivos para entender el punto de partida.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Diseño de solución",
    description:
      "Definimos la estrategia, arquitectura y herramientas más adecuadas para resolver tus necesidades.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Ejecutamos la solución con buenas prácticas, control técnico y comunicación constante.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Optimización y soporte",
    description:
      "Medimos resultados, realizamos ajustes y brindamos acompañamiento para asegurar continuidad operativa.",
    icon: Settings,
  },
];

export function ProcessSection() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#F9423A]">
            Proceso de trabajo
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Un proceso claro para transformar tu operación
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Trabajamos con una metodología simple, ordenada y orientada a
            resultados para convertir tus retos tecnológicos en soluciones
            funcionales, escalables y sostenibles.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-200 lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#F9423A]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                      <Icon className="h-6 w-6 text-[#F9423A]" />
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-black tracking-tight text-black">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {step.description}
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