"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        // server error -> fallback to mailto
        if (res.status >= 500 || (data?.error && /connect|refuse|failed|send/i.test(data.error))) {
          const subject = encodeURIComponent("Contact form submission");
          const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          );
          window.location.href = `mailto:ohanalin@gmail.com?subject=${subject}&body=${body}`;
          setStatus({ ok: true, msg: "Server error — opened mail client to send message." });
          setFormData({ name: "", email: "", message: "" });
          return;
        }
        throw new Error(data?.error || 'Submission failed');
      }

      setStatus({ ok: true, msg: 'Message sent — thank you!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      const message = err?.message || '';
      if (/ECONNREFUSED|ENOTFOUND|Failed to send|connect/i.test(message)) {
        const subject = encodeURIComponent("Contact form submission");
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:ohanalin@gmail.com?subject=${subject}&body=${body}`;
        setStatus({ ok: true, msg: "Could not reach mail server — opened mail client." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ ok: false, msg: message || 'Submission error' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="flex gap-8 items-start max-md:flex-col max-md:items-center">
        <div className="flex-1 ">
          <p>Follow me</p>
          <p>
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>
          <div className="mt-4 flex items-center justify-left">
            <Link
              href="https://github.com/wanchanlin"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className='text-4xl mr-4'/>
            </Link>
            <Link
              href="https://www.linkedin.com/in/wanchanlin/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className='text-4xl mr-4'/>
            </Link>

            <Link href="https://drive.google.com/file/d/1WMRM53EZVsGQciQ1KZ6U-PWWpXPaP5XD/view?usp=sharing">
              <button className="border-2 border-[var(--retro-primary)] px-6 py-2 rounded-pixel-lg hover:bg-[var(--retro-primary)] hover:text-[var(--retro-bg)] transition-all font-bold">
                [ DOWNLOAD_RESUME ]
              </button>
            </Link>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col gap-6  ">
          <div>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border-2 border-[var(--retro-primary)] rounded-pixel-lg focus:outline-none focus:bg-[var(--retro-primary)]/10 transition-all"
              required
            />
          </div>
          <div>
            <label> Email </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border-2 border-[var(--retro-primary)] rounded-pixel-lg focus:outline-none focus:bg-[var(--retro-primary)]/10 transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 bg-transparent border-2 border-[var(--retro-primary)] rounded-pixel-lg focus:outline-none focus:bg-[var(--retro-primary)]/10 transition-all"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              className="w-fit gap-2 flex items-center border-2 border-[var(--retro-primary)] px-6 py-2 rounded-pixel-lg hover:bg-[var(--retro-primary)] hover:text-[var(--retro-bg)] transition-all font-bold disabled:opacity-50"
              type="submit"
              disabled={submitting}
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
            {status && (
              <span className={`${status.ok ? 'text-green-400' : 'text-red-400'}`}>
                {status.msg}
              </span>
            )}
          </div>
        </form>
      
      </div>
    </section>
  );
}
