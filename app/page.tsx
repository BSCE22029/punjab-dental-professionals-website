import Link from "next/link";
import { Star, ShieldCheck, Smile, Users } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import ServicesPin from "@/components/ServicesPin";
import TiltCard from "@/components/TiltCard";
import { services, testimonials } from "@/lib/site-config";

export default function HomePage() {
  const featured = services.flatMap((c) => c.items.filter((i) => i.tag === "popular")).slice(0, 4);

  return (
    <div>
      <Hero
        eyebrow="3 Dentists, One Trusted Practice"
        heading="Gentle Care. Lasting Smiles."
        secondaryLabel="Book Appointment"
        secondaryHref="/booking"
      />

      <Marquee
        items={["3 Specialist Dentists", "10,200+ Community", "Gentle Care", "Book Now"]}
        className="border-y border-black/5 bg-brand-50 text-brand-700"
      />

      {/* Value props */}
      <ScrollReveal className="container-page grid gap-6 py-20 sm:grid-cols-3">
        {[
          { icon: ShieldCheck, title: "3 Specialist Dentists", desc: "General, cosmetic/orthodontic, and surgical care under one roof." },
          { icon: Smile, title: "Gentle, Modern Care", desc: "Comfortable treatment for both children and adults." },
          { icon: Users, title: "10,200+ Community", desc: "One of Johar Town's most-followed dental practices." },
        ].map((item) => (
          <TiltCard key={item.title} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <item.icon className="h-8 w-8 text-brand-500" />
            <p className="mt-4 font-display text-lg font-semibold text-ink-900">{item.title}</p>
            <p className="mt-2 text-sm text-ink-800/60">{item.desc}</p>
          </TiltCard>
        ))}
      </ScrollReveal>

      <ServicesPin items={featured} />

      {/* Testimonial teaser */}
      <ScrollReveal className="container-page py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center gap-1 text-brand-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand-500" />
            ))}
          </div>
          <p className="mt-6 font-display text-2xl font-medium leading-tight text-ink-900 sm:text-4xl">
            &ldquo;{testimonials[0].quote}&rdquo;
          </p>
          <p className="mt-5 text-sm text-ink-800/60">
            — {testimonials[0].name}, {testimonials[0].location}
          </p>
          <p className="mt-1 text-xs text-ink-800/40">Sample testimonial for demo purposes</p>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-900 py-24 text-center text-white">
        <div className="container-page relative z-10">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-6xl">
            Ready for a Healthier Smile?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Book your appointment today and experience gentle, professional dental care.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-600 hover:bg-brand-50"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
