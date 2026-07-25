"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import CinematicBackdrop from "./CinematicBackdrop";
import KineticHeading from "./KineticHeading";
import Counter from "./Counter";
import CallButton from "./CallButton";
import { siteConfig } from "@/lib/site-config";

export default function Hero({
  eyebrow,
  heading,
  secondaryLabel = "View the Menu",
  secondaryHref = "/menu",
}: {
  eyebrow: string;
  heading: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = [eyebrowRef.current, subRef.current, ctaRef.current, statsRef.current].filter(Boolean);
    if (prefersReduced) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }
    gsap.fromTo(
      targets,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink-900 text-white">
      <CinematicBackdrop />

      <div className="container-page relative z-10 py-28">
        <span
          ref={eyebrowRef}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300 backdrop-blur"
        >
          {eyebrow}
        </span>

        <KineticHeading
          text={heading}
          as="h1"
          delay={0.15}
          className="mt-6 font-display text-[13vw] font-extrabold uppercase leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[7vw]"
        />

        <p ref={subRef} className="mt-8 max-w-xl text-lg text-white/60 sm:text-xl">
          {siteConfig.description}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-5">
          <CallButton className="px-7 py-3.5 text-base" />
          <a href={secondaryHref} data-cursor-grow className="group inline-flex items-center gap-2 text-base font-semibold text-white">
            {secondaryLabel}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div ref={statsRef} className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:max-w-lg">
          {siteConfig.stats.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} className="font-display text-3xl font-bold text-brand-400 sm:text-4xl" />
              <p className="mt-1 text-xs text-white/50 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
