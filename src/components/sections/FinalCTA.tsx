import Link from "next/link";
import { ArrowRight, Database, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,66,58,0.2),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(167,168,169,0.12),transparent_28%)]" />

      <div className="pointer-events-none absolute left-10 top-10 h-32 w-32 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-40 w-40 rounded-full border border-[#F9423A]/30" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Agenda una asesoría
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
            ¿Listo para llevar tu empresa al siguiente nivel?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Agenda una asesoría con nuestro equipo y descubre cómo SokoDB puede
            ayudarte a optimizar tus bases de datos, desarrollar soluciones a la
            medida y fortalecer tu operación tecnológica.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F9423A] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#D92E27]"
            >
              Agenda una asesoría
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              Cotizar proyecto
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-white/50">Prioridades SokoDB</p>
                <h3 className="mt-1 text-2xl font-black">
                  Tecnología confiable
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]">
                <Database className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#F9423A]" />
                  <div>
                    <h4 className="font-bold">Bases de datos optimizadas</h4>
                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Mejora rendimiento, disponibilidad y seguridad para
                      entornos empresariales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start gap-4">
                  <Database className="mt-1 h-6 w-6 shrink-0 text-[#F9423A]" />
                  <div>
                    <h4 className="font-bold">Soluciones escalables</h4>
                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Desarrollos y sistemas preparados para crecer junto con tu
                      operación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#F9423A] p-5">
                <p className="text-sm text-white/75">Siguiente paso</p>
                <p className="mt-2 text-xl font-black">
                  Conversemos sobre tu proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}