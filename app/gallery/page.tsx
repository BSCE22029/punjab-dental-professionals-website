import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { galleryPlaceholders, siteConfig } from "@/lib/site-config";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look inside ${siteConfig.name} — our food, our space, our people.`,
};

export default function GalleryPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Gallery</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">Inside {siteConfig.name}</h1>
        <p className="mt-4 max-w-lg text-ink-800/70">
          Placeholder gallery grid — to be replaced with real photography from {siteConfig.name} before launch.
        </p>
      </MotionSection>

      <MotionSection delay={0.1} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {galleryPlaceholders.map((caption, i) => (
          <div
            key={caption}
            className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 to-brand-300"
          >
            <ImageIcon className="h-10 w-10 text-brand-600/50 transition-transform group-hover:scale-110" />
            <span className="absolute bottom-2 left-2 right-2 truncate rounded-md bg-black/40 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              {caption}
            </span>
          </div>
        ))}
      </MotionSection>
    </div>
  );
}
