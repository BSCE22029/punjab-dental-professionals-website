"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function KineticHeading({
  text,
  as: Tag = "h1",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const spans = el.querySelectorAll("[data-word]");
    if (prefersReduced) {
      gsap.set(spans, { y: "0%" });
      return;
    }
    gsap.fromTo(
      spans,
      { y: "110%" },
      { y: "0%", duration: 0.9, stagger: 0.06, ease: "power4.out", delay }
    );
  }, [delay]);

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.28em] inline-block overflow-hidden align-top last:mr-0">
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
