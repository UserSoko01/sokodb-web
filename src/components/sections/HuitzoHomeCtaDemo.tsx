import Image from "next/image";
import Link from "next/link";

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
              href="/servicios#huitzo-services"
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

export function HuitzoHomeCtaDemo() {
  return <HuitzoHomeCtaDark />;
}