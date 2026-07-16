import { whatsappContact } from "@/content/social";
import { SocialIcon } from "@/components/shared/SocialIcon";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappContact.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <SocialIcon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}