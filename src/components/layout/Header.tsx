import Link from "next/link";
import { BriefcaseBusiness, Mail, MapPin, Phone } from "lucide-react";
import { navigation, mainCTA } from "@/content/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-black tracking-[0.18em] text-black">
          SOKO DB
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-semibold tracking-wide text-black md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#F9423A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-3 text-black">
            <BriefcaseBusiness className="h-4 w-4" />
            <BriefcaseBusiness className="h-4 w-4" />
          </div>

          <Link
            href={mainCTA.href}
            className="rounded-xl bg-[#F9423A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D92E27]"
          >
            {mainCTA.label}
          </Link>
        </div>
      </div>
    </header>
  );
}