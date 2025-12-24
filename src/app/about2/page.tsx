"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Program");

  return (
    <main className="min-h-screen bg-[var(--retro-bg)] text-[var(--retro-primary)] font-mono transition-colors duration-500">
      {/* Scanline Overlay - Visible mostly in dark mode */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />

      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        
        {/* Header/Bio Section */}
        <section className="md:grid md:grid-cols-2 gap-12 items-center">
          <div className="border-4 border-[var(--retro-primary)] p-6 rounded-pixel-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,255,65,0.2)]">
            <h1 className="text-xs uppercase tracking-widest mb-4 opacity-70 underline decoration-dotted">
              System.Status: Online
            </h1>
            <p className="text-xl leading-relaxed font-bold">
              {"> "}I blend <span className="italic underline">design</span> and <span className="italic underline">code</span> to build the future of the web. 9+ years of terminal experience.
            </p>
            
            <button className="mt-8 border-2 border-[var(--retro-primary)] px-6 py-2 rounded-pixel-lg hover:bg-[var(--retro-primary)] hover:text-[var(--retro-bg)] transition-all font-bold">
              [ DOWNLOAD_RESUME ]
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative p-2 bg-[var(--retro-primary)] rounded-pixel-lg group">
              <Image
                src="/images/profilelight.jpg"
                alt="Profile"
                width={350}
                height={350}
                className="rounded-pixel-lg contrast-125 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Dynamic Pattern Divider */}
        <div className="mt-16 w-full h-8 bg-repeat-x bg-[length:1.5em] pattern-dot-three opacity-50 hue-rotate-[90deg] dark:hue-rotate-[140deg]" />

        {/* Tabbed Services Section */}
        <section className="mt-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl font-black italic">{`{ SERVICES }`}</h2>
            <div className="flex-grow border-b-2 border-dashed border-[var(--retro-primary)] opacity-30" />
          </div>

          <div className="flex gap-2 mb-6">
            {["Program", "Design"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-xs font-bold uppercase border-2 rounded-pixel-lg transition-all ${
                  activeTab === tab
                    ? "bg-[var(--retro-primary)] text-[var(--retro-bg)]"
                    : "border-[var(--retro-primary)] opacity-60 hover:opacity-100"
                }`}
              >
                {tab}.sh
              </button>
            ))}
          </div>

          {/* Service Card with Square Pattern */}
          <div className="relative pattern-square-light bg-size-[2em] p-1 rounded-pixel-lg border-2 border-[var(--retro-primary)]">
            <div className="bg-[var(--retro-bg)] p-8 rounded-pixel-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="inline-block w-4 h-4 bg-[var(--retro-primary)] animate-pulse" />
                Executing_{activeTab}...
              </h3>
              <p className="max-w-2xl text-lg opacity-90 leading-relaxed">
                {activeTab === "Program" 
                  ? "Developing high-performance architectures using React and Next.js protocols. Optimization level: Max." 
                  : "Interface composition and visual identity systems. Pixel-perfect rendering across all viewports."}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Connection */}
        <section className="mt-20">
          <div className="p-8 border-2 border-[var(--retro-primary)] border-dashed rounded-pixel-lg">
            <h3 className="text-center text-sm tracking-[0.5em] uppercase mb-8">Establish_Remote_Link</h3>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}