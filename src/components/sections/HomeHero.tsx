import Link from "next/link";
import { DashboardMockup } from "@/components/shared/DashboardMockup";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(249,66,58,0.08),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(167,168,169,0.18),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Soluciones y consultoría especializada en TI
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-black md:text-6xl">
            Fortalecemos tus plataformas de datos, integración y operación tecnológica
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Ayudamos a organizaciones de diversos sectores a modernizar sus plataformas
            de datos, integrar sistemas, automatizar procesos y mejorar la continuidad
            operativa mediante soluciones seguras, escalables y de alto desempeño.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="rounded-xl bg-[#F9423A] px-7 py-4 text-center font-semibold text-white transition-colors hover:bg-[#D92E27]"
            >
              Cotizar
            </Link>

            <Link
              href="/servicios"
              className="rounded-xl border border-neutral-300 px-7 py-4 text-center font-semibold text-black transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              Conocer servicios
            </Link>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}