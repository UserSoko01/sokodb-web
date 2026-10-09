import Image from "next/image";
import Link from "next/link";
import type { HuitzoHomeCtaVariant } from "@/lib/demo-variants";

type HuitzoHomeCtaDemoProps = {
  variant: HuitzoHomeCtaVariant;
};

const lightSteps = [
  {
    number: "01",
    title: "CREAR",
    description: "Diseño de la solución",
  },
  {
    number: "02",
    title: "EMPACAR",
    description: "Intelligence Pack reutilizable",
  },
  {
    number: "03",
    title: "OPERAR",
    description: "Huitzo Hub e integración",
  },
];

const darkSteps = [
  {
    eyebrow: "01 / ENTRADA",
    title: "Datos y sistemas",
  },
  {
    eyebrow: "02 / SOLUCIÓN",
    title: "Intelligence Pack",
  },
  {
    eyebrow: "03 / RESULTADO",
    title: "Operación integrada",
  },
];

function HuitzoHomeCtaLight() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/huitzo/icon.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />

            <p className="text-xs font-bold uppercase tracking-tight text-[#F9423A]">
              IA empresarial · con tecnología de Huitzo
            </p>
          </div>

          <h2 className="mt-8 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#121214] md:text-6xl">
            Lleva la IA de la idea a la operación.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            SokoDB diseña e implementa soluciones de IA integradas con tus
            datos, procesos y sistemas.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/servicios?huitzoSection=a"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#F9423A] px-7 font-semibold text-white transition-colors hover:bg-[#D92E27]"
            >
              Explorar soluciones de IA ↗
            </Link>

            <Link
              href="/contacto"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-7 font-semibold text-black transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              Hablar con un especialista
            </Link>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-neutral-50 p-4 md:p-6">
          <p className="text-xs font-bold uppercase text-neutral-500">
            De una idea a una solución operativa
          </p>

          <div className="mt-4 grid gap-3">
            {lightSteps.map((step) => (
              <article
                key={step.number}
                className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-4 md:p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFEFED] text-sm font-bold text-[#F9423A]">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-base font-black text-[#121214]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HuitzoHomeCtaDark() {
  return (
    <section className="bg-[#141517]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/huitzo/icon.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />

            <p className="text-xs font-bold uppercase tracking-tight text-[#F9423A]">
              SokoDB × Huitzo
            </p>
          </div>

          <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Tus procesos. <br />
            IA en acción.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Transformamos procesos empresariales en soluciones de IA con
            tecnología de Huitzo y acompañamiento de SokoDB.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#F9423A] px-7 font-semibold text-white transition-colors hover:bg-[#D92E27]"
            >
              Cuéntanos tus necesidades ↗
            </Link>

            <Link
              href="/servicios?huitzoSection=b"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/70 px-7 font-semibold text-white transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              Conoce la solución
            </Link>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-[#1F2023] p-5 md:p-6">
          <p className="text-xs font-bold uppercase text-white/70">
            Conectamos tu negocio con IA
          </p>

          <div className="mt-4 grid gap-4">
            {darkSteps.map((step) => (
              <article
                key={step.eyebrow}
                className="flex gap-3 rounded-2xl border border-white/10 bg-[#141517] p-4"
              >
                <div className="mt-1 h-9 w-1 shrink-0 rounded-sm bg-[#F9423A]" />

                <div>
                  <p className="text-[10px] font-bold uppercase text-[#449DB4]">
                    {step.eyebrow}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-white">
                    {step.title}
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

export function HuitzoHomeCtaDemo({ variant }: HuitzoHomeCtaDemoProps) {
  if (variant === "a") {
    return <HuitzoHomeCtaLight />;
  }

  return <HuitzoHomeCtaDark />;
}