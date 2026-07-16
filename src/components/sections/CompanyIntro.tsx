import { CheckCircle2 } from "lucide-react";

const points = [
  "Consultoría especializada en plataformas de datos",
  "Modernización de ambientes empresariales",
  "Alianzas tecnológicas con IBM, Oracle y EDB",
  "Especialistas en PostgreSQL, Oracle, SQL Server, MySQL e Informix",
  "Soluciones seguras, escalables y de alto desempeño",
  "Acompañamiento técnico cercano y especializado",
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
            SokoDB es una consultora especializada en tecnologías de la información,
            plataformas de datos, integración tecnológica y soluciones empresariales.
            Nuestro propósito es ayudar a las organizaciones a fortalecer su operación,
            modernizar sus ambientes tecnológicos y maximizar el valor de su información.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Trabajamos con empresas que requieren datos disponibles, seguros y
            confiables para acelerar su transformación digital, mejorar la toma de
            decisiones y mantener la continuidad de sus servicios críticos.
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