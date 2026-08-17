import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation } from "@/content/navigation";
import { socialLinks } from "@/content/social";
import { SocialIcon } from "@/components/shared/SocialIcon";

const footerServices = [
  {
    label: "Consultoría de Base de Datos",
    href: "/servicios",
  },
  {
    label: "Servicios Administrados",
    href: "/servicios",
  },
  {
    label: "Desarrollo, Integración y Automatización",
    href: "/servicios",
  },
  {
    label: "Data Analytics & Management",
    href: "/servicios",
  },
  {
    label: "Middleware, Cloud e Integración",
    href: "/servicios",
  },
  {
    label: "Equipo de Cómputo Empresarial",
    href: "/servicios",
  },
  {
    label: "Aviso de privacidad",
    href: "/aviso-de-privacidad",
  },
];
export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center" aria-label="Ir al inicio">
            <Image
              src="/brand/sokodb-logo-light.svg"
              alt="SokoDB"
              width={150}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            Soluciones y consultoría especializada en plataformas de datos,
            servicios administrados, integración, automatización, analítica e
            infraestructura empresarial.
          </p>

          <div className="mt-6 flex gap-3 text-white/80">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
              >
                <SocialIcon name={social.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Navegación</h3>

          <ul className="mt-4 space-y-3 text-sm text-white/65">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#F9423A]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Servicios</h3>

          <ul className="mt-4 space-y-3 text-sm text-white/65">
            {footerServices.map((service) => (
              <li key={service.label}>
                <Link href={service.href} className="hover:text-[#F9423A]">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contacto</h3>

          <ul className="mt-4 space-y-4 text-sm text-white/65">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-[#F9423A]" />
              <span>Montecito No. 38 Piso 39 Oficina 34, Colonia Nápoles, Alcaldía Benito Juárez, México, México C.P. 03810</span>
            </li>

            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[#F9423A]" />
              <a
                href="mailto:contacto@sokodb.com.mx"
                className="hover:text-[#F9423A]"
              >
                contacto@sokodb.com.mx
              </a>
            </li>

            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[#F9423A]" />
              <a href="tel:+525573605415" className="hover:text-[#F9423A]">
                +52 55 7360 5415
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SokoDB. Todos los derechos reservados.</p>

          <Link href="/aviso-de-privacidad" className="hover:text-[#F9423A]">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}