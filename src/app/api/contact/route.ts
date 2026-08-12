import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Server-side only -- reads from an environment variable, never exposed
// to the browser. Set RESEND_API_KEY in Vercel project settings.
// Built lazily (not at module load) so a missing key locally doesn't
// break `next build` -- it only matters once a request comes in.
function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

// Where submissions get emailed. Set OWNER_EMAIL in Vercel project
// settings too -- keeping it as an env var (not hardcoded) means you
// can change the inbox without touching code.
const OWNER_EMAIL = process.env.OWNER_EMAIL || "info@limatcare.ca";

// Resend requires the "from" address to be on a domain you've verified
// with them (Resend dashboard -> Domains). Until you verify limatcare.ca,
// use their shared testing address below.
const FROM_ADDRESS = "Limat Care Website <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email is not configured yet." },
        { status: 500 }
      );
    }

    const resend = getResendClient();
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message." },
      { status: 500 }
    );
  }
}
