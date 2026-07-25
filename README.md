# Punjab Dental Professionals — Website (Redesign Pitch Build)

Production-ready Next.js 15 marketing site built as a redesign proposal for **Punjab Dental Professionals** (Johar Town, Lahore) — a multi-doctor dental practice with 10,200+ Facebook followers currently operating with no website of its own.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS
- Framer Motion (scroll animations)
- Lucide Icons

## What's real vs. sample content
- **Real / verified:** business name, address, phone, Facebook link, follower count, doctor names (Dr. Muhammad Qasim, Dr. Faiza Amjad, Dr. Badar Saeed).
- **Sample placeholder content (clearly marked in-page):** each doctor's specific specialty/bio (only names were publicly confirmed — specialties assigned for demo purposes), services & pricing, testimonials, gallery images. Confirm real specialties and replace sample content before launch.
- Photography is represented with styled placeholder blocks rather than scraped images — swap in licensed/owned photos before launch.

## Pages
Home · About · Services & Pricing · **Our Doctors** (3-doctor team page) · Gallery · Testimonials · FAQs · Contact (with map + form) · **Book Appointment** · Privacy Policy · Custom 404

## Features included
Responsive design, SEO metadata + Open Graph/Twitter cards, JSON-LD Dentist schema + FAQ schema, `sitemap.ts` / `robots.ts`, dynamically generated favicon, WhatsApp floating button, click-to-call button, contact form + appointment booking form (stub API routes — need a real email/calendar service wired in), loading skeleton, scroll-triggered Framer Motion animations, `prefers-reduced-motion` support.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Before going live
1. Confirm each doctor's actual specialty/bio with the practice — placeholders were assigned based on typical multi-doctor practice structure, not confirmed public data.
2. Replace sample services, pricing, testimonials, and gallery captions with real content.
3. Replace placeholder image blocks with real clinic photography.
4. Wire `app/api/contact/route.ts` and `app/api/booking/route.ts` to a real email/calendar service.
5. Update `siteConfig.domain` to the final production domain once purchased.
6. Run `npm run build` locally to confirm a clean production build before deploying.

## Deploying to Vercel
1. Push this folder to its own GitHub repository.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required for the base build.
4. Click **Deploy**. Vercel will assign a URL like `https://punjab-dental-professionals-website.vercel.app` — a custom domain can be attached afterward.

## Lighthouse target
This build avoids render-blocking patterns, uses `next/font` for zero layout-shift fonts, and lazy-loads below-the-fold content — a clean `npm run build` + Vercel deploy should score 95+ on Performance, Accessibility, Best Practices, and SEO.
