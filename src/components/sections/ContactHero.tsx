import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

const contactHighlights = [
  {
    title: "Respuesta ágil",
    description: "Atención especializada para entender tu necesidad.",
    icon: MessageCircle,
  },
  {
    title: "Correo directo",
    description: "contacto@sokodb.com.mx",
    icon: Mail,
  },
  {
    title: "Atención telefónica",
    description: "+52 55 7360 5415",
    icon: Phone,
  },
];

export function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(249,66,58,0.08),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(167,168,169,0.18),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Hablemos de tu proyecto
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-black md:text-6xl">
            Conversemos sobre la solución que tu empresa necesita
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Cuéntanos qué reto tecnológico enfrenta tu empresa. En SokoDB
            podemos ayudarte a optimizar bases de datos, desarrollar software a
            la medida, mejorar procesos y convertir tus datos en información
            útil para tomar mejores decisiones.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#formulario-contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F9423A] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#D92E27]"
            >
              Enviar mensaje
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#formulario-contacto"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-7 py-4 font-semibold text-black transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              Agenda una asesoría
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
          <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
            <div className="border-b border-neutral-200 pb-5">
              <p className="text-sm font-semibold text-neutral-500">
                Contacto SokoDB
              </p>
              <h2 className="mt-1 text-2xl font-black text-black">
                Atención para empresas
              </h2>
            </div>

            <div className="mt-6 grid gap-4">
              {contactHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F9423A]/10">
                        <Icon className="h-6 w-6 text-[#F9423A]" />
                      </div>

                      <div>
                        <h3 className="font-black text-black">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-neutral-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-black p-5 text-white">
              <p className="text-sm text-white/60">Siguiente paso</p>
              <p className="mt-2 text-xl font-black">
                Comparte tu necesidad y nuestro equipo te orientará.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}