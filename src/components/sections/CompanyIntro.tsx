import { CheckCircle2 } from "lucide-react";

const points = [
  "Consultoría especializada en bases de datos",
  "Desarrollo de software a la medida",
  "Soluciones empresariales escalables",
  "Analítica de datos para toma de decisiones",
  "Atención ágil y cercana",
  "Soporte técnico confiable",
];

export function CompanyIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Acerca de SokoDB
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Actualizamos tu mundo digital con soluciones tecnológicas confiables
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-neutral-600">
            SokoDB es una consultora tecnológica especializada en bases de
            datos, desarrollo de software y soluciones empresariales. Nuestro
            propósito es ayudar a las organizaciones a mejorar su operación
            mediante tecnología confiable, procesos más eficientes y sistemas
            preparados para crecer.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Trabajamos con empresas que necesitan información disponible, segura
            y accesible para tomar mejores decisiones, reducir riesgos
            operativos y mantener la continuidad de sus servicios.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F9423A]" />
                <span className="text-sm font-semibold text-neutral-800">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}