import { siteConfig } from "./site-config";

export function dentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.domain}/og-image.jpg`,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    priceRange: "Rs. 1,500 - Rs. 60,000",
    sameAs: ([siteConfig.social.facebook] as string[]).filter((s) => s !== "Not publicly available"),
  };
}
