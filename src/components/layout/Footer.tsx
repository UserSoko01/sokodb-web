import Link from "next/link";
import { BriefcaseBusiness, Mail, MapPin, Phone} from "lucide-react";
import { navigation } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-black tracking-[0.18em]">
            SOKO DB
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            Consultoría en bases de datos, soluciones empresariales, analítica
            de datos y desarrollo de software a la medida.
          </p>

          <div className="mt-6 flex gap-4 text-white/80">
            <BriefcaseBusiness className="h-5 w-5" />
            <BriefcaseBusiness className="h-5 w-5" />
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
            <li>Consultoría en bases de datos</li>
            <li>Soluciones empresariales</li>
            <li>Data Analytics / Power BI</li>
            <li>Desarrollo de software a la medida</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contacto</h3>
          <ul className="mt-4 space-y-4 text-sm text-white/65">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-[#F9423A]" />
              Ciudad de México, México
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[#F9423A]" />
              contacto@sokodb.com.mx
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[#F9423A]" />
              +52 55 7360 5415
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