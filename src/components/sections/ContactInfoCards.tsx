import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    title: "Correo electrónico",
    value: "contacto@sokodb.com.mx",
    icon: Mail,
  },
  {
    title: "Teléfono",
    value: "+52 55 7360 5415",
    icon: Phone,
  },
  {
    title: "Ubicación",
    value:
      "Montecito No. 38 Piso 39 Oficina 34, Colonia Nápoles, Alcaldía Benito Juárez, México, México C.P. 03810",
    icon: MapPin,
  },
  {
    title: "Horario de atención",
    value: "Lunes a viernes, 9:00 am – 6:00 pm",
    icon: Clock,
  },
];

export function ContactInfoCards() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#F9423A]">
            Datos de contacto
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            También puedes contactarnos directamente
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                  <Icon className="h-6 w-6 text-[#F9423A]" />
                </div>

                <h3 className="mt-6 text-lg font-black tracking-tight text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {item.value}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}