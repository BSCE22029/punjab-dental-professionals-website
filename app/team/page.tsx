import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { doctors, siteConfig } from "@/lib/site-config";
import { Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Doctors",
  description: `Meet the dental team at ${siteConfig.name}.`,
};

export default function TeamPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Our Team</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">Meet Your Dentist</h1>
      </MotionSection>

      <MotionSection delay={0.1} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc) => (
          <div key={doc.name} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex h-40 items-center justify-center rounded-xl bg-brand-50">
              <Stethoscope className="h-12 w-12 text-brand-400" />
            </div>
            <p className="mt-4 font-display text-lg font-bold text-ink-900">{doc.name}</p>
            <p className="text-sm font-medium text-brand-600">{doc.title}</p>
            <p className="mt-2 text-sm text-ink-800/60">{doc.bio}</p>
          </div>
        ))}
      </MotionSection>
    </div>
  );
}
