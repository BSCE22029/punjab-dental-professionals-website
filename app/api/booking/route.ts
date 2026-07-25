import { NextResponse } from "next/server";

// STUB endpoint — wire this to a real email service and/or calendar/booking
// system before launch. Currently validates input and returns success without
// actually sending or scheduling anything.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.phone || !body?.date || !body?.time) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: send email / push to calendar or practice-management system here.
  console.log("New appointment request:", body);

  return NextResponse.json({ ok: true });
}
