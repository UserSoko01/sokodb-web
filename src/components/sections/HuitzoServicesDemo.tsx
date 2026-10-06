import Link from "next/link";
import type { HuitzoServicesVariant } from "@/lib/demo-variants";

type HuitzoServicesDemoProps = {
  variant: HuitzoServicesVariant;
};

const lightCapabilities = [
  "Diseño de casos de uso de IA",
  "Construcción de Intelligence Packs",
  "Integración con sistemas y datos empresariales",
];

const darkModules = [
  {
    label: "01 / DATOS",
    title: "Documentos, sistemas y operación",
  },
  {
    label: "02 / IA",
    title: "Clasificación, extracción y automatización",
  },
  {
    label: "03 / RESULTADO",
    title: "Flujos operativos integrados",
  },
];

function HuitzoServicesLight() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase text-[#F9423A]">
            SokoDB × Huitzo
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-black md:text-5xl">
            Soluciones de IA listas para integrarse a tu operación
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Diseñamos, empaquetamos e integramos capacidades de IA empresarial
            para convertir procesos repetitivos, documentales o intensivos en
            datos en soluciones funcionales y escalables.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#F9423A] px-7 font-semibold text-white transition-colors hover:bg-[#D92E27]"
            >
              Explorar soluciones de IA ↗
            </Link>

            <Link
              href="/?huitzoCta=a"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-neutral-300 px-7 font-semibold text-black transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              Ver CTA en Home
            </Link>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-neutral-50 p-5 md:p-6">
          <p className="text-xs font-bold uppercase text-neutral-500">
            Capacidades Huitzo
          </p>

          <div className="mt-5 grid gap-4">
            {lightCapabilities.map((item, index) => (
              <article
                key={item}
                className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFEFED] text-sm font-bold text-[#F9423A]">
                  0{index + 1}
                </div>

                <h3 className="text-base font-black text-black">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HuitzoServicesDark() {
  return (
    <section className="bg-[#141517]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase text-[#F9423A]">
            SokoDB × Huitzo
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            De procesos empresariales a IA en producción
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Conectamos datos, documentos, sistemas y reglas de negocio para
            implementar soluciones de IA que operan dentro de tus flujos reales.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#F9423A] px-7 font-semibold text-white transition-colors hover:bg-[#D92E27]"
            >
              Cuéntanos tu caso de uso ↗
            </Link>

            <Link
              href="/?huitzoCta=b"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/70 px-7 font-semibold text-white transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              Ver CTA en Home
            </Link>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-[#1F2023] p-5 md:p-6">
          <p className="text-xs font-bold uppercase text-white/70">
            Conectamos tu negocio con IA
          </p>

          <div className="mt-5 grid gap-4">
            {darkModules.map((module) => (
              <article
                key={module.label}
                className="flex gap-3 rounded-2xl border border-white/10 bg-[#141517] p-4"
              >
                <div className="mt-1 h-9 w-1 shrink-0 rounded-sm bg-[#F9423A]" />

                <div>
                  <p className="text-[10px] font-bold uppercase text-[#449DB4]">
                    {module.label}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-white">
                    {module.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HuitzoServicesDemo({ variant }: HuitzoServicesDemoProps) {
  if (variant === "a") {
    return <HuitzoServicesLight />;
  }

  return <HuitzoServicesDark />;
}