"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navigation, mainCTA } from "@/content/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { socialLinks } from "@/content/social";
import { SocialIcon } from "../shared/SocialIcon";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label="Ir al inicio">
          <Image
            src="/brand/sokodb-logo-dark.svg"
            alt="SokoDB"
            width={150}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-semibold tracking-wide text-black md:flex">
          {navigation.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors hover:text-[#F9423A] ${
                  active ? "text-[#F9423A]" : "text-black"
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#F9423A]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 text-black transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
            >
              <SocialIcon name={social.icon} className="h-3 w-3" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href={mainCTA.href}
            className="rounded-xl bg-[#F9423A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D92E27]"
          >
            {mainCTA.label}
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menú"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-black transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] border-neutral-200 p-0">
              <SheetHeader className="border-b border-neutral-200 px-6 py-5 text-left">
                <SheetTitle>
                  <Link href="/" className="flex items-center" aria-label="Ir al inicio">
                    <Image
                      src="/brand/sokodb-logo-dark.svg"
                      alt="SokoDB"
                      width={120}
                      height={36}
                      className="h-7 w-auto"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex h-full flex-col px-6 py-6">
                <nav className="grid gap-2">
                  {navigation.map((item) => {
                    const active = isActivePath(pathname, item.href);

                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={`rounded-2xl px-4 py-4 text-base font-semibold transition-colors ${
                            active
                              ? "bg-[#F9423A]/10 text-[#F9423A]"
                              : "text-black hover:bg-neutral-100 hover:text-[#F9423A]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                <div className="mt-6 flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 text-black transition-colors hover:border-[#F9423A] hover:text-[#F9423A]"
                    >
                      <SocialIcon name={social.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>

                <div className="mt-8 border-t border-neutral-200 pt-6">
                  <SheetClose asChild>
                    <Link
                      href={mainCTA.href}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#F9423A] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#D92E27]"
                    >
                      {mainCTA.label}
                    </Link>
                  </SheetClose>
                </div>

                <div className="mt-8 rounded-3xl bg-black p-5 text-white">
                  <p className="text-sm text-white/60">SokoDB</p>
                  <p className="mt-2 text-lg font-black">
                    Tecnología confiable para empresas que necesitan operar mejor.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}