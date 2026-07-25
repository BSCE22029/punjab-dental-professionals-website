export default function CinematicBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Drifting gradient blobs — capped size to keep blur cost reasonable on large viewports */}
      <div
        className="absolute -left-1/4 -top-1/4 h-[min(70vw,520px)] w-[min(70vw,520px)] animate-float rounded-full bg-brand-500/30 blur-3xl"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute -right-1/4 top-1/3 h-[min(55vw,420px)] w-[min(55vw,420px)] animate-float rounded-full bg-brand-700/40 blur-3xl"
        style={{ animationDuration: "13s", animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[min(45vw,360px)] w-[min(45vw,360px)] animate-float rounded-full bg-amber-500/20 blur-2xl"
        style={{ animationDuration: "9s", animationDelay: "0.5s" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

      {/* Film grain */}
      <svg className="absolute inset-0 h-full w-full animate-grain opacity-[0.06]">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  );
}
