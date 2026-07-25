"use client";

import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex items-center gap-2 rounded-xl bg-white p-5 text-brand-700">
        <CheckCircle2 className="h-5 w-5" />
        <p className="text-sm font-medium">
          Thanks! Your appointment request has been received — we&apos;ll call you to confirm.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink-900">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="text-sm font-medium text-ink-900">
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label htmlFor="time" className="text-sm font-medium text-ink-900">
            Preferred Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            required
            className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
      </div>
      <div>
        <label htmlFor="reason" className="text-sm font-medium text-ink-900">
          Reason for Visit
        </label>
        <textarea
          id="reason"
          name="reason"
          rows={3}
          placeholder="e.g. Check-up, tooth pain, whitening consultation..."
          className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
      >
        <CalendarCheck className="h-4 w-4" />
        {status === "sending" ? "Submitting..." : "Request Appointment"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong — please call us directly instead.</p>
      )}
    </form>
  );
}
