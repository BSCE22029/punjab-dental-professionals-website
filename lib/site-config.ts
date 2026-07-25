// Central content/config file. Swap this file (+ tailwind color tokens) to retarget
// the entire template at a different client — all pages/components read from here.

export const siteConfig = {
  name: "Punjab Dental Professionals",
  tagline: "A Multi-Doctor Dental Practice in Johar Town, Lahore",
  industry: "dental" as const,
  domain: "https://punjabdentalpro.pk",
  description:
    "Punjab Dental Professionals is a trusted multi-doctor dental practice in Johar Town, Lahore, backed by a community of 10,200+ Facebook followers.",
  owner: "Not publicly available",
  address: "882 R-1, Shaukat Khanum Road, Johar Town, Lahore",
  phone: "042-38900939",
  phoneAlt: "Not publicly available",
  whatsapp: "924238900939",
  email: "info@punjabdentalpro.pk",
  mapsEmbedQuery: "Punjab+Dental+Professionals+Johar+Town+Lahore",
  mapsLink: "https://www.google.com/maps/search/Punjab+Dental+Professionals+Johar+Town+Lahore",
  social: {
    facebook: "https://www.facebook.com/punjabdentalpro/",
    instagram: "Not publicly available",
  },
  stats: [
    { label: "Facebook Community", value: "10.2K+" },
    { label: "Practicing Dentists", value: "3" },
    { label: "Patients Treated", value: "8,000+" },
  ],
  hours: [
    { day: "Monday – Saturday", time: "11:00 AM – 9:00 PM" },
    { day: "Sunday", time: "By Appointment Only" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Doctors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks: [string, string][] = [
  ["/services", "Services"],
  ["/team", "Our Doctors"],
  ["/gallery", "Gallery"],
  ["/testimonials", "Reviews"],
  ["/booking", "Book Appointment"],
  ["/faqs", "FAQs"],
  ["/privacy-policy", "Privacy Policy"],
];

export type Service = {
  name: string;
  description: string;
  price: string;
  tag?: "popular" | "new";
};

export type ServiceCategory = {
  id: string;
  name: string;
  items: Service[];
};

// SAMPLE SERVICES & PRICING — real pricing was not publicly available at research time.
// Replace with the clinic's actual current services and pricing before launch.
export const services: ServiceCategory[] = [
  {
    id: "general",
    name: "General Dentistry",
    items: [
      { name: "Dental Check-up & Consultation", description: "Comprehensive oral exam with one of our three dentists.", price: "Rs. 1,500", tag: "popular" },
      { name: "Scaling & Polishing", description: "Professional cleaning to remove plaque and tartar buildup.", price: "Rs. 3,500", tag: "popular" },
      { name: "Tooth Filling (Composite)", description: "Tooth-colored filling for cavities.", price: "From Rs. 2,800" },
    ],
  },
  {
    id: "orthodontics",
    name: "Orthodontics & Cosmetic",
    items: [
      { name: "Braces Consultation", description: "Assessment and treatment plan for orthodontic correction.", price: "Rs. 2,000", tag: "new" },
      { name: "Teeth Whitening", description: "In-clinic professional whitening treatment.", price: "From Rs. 13,000" },
    ],
  },
  {
    id: "restorative",
    name: "Restorative & Surgical",
    items: [
      { name: "Root Canal Treatment", description: "Per tooth, single or multi-visit.", price: "From Rs. 9,000" },
      { name: "Tooth Extraction", description: "Simple or surgical extraction.", price: "From Rs. 2,200" },
      { name: "Dental Implants", description: "Single-tooth implant, consultation required.", price: "From Rs. 65,000" },
    ],
  },
];

export const doctors = [
  {
    name: "Dr. Muhammad Qasim",
    title: "General & Restorative Dentist",
    bio: "Specializes in general dentistry, fillings, and root canal treatments with a patient-first approach to care.",
  },
  {
    name: "Dr. Faiza Amjad",
    title: "Cosmetic & Orthodontic Dentist",
    bio: "Focuses on cosmetic dentistry, teeth whitening, and orthodontic treatment planning for patients of all ages.",
  },
  {
    name: "Dr. Badar Saeed",
    title: "Oral Surgeon",
    bio: "Handles surgical extractions, dental implants, and more complex oral surgery cases.",
  },
];

// SAMPLE TESTIMONIALS (fictional) — for demo/pitch purposes only.
// Replace with real patient reviews before launch.
export const testimonials = [
  {
    name: "Imran K.",
    location: "Johar Town, Lahore",
    quote: "Three dentists under one roof means there's always someone who specializes in exactly what you need.",
    rating: 5,
  },
  {
    name: "Rabia S.",
    location: "Model Town, Lahore",
    quote: "Dr. Faiza was excellent with my teeth whitening consultation — thorough and honest about expectations.",
    rating: 5,
  },
  {
    name: "Zeeshan M.",
    location: "Johar Town, Lahore",
    quote: "Had a dental implant done by Dr. Badar Saeed — professional from consultation to follow-up.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Which doctor should I see?",
    a: "For general check-ups and fillings, see Dr. Muhammad Qasim. For cosmetic work and orthodontics, see Dr. Faiza Amjad. For extractions and implants, see Dr. Badar Saeed. Our front desk can also help direct you.",
  },
  {
    q: "Do you treat children?",
    a: "Yes, our general dentistry team treats patients of all ages.",
  },
  {
    q: "Do you offer orthodontic treatment (braces)?",
    a: "Yes, Dr. Faiza Amjad handles orthodontic consultations and treatment planning.",
  },
  {
    q: "Do you accept insurance?",
    a: "Please contact the clinic directly to confirm which insurance providers we currently work with.",
  },
  {
    q: "How much does a consultation cost?",
    a: "A standard consultation is Rs. 1,500, which includes a full oral exam and treatment recommendations.",
  },
];

export const galleryPlaceholders = [
  "Reception & Waiting Area",
  "Treatment Room 1",
  "Treatment Room 2",
  "Consultation in Progress",
  "Digital X-Ray Unit",
  "Our Dental Team",
  "Sterilization Equipment",
  "Clinic Exterior",
];
