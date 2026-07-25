"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Parses strings like "86K+", "10+", "500+" into a numeric target + display suffix.
function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d.]+)(K)?(\+)?$/i);
  if (!match) return { num: 0, suffix: value };
  const [, numStr, k, plus] = match;
  const num = parseFloat(numStr) * (k ? 1000 : 1);
  const suffix = `${k ?? ""}${plus ?? ""}`;
  return { num, suffix };
}

export default function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { num, suffix } = parseValue(value);
    if (num === 0) {
      el.textContent = value;
      return;
    }
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.textContent = value;
      return;
    }

    const counter = { val: 0 };
    const isThousands = /K/i.test(value);
    const tween = gsap.to(counter, {
      val: num,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        const display = isThousands ? (counter.val / 1000).toFixed(counter.val < num ? 0 : 0) : Math.round(counter.val);
        el.textContent = `${display}${suffix}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [value]);

  return <p ref={ref} className={className}>{value}</p>;
}
