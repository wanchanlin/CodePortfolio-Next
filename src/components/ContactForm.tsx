"use client";

import React, { useState } from "react";
import Image from "next/image";

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
    <div className="contact-social-wrapper">
      <div>
        <p>Follow me</p>
        <p>
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help.
        </p>
        <div>
          <a
            href="https://github.com/wanchanlin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
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
              className="social-icon"
              src="/images/linkedin.svg"
              alt="contact"
            />
          </a>
        </div>
      </div>
      
        <form onSubmit={handleSubmit} className="contact-form-container">
          <div>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              required
            />
          </div>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      
    </div>
  );
}
