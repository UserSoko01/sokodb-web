import {
  Cable,
  HardDrive,
  Laptop,
  Network,
  Printer,
  Server,
  ShieldCheck,
} from "lucide-react";

const equipmentCategories = [
  {
    title: "Servidores y almacenamiento",
    description:
      "Servidores IBM, Lenovo, HP, Dell y almacenamiento empresarial para proteger, procesar y escalar tus datos.",
    items: ["Servidores", "Storage empresarial", "Respaldo", "Escalabilidad"],
    icon: Server,
  },
  {
    title: "Redes y conectividad",
    description:
      "Switches, firewalls y soluciones de conectividad robusta para mantener tu operación comunicada y segura.",
    items: ["Switches", "Firewalls", "Redes", "Conectividad"],
    icon: Network,
  },
  {
    title: "Equipos de oficina",
    description:
      "Laptops, desktops, impresoras y periféricos de marcas líderes para fortalecer la operación diaria de tu empresa.",
    items: ["Laptops", "Desktops", "Impresoras", "Periféricos"],
    icon: Laptop,
  },
];

const supportItems = [
  {
    title: "Asesoría",
    icon: ShieldCheck,
  },
  {
    title: "Configuración",
    icon: Cable,
  },
  {
    title: "Instalación",
    icon: HardDrive,
  },
  {
    title: "Operación diaria",
    icon: Printer,
  },
];

export function EnterpriseEquipmentSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(249,66,58,0.07),transparent_24%),radial-gradient(circle_at_90%_80%,rgba(167,168,169,0.18),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-[#F9423A]">
              Equipo de Cómputo Empresarial
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
              Infraestructura tecnológica para proteger y escalar tu operación
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Suministramos infraestructura empresarial de alto rendimiento para
              fortalecer tus plataformas tecnológicas, proteger tus datos y
              mantener la continuidad operativa de tu organización.
            </p>

            <div className="mt-8 rounded-3xl bg-black p-6 text-white">
              <Server className="h-8 w-8 text-[#F9423A]" />
              <p className="mt-4 text-xl font-black">
                Asesoría, configuración e instalación incluidas para que tu
                infraestructura esté lista para operar.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {equipmentCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                      <Icon className="h-6 w-6 text-[#F9423A]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-black tracking-tight text-black">
                        {category.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-neutral-600">
                        {category.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)]">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F9423A]/10">
                    <Icon className="h-5 w-5 text-[#F9423A]" />
                  </div>

                  <p className="mt-4 font-black text-black">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}