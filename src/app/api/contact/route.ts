import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API Key (Add this to your .env.local)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, subject_line } = await req.json();

    // 1. Simple Honeypot Check
    if (subject_line) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    // 2. Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 3. Send the Email
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Use a verified domain in production
      to: 'ohanalin@gmail.com',
      reply_to: email,
      subject: `New Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}