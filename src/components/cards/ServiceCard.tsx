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
    <article className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F9423A]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9423A]/10 transition-colors duration-300 group-hover:bg-[#F9423A]">
        <Icon className="h-6 w-6 text-[#F9423A] transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="mt-6 text-xl font-black tracking-tight text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-600">
        {description}
      </p>
    </article>
  );
}