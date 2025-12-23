"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Program");

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      
        <section className="md:grid md:grid-cols-2 gap-8 items-center">
          <div>
            <section>
              <p className="text-lg leading-relaxed text-[var(--foreground)]">
                With 9+ years at the crossroads of design and development, I
                create engaging digital experiences that blend creativity and
                function. From graphic design and motion graphics to web
                development, I’ve worked across entertainment, fashion, and
                tech—adapting to diverse creative needs. Proficient in Adobe
                Creative Suite and driven by evolving trends, I bring ideas to
                life through impactful visual storytelling.
                <span className="text-[var(--button)] ml-1">|</span>
              </p>
              <a
                className="inline-block mt-6 bg-[var(--button)] text-[var(--foreground)] px-4 py-2 rounded-md hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1m5Zy2mz5g-fkOUsSy4ZigErFfSVLciCl/view?usp=sharing"
              >
                Resume
              </a>
            </section>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/profile2.jpg"
              alt="Professional photo"
              width={420}
              height={220}
              className="rounded-sm object-cover"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 id="services" className="text-2xl font-semibold mb-4">
            {`{ SERVICES }`}
          </h2>

          <div className="flex items-center mb-6">
            <button
              className={`mr-2 px-4 py-2 rounded-md text-sm font-medium transition ${
                activeTab === "Program"
                  ? "bg-[var(--button)] text-[var(--foreground)]"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Program")}
            >
              Program
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                activeTab === "Design"
                  ? "bg-[var(--button)] text-[var(--foreground)]"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Design")}
            >
              Design
            </button>
          </div>

          <div
            id="Program"
            className={`${activeTab === "Program" ? "block" : "hidden"}`}
          >
            <div className="border-2 border-gray-300 shadow-md rounded-lg p-6">
              <div className="service-content">
                <Image
                  className="mb-3"
                  src="/images/code.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <h3 className="text-xl font-semibold mb-2">Program</h3>
                <p className="text-gray-700">
                  Creating dynamic and responsive websites using the latest web
                  technologies. I ensure that your website is not only visually
                  appealing but also functional and user-friendly.
                  <span className="text-blue-600 ml-1">|</span>
                </p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  <li className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Full-Stack Development (HTML, CSS, JavaScript)
                  </li>
                  <li className="bg-[var(--button)] px-3 py-1 rounded-full text-sm">
                    React & Next.js
                  </li>
                  <li className="bg-[var(--button)] px-3 py-1 rounded-full text-sm">
                    Node.js & Express
                  </li>
                  <li className=" dark:bg-[var(--button)] bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Database Management
                  </li>
                  <li className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    API Integration
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-4 items-center">
                  <Image src="/images/Html.svg" alt="" width={30} height={30} />
                  <Image src="/images/Css.svg" alt="" width={30} height={30} />
                  <Image src="/images/Js.svg" alt="" width={30} height={30} />
                  <Image src="/images/C.png" alt="" width={30} height={30} />
                  <Image src="/images/git.svg" alt="" width={30} height={30} />
                  <Image src="/images/node.svg" alt="" width={30} height={30} />
                  <Image src="/images/react.png" alt="" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>

          <div
            id="Design"
            className={`${activeTab === "Design" ? "block" : "hidden"}`}
          >
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="service-content">
                <Image
                  className="mb-3"
                  src="/images/design.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-gray-700">
                  Crafting visually stunning designs for various media, including
                  graphic design, video production, and motion graphics. I have a
                  strong foundation in the Adobe Creative Suite and have worked
                  with clients in the entertainment, fashion, and tech
                  industries.
                  <span className="text-[var(--button)] ml-1">|</span>
                </p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  <li className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    UI/UX Design
                  </li>
                  <li className="bg-[var(--button)] px-3 py-1 rounded-full text-sm">
                    Graphic Design
                  </li>
                  <li className="bg-[var(--button)] px-3 py-1 rounded-full text-sm">
                    Motion Graphics
                  </li>
                  <li className="bg-[var(--button)] px-3 py-1 rounded-full text-sm">
                    Video Production
                  </li>
                  <li className="bg-[var(--button)] px-3 py-1 rounded-full text-sm">
                    Adobe Creative Suite
                  </li>
                </ul>
                <div className="flex gap-3 mt-4 items-center">
                  <Image src="/images/Figma.svg" alt="" width={30} height={30} />
                  <Image src="/images/photoshop.png" alt="" width={30} height={30} />
                  <Image src="/images/illustrator.png" alt="" width={30} height={30} />
                  <Image src="/images/aftereffects.svg" alt="" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <ContactForm />
        </div>
      
    </main>
  );
}
