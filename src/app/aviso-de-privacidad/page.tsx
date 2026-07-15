import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de SokoDB sobre el tratamiento de datos personales recabados a través del sitio web.",
};

export default function AvisoDePrivacidadPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm font-semibold text-[#F9423A]">
          Información legal
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-black md:text-6xl">
          Aviso de privacidad
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          En SokoDB reconocemos la importancia de proteger la información
          personal que nos proporcionan nuestros visitantes, prospectos,
          clientes y usuarios. Este aviso describe de manera general cómo
          recopilamos, usamos y protegemos los datos personales recibidos a
          través de nuestro sitio web.
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-black text-black">
              1. Datos personales que podemos recopilar
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              Podemos recopilar información que nos proporciones voluntariamente
              mediante formularios de contacto, correo electrónico u otros
              medios de comunicación, incluyendo nombre, correo electrónico,
              teléfono, empresa, servicio de interés y mensaje relacionado con
              tu solicitud.
            </p>
            <p className="mt-4 leading-8 text-neutral-600">
              También podemos recopilar información técnica no identificable de
              forma directa, como dirección IP, tipo de navegador, dispositivo,
              páginas visitadas, tiempos de navegación e información de
              interacción con el sitio, con fines de análisis, seguridad y mejora
              de la experiencia de usuario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black">
              2. Finalidades del tratamiento
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              Los datos personales recabados podrán utilizarse para atender
              solicitudes de información, responder mensajes enviados mediante
              el formulario de contacto, brindar seguimiento comercial o técnico,
              preparar propuestas de servicios, mejorar nuestra comunicación y
              mantener contacto con personas interesadas en las soluciones de
              SokoDB.
            </p>
            <p className="mt-4 leading-8 text-neutral-600">
              También podremos utilizar información agregada o estadística para
              mejorar el sitio web, analizar el desempeño de nuestros contenidos
              y optimizar la experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black">
              3. Protección y confidencialidad
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              SokoDB adopta medidas razonables para proteger la información
              recibida contra pérdida, uso indebido, acceso no autorizado,
              alteración o divulgación. El acceso a los datos se limita al
              personal o colaboradores que requieren dicha información para dar
              seguimiento a las solicitudes recibidas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black">
              4. Transferencia de información
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              SokoDB no vende ni comercializa datos personales. La información
              podrá ser compartida únicamente cuando sea necesario para atender
              una solicitud, cumplir obligaciones legales, operar herramientas
              tecnológicas relacionadas con el sitio o proteger los derechos e
              intereses de la empresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black">
              5. Formulario de contacto
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              La información enviada mediante el formulario de contacto se
              utiliza exclusivamente para responder a la solicitud realizada,
              establecer comunicación con la persona interesada y dar seguimiento
              al servicio o solución consultada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black">
              6. Derechos sobre tus datos
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              Puedes solicitar el acceso, rectificación, actualización o
              eliminación de tus datos personales enviando un mensaje a:
            </p>
            <p className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 font-semibold text-black">
              contacto@sokodb.com.mx
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black">
              7. Cambios al aviso de privacidad
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              SokoDB se reserva el derecho de modificar este aviso de privacidad
              en cualquier momento. Cualquier cambio será publicado en esta
              misma sección del sitio web.
            </p>
          </section>

          <section className="rounded-3xl bg-black p-6 text-white">
            <h2 className="text-2xl font-black">
              Contacto para temas de privacidad
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              Para cualquier duda relacionada con este aviso o con el tratamiento
              de tus datos personales, puedes escribirnos a:
            </p>
            <p className="mt-4 font-semibold text-[#F9423A]">
              contacto@sokodb.com.mx
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}