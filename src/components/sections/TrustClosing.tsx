import { CheckCircle2 } from "lucide-react";

const points = [
  "Atención especializada",
  "Respuesta ágil",
  "Soluciones a la medida",
  "Soporte continuo",
  "Experiencia en bases de datos y desarrollo de software",
];

export function TrustClosing() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Tecnología confiable
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Tecnología confiable para decisiones importantes
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            En SokoDB trabajamos con un enfoque técnico, cercano y orientado a
            resultados. Nuestro objetivo es ayudarte a construir soluciones
            estables, seguras y preparadas para crecer junto con tu empresa.
          </p>
        </div>

        <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
          <div className="grid gap-4">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F9423A]" />
                <p className="font-semibold text-black">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}