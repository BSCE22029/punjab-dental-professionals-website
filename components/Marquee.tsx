export default function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const track = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-8 py-4">
        {[...track, ...track].map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-2xl font-bold uppercase tracking-tight sm:text-4xl">
            {item}
            <span className="text-brand-500">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
