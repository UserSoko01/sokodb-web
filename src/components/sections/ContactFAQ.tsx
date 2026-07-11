const faqs = [
  {
    question: "¿Qué información debo compartir para solicitar una cotización?",
    answer:
      "Puedes compartir el servicio que te interesa, una breve descripción del problema o proyecto, el tamaño aproximado de tu empresa y cualquier tecnología o sistema que ya utilices actualmente.",
  },
  {
    question: "¿Pueden hacer un diagnóstico antes de proponer una solución?",
    answer:
      "Sí. Podemos ayudarte a revisar tu situación actual para identificar oportunidades de mejora, riesgos técnicos y posibles caminos de solución.",
  },
  {
    question: "¿Atienden empresas fuera de Ciudad de México?",
    answer:
      "Sí. Podemos atender proyectos de forma remota o híbrida, dependiendo de las necesidades del cliente y el alcance del proyecto.",
  },
  {
    question: "¿Pueden trabajar con sistemas que ya están en operación?",
    answer:
      "Sí. Podemos analizar sistemas existentes, bases de datos, procesos internos e integraciones actuales para proponer mejoras o nuevas soluciones.",
  },
  {
    question: "¿El formulario obliga a contratar un servicio?",
    answer:
      "No. El formulario sirve para iniciar una conversación, entender tus necesidades y orientarte sobre la mejor alternativa para tu empresa.",
  },
];

export function ContactFAQ() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#F9423A]">
            Preguntas frecuentes
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
            Antes de contactarnos
          </h2>
        </div>

        <div className="mt-12 grid gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)]"
            >
              <h3 className="text-lg font-black text-black">
                {faq.question}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}