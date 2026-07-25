import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
      className={`inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${className}`}
    >
      <Phone className="h-4 w-4" />
      Call Now
    </a>
  );
}
