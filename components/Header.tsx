"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { siteConfig, nav } from "@/lib/site-config";
import CallButton from "./CallButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        transparent ? "bg-transparent" : "border-b border-black/5 bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className={`font-display text-xl font-bold tracking-tight ${transparent ? "text-white" : "text-ink-900"}`}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                transparent ? "text-white/80" : "text-ink-800/80 hover:text-brand-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm font-medium hover:text-brand-500 ${
              transparent ? "text-white/70" : "text-ink-800/70 hover:text-brand-600"
            }`}
          >
            <MapPin className="h-4 w-4" /> Directions
          </a>
          <CallButton />
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`rounded-md p-2 lg:hidden ${transparent ? "text-white" : "text-ink-900"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-ink-800 hover:bg-brand-50"
              >
                {item.label}
              </Link>
            ))}
            <CallButton className="mt-2 w-fit" />
          </nav>
        </div>
      )}
    </header>
  );
}
