"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
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
          <a
            href="https://github.com/wanchanlin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[30px] h-[30px] mr-4"
              src="/images/github.svg"
              alt="contact"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/wanchanlin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[30px] h-[30px] mr-4"
              src="/images/linkedin.svg"
              alt="contact"
            />
          </a>
          <Link href="https://drive.google.com/file/d/1WMRM53EZVsGQciQ1KZ6U-PWWpXPaP5XD/view?usp=sharing">
                   
          

          <button className="border-2 border-[var(--retro-primary)] px-6 py-2 rounded-pixel-lg hover:bg-[var(--retro-primary)] hover:text-[var(--retro-bg)] transition-all font-bold">
              [ DOWNLOAD_RESUME ]
            </button>
            </Link>
        </div>
      </div>
      
        <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-4 mx-auto max-md:w-full ">
          <div>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-[95%] p-2 border border-[var(--foreground)] rounded-md"
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
              className="w-[95%] p-2 border border-[var(--foreground)] rounded-md"
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
              className="w-[95%] p-2 border border-[var(--foreground)] rounded-md"
              required
            />
          </div>
          <button className="text-base inline-block no-underline py-2 px-4 bg-[var(--button)] text-[var(--foreground)] rounded cursor-pointer transition-colors duration-300 border-0 hover:bg-[var(--button)]" type="submit">
            Send Message
          </button>
        </form>
      
    </div>
    </section>
  );
}
