import {
  BadgeCheck,
  Handshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
} from "lucide-react";

const values = [
  {
    title: "Confianza",
    description:
      "Construimos relaciones de largo plazo basadas en comunicación clara, responsabilidad técnica y compromiso.",
    icon: ShieldCheck,
  },
  {
    title: "Especialización",
    description:
      "Aplicamos conocimiento técnico profundo para resolver problemas complejos de bases de datos, software y operación tecnológica.",
    icon: BadgeCheck,
  },
  {
    title: "Cercanía",
    description:
      "Escuchamos, acompañamos y trabajamos junto con nuestros clientes para entender sus necesidades reales.",
    icon: Handshake,
  },
  {
    title: "Agilidad",
    description:
      "Buscamos soluciones eficientes, procesos claros y respuestas oportunas sin estructuras innecesariamente complejas.",
    icon: Rocket,
  },
  {
    title: "Calidad",
    description:
      "Cuidamos los detalles técnicos, la estabilidad, la seguridad y la escalabilidad de cada solución.",
    icon: Target,
  },
  {
    title: "Innovación útil",
    description:
      "Usamos tecnología con propósito: resolver problemas reales, mejorar procesos y generar valor para el negocio.",
    icon: Lightbulb,
  },
];

export function ValuesGrid() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#F9423A]">
            Nuestros valores
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Los principios que guían nuestro trabajo
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Cada proyecto se desarrolla con una visión técnica, cercana y
            orientada a generar valor real para nuestros clientes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                  <Icon className="h-6 w-6 text-[#F9423A]" />
                </div>

                <h3 className="mt-6 text-xl font-black tracking-tight text-black">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}