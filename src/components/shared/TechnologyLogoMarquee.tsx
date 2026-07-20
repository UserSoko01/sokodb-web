import Image from "next/image";
import { technologyLogos } from "@/content/technologies";

export function TechnologyLogoMarquee() {
  const duplicatedLogos = [...technologyLogos, ...technologyLogos];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.03)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
        Ecosistemas tecnológicos
      </p>

      <div className="flex overflow-hidden">
        <div
          className="flex min-w-max items-center gap-5 pr-5"
          style={{
            animation: "tech-marquee 28s linear infinite",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-16 min-w-40 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 px-6"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="max-h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}