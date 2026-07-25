import { NextResponse } from "next/server";

// STUB endpoint — wire this to a real email service (Resend, SendGrid, etc.)
// before launch. Currently validates input and returns success without
// actually sending anything.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.phone || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: send email / push to CRM here.
  console.log("New contact form submission:", body);

  return NextResponse.json({ ok: true });
}
