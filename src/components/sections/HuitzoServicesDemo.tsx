import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Layers3,
  LockKeyhole,
  PackageCheck,
  PlugZap,
  Rocket,
  ServerCog,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";


type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const problemItems: IconItem[] = [
  {
    title: "Seguridad",
    description:
      "Información sensible que no debe moverse a cualquier servidor externo.",
    icon: ShieldCheck,
  },
  {
    title: "Conexión",
    description:
      "La IA debe trabajar con los sistemas, datos y procesos que ya operan en la empresa.",
    icon: PlugZap,
  },
  {
    title: "Puesta en marcha",
    description:
      "Un prototipo puede ser rápido; una solución en producción requiere arquitectura, operación y control.",
    icon: Rocket,
  },
  {
    title: "Tiempo y especialistas",
    description:
      "Construir desde cero puede ser lento y costoso si no existe una plataforma base.",
    icon: Timer,
  },
];

const operatingModel = [
  {
    label: "CREAR",
    title: "Huitzo Studio",
    description:
      "Diseño de la solución, definición del caso de uso y construcción de la lógica de IA.",
  },
  {
    label: "EMPACAR",
    title: "Intelligence Packs",
    description:
      "Capacidades reutilizables para resolver procesos específicos con resultados trazables.",
  },
  {
    label: "OPERAR",
    title: "Huitzo Hub",
    description:
      "Ejecución e integración de la solución en nube, entorno privado o infraestructura propia.",
  },
];

const packFeatures: IconItem[] = [
  {
    title: "Deterministas",
    description:
      "Diseñados para obtener resultados repetibles y bajo control, no respuestas improvisadas.",
    icon: CheckCircle2,
  },
  {
    title: "Integrables",
    description:
      "Pensados para conectarse con sistemas, datos y flujos empresariales existentes.",
    icon: Layers3,
  },
  {
    title: "Auditables",
    description:
      "Orientados a trazabilidad, evidencia de ejecución y revisión humana cuando aplique.",
    icon: LockKeyhole,
  },
  {
    title: "Operan donde decidas",
    description:
      "Pueden ejecutarse dentro del perímetro tecnológico que defina la organización.",
    icon: ServerCog,
  },
];

const useCases = [
  "Revisión de documentos",
  "Análisis de contratos",
  "Conocimiento interno",
  "Automatización de operaciones",
];

const deploymentOptions: IconItem[] = [
  {
    title: "Nube Huitzo",
    description:
      "Para empezar rápido, usar capacidad administrada y avanzar por uso.",
    icon: Cloud,
  },
  {
    title: "Entorno privado",
    description:
      "Ambiente dedicado para la empresa, con operación administrada.",
    icon: Building2,
  },
  {
    title: "Infraestructura propia",
    description:
      "Ejecución dentro de la red, reglas y perímetro tecnológico del cliente.",
    icon: ServerCog,
  },
];


function HuitzoServicesDark() {
  return (
    <section id="huitzo-services" className="scroll-mt-24 bg-[#141517]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/brand/huitzo/icon.png"
                alt="Huitzo icon"
                width={50}
                height={50}
                className="h-20 w-20 object-contain"
              />
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              De procesos empresariales a IA en producción
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Conectamos datos, documentos, sistemas y reglas de negocio para
              implementar soluciones de IA que operan dentro de tus flujos
              reales, con trazabilidad y control.
            </p>

            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#F9423A] px-7 font-semibold text-white transition-colors hover:bg-[#D92E27]"
              >
                Cuéntanos qué necesitas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1F2023] p-5 md:p-6">
            <p className="text-xs font-bold uppercase text-white/70">
              Conectamos tu negocio con IA
            </p>

            <div className="mt-5 grid gap-4">
              {[
                ["01 / ENTRADA", "Datos, documentos y sistemas"],
                ["02 / SOLUCIÓN", "Intelligence Pack"],
                ["03 / OPERACIÓN", "Huitzo Hub e integración"],
              ].map(([label, title]) => (
                <article
                  key={label}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-[#141517] p-4"
                >
                  <div className="mt-1 h-10 w-1 shrink-0 rounded-sm bg-[#F9423A]" />

                  <div>
                    <p className="text-[10px] font-bold uppercase text-[#449DB4]">
                      {label}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-white">
                      {title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problemItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/15">
                  <Icon className="h-6 w-6 text-[#F9423A]" />
                </div>

                <h3 className="mt-6 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {operatingModel.map((step, index) => (
            <article
              key={step.label}
              className="rounded-[2rem] border border-white/10 bg-[#1F2023] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#F9423A]">
                  0{index + 1}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F9423A] text-white">
                  {index === 0 ? (
                    <Wrench className="h-5 w-5" />
                  ) : index === 1 ? (
                    <PackageCheck className="h-5 w-5" />
                  ) : (
                    <BrainCircuit className="h-5 w-5" />
                  )}
                </div>
              </div>

              <p className="mt-8 text-xs font-black uppercase text-[#449DB4]">
                {step.label}
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase text-[#F9423A]">
              Intelligence Packs
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
              Capacidades de IA reutilizables, trazables y bajo control
            </h3>

            <p className="mt-5 leading-8 text-white/65">
              Cada solución se convierte en un activo que puede instalarse de
              nuevo, reutilizarse en otros procesos y administrarse como parte
              del portafolio de IA de la organización.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {packFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#1F2023] p-5"
                >
                  <Icon className="h-6 w-6 text-[#F9423A]" />

                  <h4 className="mt-5 font-black text-white">{item.title}</h4>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-[#1F2023] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase text-[#F9423A]">
                Instalación flexible
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
                La IA se ejecuta donde el negocio lo requiere
              </h3>

              <p className="mt-5 leading-8 text-white/65">
                Puedes iniciar rápido, operar en un entorno dedicado o llevar la
                ejecución a tu propia infraestructura cuando tus reglas de
                seguridad lo exijan.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {deploymentOptions.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-[#141517] p-5"
                  >
                    <Icon className="h-6 w-6 text-[#F9423A]" />

                    <h4 className="mt-5 font-black text-white">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HuitzoServicesDemo() {
  return <HuitzoServicesDark />;
}