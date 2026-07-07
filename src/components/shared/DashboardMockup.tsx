import { Activity, Database, FileText, ShieldCheck } from "lucide-react";

const metrics = [
  {
    label: "Bases activas",
    value: "24",
    detail: "+2 este mes",
    icon: Database,
  },
  {
    label: "Disponibilidad",
    value: "99.98%",
    detail: "Últimos 30 días",
    icon: ShieldCheck,
  },
  {
    label: "Consultas",
    value: "12.4M",
    detail: "+18.6% vs mes anterior",
    icon: Activity,
  },
];

const reports = [
  "Informe de rendimiento",
  "Reporte de seguridad",
  "Uso de bases de datos",
];

export function DashboardMockup() {
  return (
    <div className="relative rounded-[2rem] border border-neutral-200 bg-neutral-50 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
      <div className="grid overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white lg:grid-cols-[180px_1fr]">
        <aside className="hidden bg-black p-6 text-white lg:block">
          <p className="text-sm font-black tracking-[0.18em]">SOKO DB</p>

          <nav className="mt-8 space-y-3 text-sm text-white/65">
            {[
              "Resumen",
              "Bases de datos",
              "Consultas",
              "Rendimiento",
              "Seguridad",
              "Reportes",
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-2 ${
                  index === 0
                    ? "bg-[#F9423A] text-white"
                    : "hover:bg-white/10"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <div className="p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-neutral-500">
                Resumen ejecutivo
              </p>
              <h3 className="mt-1 text-xl font-black text-black">
                Infraestructura de datos
              </h3>
            </div>

            <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500">
              Últimos 30 días
            </span>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-neutral-200 bg-white p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-500">{metric.label}</p>
                    <Icon className="h-5 w-5 text-[#F9423A]" />
                  </div>

                  <p className="mt-3 text-3xl font-black text-black">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {metric.detail}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-black">Rendimiento</p>
                <span className="text-xs text-neutral-500">CPU %</span>
              </div>

              <div className="mt-6 flex h-40 items-end gap-2">
                {[32, 42, 36, 52, 48, 66, 58, 72, 64, 80, 70, 88].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t bg-[#F9423A]/80"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-[#F9423A]" />
                  <div>
                    <p className="font-semibold text-black">Seguridad</p>
                    <p className="text-sm text-neutral-500">Sin incidentes</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-[#F9423A]" />
                  <div>
                    <p className="font-semibold text-black">Reportes</p>
                    <p className="text-sm text-neutral-500">
                      {reports.length} recientes
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                  {reports.map((report) => (
                    <li key={report}>• {report}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-[#F9423A]/30" />
      <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#F9423A]/10" />
    </div>
  );
}