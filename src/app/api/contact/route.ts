import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, message } = data || {}

    if (!email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // create transporter — configure via environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `${name || 'Website Contact'} <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || 'ohanalin@gmail.com',
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
