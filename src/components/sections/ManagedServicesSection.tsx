import { Clock, Headphones, Settings, ShieldCheck } from "lucide-react";

const serviceLevels = [
  {
    level: "N1",
    title: "Nivel 1",
    items: [
      "Monitoreo de ambientes",
      "Ejecución de tareas rutinarias",
      "Clasificación de incidentes para escalación",
    ],
    icon: Headphones,
  },
  {
    level: "N2",
    title: "Nivel 2",
    items: [
      "Ejecución de tareas programadas",
      "Definición de plan de acción en incidentes",
      "Seguimiento de tickets con fabricante",
    ],
    icon: Settings,
  },
  {
    level: "N3",
    title: "Nivel 3",
    items: [
      "Recomendaciones proactivas de mejora",
      "Aplicación de parches de base de datos",
      "Atención de incidentes de alto impacto",
    ],
    icon: ShieldCheck,
  },
];

const modalities = [
  "Bolsa de horas",
  "Proyecto fijo",
  "Sitio",
  "Remoto",
  "Híbrido",
  "5×8",
  "7×24",
  "Guardias y festivos",
];

export function ManagedServicesSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(249,66,58,0.07),transparent_24%),radial-gradient(circle_at_90%_80%,rgba(167,168,169,0.18),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#F9423A]">
            Servicios administrados
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Supervisamos, mantenemos y optimizamos tus bases de datos
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Brindamos soporte especializado para que tu empresa pueda enfocarse
            en lo esencial mientras mantenemos la continuidad, estabilidad y
            desempeño de tus plataformas de datos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {serviceLevels.map((level) => {
            const Icon = level.icon;

            return (
              <article
                key={level.level}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black text-[#F9423A]">
                      {level.level}
                    </p>
                    <h3 className="mt-1 text-2xl font-black tracking-tight text-black">
                      {level.title}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                    <Icon className="h-6 w-6 text-[#F9423A]" />
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-neutral-600">
                  {level.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F9423A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-[#F9423A]" />
                <h3 className="text-xl font-black text-black">
                  Modalidades flexibles de atención
                </h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Adaptamos el esquema de servicio a las necesidades de tu
                operación: atención en sitio, remota o híbrida, esquemas por
                bolsa de horas, proyecto fijo y ventanas de soporte 5×8 o 7×24.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {modalities.map((modality) => (
                <span
                  key={modality}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700"
                >
                  {modality}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}