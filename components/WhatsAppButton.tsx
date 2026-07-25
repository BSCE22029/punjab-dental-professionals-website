"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppButton() {
  const message = encodeURIComponent(`Hi ${siteConfig.name}! I'd like to book a dental appointment.`);
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
