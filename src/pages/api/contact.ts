import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const TO = import.meta.env.CONTACT_TO_EMAIL || "info@frontrunner.io";
const FROM =
  import.meta.env.CONTACT_FROM_EMAIL ||
  "Kontaktformular <kontakt@send.frontrunner.io>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const redirect = (origin: string, status: "success" | "invalid" | "error") =>
  new Response(null, {
    status: 303,
    headers: { Location: `${origin}/contact?status=${status}#form` },
  });

export const POST: APIRoute = async ({ request }) => {
  const origin = new URL(request.url).origin;

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(origin, "invalid");
  }

  // Honeypot — bots fill every visible-looking field; humans never see it.
  if ((form.get("company") ?? "").toString().trim() !== "") {
    return redirect(origin, "success");
  }

  const name = (form.get("name") ?? "").toString().trim();
  const email = (form.get("email") ?? "").toString().trim();
  const message = (form.get("message") ?? "").toString().trim();
  const disclaimer = form.get("disclaimer");

  if (!name || !email || !message || !disclaimer) {
    return redirect(origin, "invalid");
  }
  if (!EMAIL_RE.test(email) || message.length > MAX_MESSAGE_LENGTH) {
    return redirect(origin, "invalid");
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[api/contact] RESEND_API_KEY is not set");
    return redirect(origin, "error");
  }

  const resend = new Resend(apiKey);
  const subject = `Neue Kontaktanfrage von ${name}`;
  const text = `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}\n`;
  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Nachricht:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `.trim();

  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[api/contact] Resend error", error);
    return redirect(origin, "error");
  }

  return redirect(origin, "success");
};
