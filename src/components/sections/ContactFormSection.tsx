"use client";

import { useActionState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/actions/contact";
import Link from "next/link"


const serviceOptions = [
  "Data Analytics / Power BI",
  "Soluciones empresariales",
  "Consultoría en bases de datos",
  "Desarrollo de software a la medida",
  "Servicios Oracle",
  "EDB / PostgreSQL",
  "Greenplum",
  "ERP",
  "Otro",
];

export function ContactFormSection() {
  
  const initialState: ContactFormState = {
  success: false,
  message: "",
  };

  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <section id="formulario-contacto" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold text-[#F9423A]">
            Estamos listos para ayudarte
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Cuéntanos sobre tu proyecto
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Completa el formulario y nuestro equipo se pondrá en contacto
            contigo para conocer tus necesidades, resolver tus dudas y proponer
            el mejor camino para tu proyecto.
          </p>

          <div className="mt-8 rounded-3xl bg-black p-6 text-white">
            <CheckCircle2 className="h-8 w-8 text-[#F9423A]" />
            <p className="mt-4 text-xl font-black">
              Entre más contexto nos compartas, mejor podremos orientarte desde
              el primer contacto.
            </p>
          </div>
        </div>

        <form
          action={formAction}
          className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
        >
          <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-black">
                  Nombre completo
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Nombre y apellido"
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9423A]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-black">
                  Correo electrónico
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="correo@empresa.com"
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9423A]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-black">
                  Empresa
                </label>
                <input
                  name="company"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9423A]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-black">
                  Teléfono
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+52 55 0000 0000"
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9423A]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-black">
                  Servicio de interés
                </label>
                <select
                  name="service"
                  required
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9423A]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-black">
                  Mensaje
                </label>
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Cuéntanos brevemente qué necesitas resolver, mejorar o implementar."
                  className="mt-2 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9423A]"
                />
              </div>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-neutral-600">
              <input
                required
                name="privacy"
                type="checkbox"
                className="mt-1 h-4 w-4 accent-[#F9423A]"
              />
              <span>
                He leído y acepto el{" "}
                <Link
                  href="/aviso-de-privacidad"
                  className="font-semibold text-[#F9423A] underline-offset-4 hover:underline"
                >
                  aviso de privacidad
                </Link>
                .
              </span>
            </label>

            {state.message && (
            <div
              className={`mt-5 rounded-2xl border p-4 text-sm font-semibold ${
                state.success
                  ? "border-[#F9423A]/20 bg-[#F9423A]/10 text-black"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {state.message}
            </div>
          )}

            <button
              type="submit"
              disabled={isPending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F9423A] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#D92E27] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isPending ? "Enviando..." : "Enviar mensaje"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}