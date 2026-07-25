import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { siteConfig } from "@/lib/site-config";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} — address, phone, and hours.`,
};

export default function ContactPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Contact</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">Get In Touch</h1>
      </MotionSection>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <MotionSection>
          <div className="space-y-5">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-brand-500" />
              <div>
                <p className="font-semibold text-ink-900">Address</p>
                <p className="text-sm text-ink-800/70">{siteConfig.address}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand-500" />
              <div>
                <p className="font-semibold text-ink-900">Phone</p>
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-ink-800/70 hover:text-brand-600">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-500" />
              <div>
                <p className="font-semibold text-ink-900">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink-800/70 hover:text-brand-600">
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 text-brand-500" />
              <div>
                <p className="font-semibold text-ink-900">Hours</p>
                {siteConfig.hours.map((h) => (
                  <p key={h.day} className="text-sm text-ink-800/70">
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-black/5">
            <iframe
              title="Location map"
              className="h-full w-full"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${siteConfig.mapsEmbedQuery}&output=embed`}
            />
          </div>
        </MotionSection>

        <MotionSection delay={0.1} className="rounded-2xl border border-black/5 bg-brand-50 p-8">
          <p className="font-display text-xl font-bold text-ink-900">Send Us a Message</p>
          <p className="mt-1 text-sm text-ink-800/60">We&apos;ll get back to you as soon as possible.</p>
          <ContactForm />
        </MotionSection>
      </div>
    </div>
  );
}
