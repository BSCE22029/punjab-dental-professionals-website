import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { services, siteConfig } from "@/lib/site-config";
import { Sparkles, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Explore dental services and pricing at ${siteConfig.name}.`,
};

const tagIcon = { popular: Star, new: Sparkles } as const;

export default function ServicesPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Our Services</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">Comprehensive Dental Care</h1>
        <p className="mt-4 max-w-lg text-ink-800/70">
          Sample services and pricing shown for demonstration — final list to be confirmed with{" "}
          {siteConfig.name} before launch.
        </p>
      </MotionSection>

      <div className="mt-14 space-y-16">
        {services.map((category, i) => (
          <MotionSection key={category.id} delay={i * 0.05}>
            <h2 className="font-display text-2xl font-bold text-ink-900">{category.name}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => {
                const Icon = item.tag ? tagIcon[item.tag] : null;
                return (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 rounded-xl border border-black/5 p-5 transition-shadow hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-display font-semibold text-ink-900">{item.name}</p>
                        {Icon && <Icon className="h-4 w-4 text-brand-500" />}
                      </div>
                      <p className="mt-1 text-sm text-ink-800/60">{item.description}</p>
                    </div>
                    <p className="whitespace-nowrap font-display font-bold text-brand-600">{item.price}</p>
                  </div>
                );
              })}
            </div>
          </MotionSection>
        ))}
      </div>
    </div>
  );
}
