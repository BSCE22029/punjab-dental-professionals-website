import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { siteConfig } from "@/lib/site-config";
import { Award, Users, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}, a multi-doctor dental practice in Johar Town, Lahore.`,
};

export default function AboutPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Our Story</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
          Three Specialists, One Trusted Practice
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-800/70">
          {siteConfig.name} brings together three dentists — each with a different area of focus — so patients in
          Johar Town get the right specialist for the right treatment, without being referred elsewhere. Whether
          it's a routine check-up, cosmetic work, or oral surgery, there's a dedicated doctor for it under one roof.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-800/70">
          That model has built a community of over 10,200 people online — patients who trust the practice for
          honest, specialist-matched care.
        </p>
      </MotionSection>

      <MotionSection delay={0.1} className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Award, title: "3 Dentists", desc: "General, cosmetic/orthodontic, and surgical specialists." },
          { icon: Users, title: "10,200+ Community", desc: "One of Johar Town's most-followed dental practices." },
          { icon: ShieldCheck, title: "Specialist-Matched Care", desc: "The right doctor for your specific treatment need." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-black/5 bg-brand-50 p-6">
            <item.icon className="h-8 w-8 text-brand-600" />
            <p className="mt-4 font-display text-xl font-bold text-ink-900">{item.title}</p>
            <p className="mt-2 text-sm text-ink-800/60">{item.desc}</p>
          </div>
        ))}
      </MotionSection>
    </div>
  );
}
