import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Book a dental appointment at ${siteConfig.name}.`,
};

export default function BookingPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Appointment</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">Book Your Visit</h1>
        <p className="mt-4 max-w-lg text-ink-800/70">
          Request an appointment below, or call us directly at{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand-600">
            {siteConfig.phone}
          </a>{" "}
          for faster confirmation.
        </p>
      </MotionSection>

      <MotionSection delay={0.1} className="mt-10 max-w-xl rounded-2xl border border-black/5 bg-brand-50 p-8">
        <BookingForm />
      </MotionSection>

      <MotionSection delay={0.15} className="mt-8 flex items-center gap-2 text-sm text-ink-800/60">
        <Phone className="h-4 w-4 text-brand-500" />
        Prefer to talk? Call {siteConfig.phone} during clinic hours.
      </MotionSection>
    </div>
  );
}
