import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <article
      tabIndex={0}
      className="group h-fit cursor-default rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)] focus-visible:border-[#F9423A]/50 focus-visible:ring-2 focus-visible:ring-[#F9423A]/20"
    >
      <div className="flex items-start gap-4 md:block">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F9423A]/10 transition-colors duration-300 group-hover:bg-[#F9423A] group-focus-visible:bg-[#F9423A]">
          <Icon className="h-6 w-6 text-[#F9423A] transition-colors duration-300 group-hover:text-white group-focus-visible:text-white" />
        </div>

        <div className="min-w-0 md:mt-6">
          <h3 className="text-xl font-black tracking-tight text-black">
            {title}
          </h3>

          <p className="mt-3 max-h-40 overflow-hidden text-sm leading-6 text-neutral-600 opacity-100 transition-all duration-300 sm:mt-0 sm:max-h-0 sm:opacity-0 sm:group-hover:mt-3 sm:group-hover:max-h-40 sm:group-hover:opacity-100 sm:group-focus-visible:mt-3 sm:group-focus-visible:max-h-40 sm:group-focus-visible:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}