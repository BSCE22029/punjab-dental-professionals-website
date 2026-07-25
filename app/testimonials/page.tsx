import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { testimonials, siteConfig } from "@/lib/site-config";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `See what customers say about ${siteConfig.name}.`,
};

export default function TestimonialsPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Reviews</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">What Our Customers Say</h1>
        <p className="mt-2 text-sm text-ink-800/40">
          Sample testimonials shown for demo purposes — to be replaced with verified customer reviews.
        </p>
      </MotionSection>

      <MotionSection delay={0.1} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex gap-1 text-brand-500">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand-500" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-800/80">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold text-ink-900">{t.name}</p>
            <p className="text-xs text-ink-800/50">{t.location}</p>
          </div>
        ))}
      </MotionSection>
    </div>
  );
}
