"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

export default function TiltCard({
  children,
  className = "",
  wrapperClassName = "",
  max = 10,
}: {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) return;

    const rotateX = gsap.quickTo(el, "rotateX", { duration: 0.5, ease: "power3.out" });
    const rotateY = gsap.quickTo(el, "rotateY", { duration: 0.5, ease: "power3.out" });
    const scale = gsap.quickTo(el, "scale", { duration: 0.4, ease: "power3.out" });
    const translateY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateX(-py * max);
      rotateY(px * max);
    };
    const onEnter = () => {
      scale(1.03);
      translateY(-4);
    };
    const onLeave = () => {
      rotateX(0);
      rotateY(0);
      scale(1);
      translateY(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return (
    <div style={{ perspective: 800 }} className={wrapperClassName}>
      <div ref={ref} className={`h-full will-change-transform [transform-style:preserve-3d] ${className}`}>
        {children}
      </div>
    </div>
  );
}
