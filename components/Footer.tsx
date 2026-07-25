import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-ink-900 text-white/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">{siteConfig.description}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-2 hover:bg-brand-500"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2 hover:bg-brand-500"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerLinks.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-brand-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Contact</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand-400" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-400" />
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Hours</p>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="flex gap-2">
                <Clock className="h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {h.day}: {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
