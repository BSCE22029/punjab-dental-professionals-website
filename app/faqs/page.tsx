import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { faqs, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQs",
  description: `Answers to common questions about ordering from ${siteConfig.name}.`,
};

export default function FAQsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="container-page py-16 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">FAQs</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">Frequently Asked Questions</h1>
      </MotionSection>

      <MotionSection delay={0.1} className="mt-12 space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-xl border border-black/5 p-5 open:shadow-sm">
            <summary className="cursor-pointer list-none font-display font-semibold text-ink-900">
              {f.q}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-800/70">{f.a}</p>
          </details>
        ))}
      </MotionSection>
    </div>
  );
}
