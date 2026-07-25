import Link from "next/link";
import { Pizza } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Pizza className="h-16 w-16 text-brand-400" />
      <h1 className="mt-6 font-display text-4xl font-bold text-ink-900">404 — Page Not Found</h1>
      <p className="mt-3 max-w-md text-ink-800/60">
        Looks like this page got lost on the way to the kitchen. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
