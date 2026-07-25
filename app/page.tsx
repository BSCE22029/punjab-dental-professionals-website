import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Smile, Users } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import CallButton from "@/components/CallButton";
import { siteConfig, services, testimonials } from "@/lib/site-config";

export default function HomePage() {
  const featured = services[0].items.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
              <ShieldCheck className="h-3.5 w-3.5" /> 3 Dentists, One Trusted Practice
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-ink-800/70">{siteConfig.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Book Appointment
              </Link>
              <CallButton className="px-6 py-3 text-base" />
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-black/5 pt-8">
              {siteConfig.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-brand-600 sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs text-ink-800/60 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 opacity-90 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full border-8 border-white bg-gradient-to-br from-brand-500 to-brand-700 text-center shadow-2xl">
              <div className="px-8 text-white">
                <p className="font-display text-2xl font-bold">Gentle Care.</p>
                <p className="font-display text-2xl font-bold">Lasting Smiles.</p>
                <p className="mt-3 text-sm text-white/80">[Clinic photography goes here]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <MotionSection className="container-page grid gap-6 py-16 sm:grid-cols-3">
        {[
          { icon: ShieldCheck, title: "3 Specialist Dentists", desc: "General, cosmetic/orthodontic, and surgical care under one roof." },
          { icon: Smile, title: "Gentle, Modern Care", desc: "Comfortable treatment for both children and adults." },
          { icon: Users, title: "10,200+ Community", desc: "One of Johar Town's most-followed dental practices." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <item.icon className="h-8 w-8 text-brand-500" />
            <p className="mt-4 font-display text-lg font-semibold text-ink-900">{item.title}</p>
            <p className="mt-2 text-sm text-ink-800/60">{item.desc}</p>
          </div>
        ))}
      </MotionSection>

      {/* Featured services */}
      <MotionSection className="bg-ink-900 py-20 text-white">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">Popular Treatments</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">General Dentistry</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300">
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {featured.map((item) => (
              <div key={item.name} className="rounded-2xl bg-white/5 p-6">
                <p className="font-display text-lg font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-white/60">{item.description}</p>
                <p className="mt-3 font-display text-brand-400">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Testimonial teaser */}
      <MotionSection className="container-page py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-black/5 bg-brand-50 p-10 text-center">
          <div className="flex justify-center gap-1 text-brand-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand-500" />
            ))}
          </div>
          <p className="mt-5 font-display text-xl font-medium text-ink-900 sm:text-2xl">
            &ldquo;{testimonials[0].quote}&rdquo;
          </p>
          <p className="mt-4 text-sm text-ink-800/60">
            — {testimonials[0].name}, {testimonials[0].location}
          </p>
          <p className="mt-1 text-xs text-ink-800/40">Sample testimonial for demo purposes</p>
        </div>
      </MotionSection>

      {/* CTA */}
      <MotionSection className="bg-brand-600 py-16 text-center text-white">
        <div className="container-page">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready for a Healthier Smile?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">
            Book your appointment today and experience gentle, professional dental care.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-600 hover:bg-brand-50"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
