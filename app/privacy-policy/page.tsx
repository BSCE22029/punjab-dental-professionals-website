import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for the ${siteConfig.name} website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page max-w-3xl py-16 sm:py-24">
      <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink-800/50">Last updated: {new Date().toLocaleDateString("en-GB")}</p>

      <div className="prose prose-neutral mt-8 max-w-none text-ink-800/80">
        <p>
          This Privacy Policy explains how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and
          protects information you provide when you use this website.
        </p>
        <h2 className="mt-6 font-display text-xl font-semibold text-ink-900">Information We Collect</h2>
        <p>
          When you submit our contact form, we collect your name, phone number, and message content so we can
          respond to your inquiry. We do not collect payment information through this website.
        </p>
        <h2 className="mt-6 font-display text-xl font-semibold text-ink-900">How We Use Information</h2>
        <p>
          Information submitted is used solely to respond to your inquiry or order request. We do not sell or share
          your information with third parties for marketing purposes.
        </p>
        <h2 className="mt-6 font-display text-xl font-semibold text-ink-900">Contact Us</h2>
        <p>
          If you have questions about this policy, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-600">
            {siteConfig.email}
          </a>{" "}
          or {siteConfig.phone}.
        </p>
        <p className="mt-6 text-sm text-ink-800/50">
          This is a template privacy policy for demonstration purposes. Have it reviewed by a qualified professional
          before publishing live.
        </p>
      </div>
    </div>
  );
}
