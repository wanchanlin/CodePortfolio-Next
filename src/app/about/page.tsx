"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Program");

  return (
    <main>
      <div className="project-container">
        <section className="grid-container">
          <div>
            <section>
              <p>
              With 9+ years at the crossroads of design and development, I create engaging digital experiences that blend creativity and function. From graphic design and motion graphics to web development, I’ve worked across entertainment, fashion, and tech—adapting to diverse creative needs. Proficient in Adobe Creative Suite and driven by evolving trends, I bring ideas to life through impactful visual storytelling.
                <span className="typing-cursor">|</span>
              </p>
              <a
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1m5Zy2mz5g-fkOUsSy4ZigErFfSVLciCl/view?usp=sharing"
              >
                Resume
              </a>
            </section>
          </div>
          <div>
            <img
              src="/images/profile.jpg"
              alt="Professional photo"
              className="profile-image"
            />
          </div>
        </section>

        <section>
          <h2 id="services">{`{ SERVICES }`}</h2>
          <div className="tabs">
            <button
              className="tablinks"
              onClick={() => setActiveTab("Program")}
            >
              Program
            </button>
            <button className="tablinks" onClick={() => setActiveTab("Design")}>
              Design
            </button>
          </div>

          <div
            id="Program"
            className={`tabcontent${activeTab === "Program" ? " active" : ""}`}
          >
            <div className="card">
              <div className="service-content">
                <Image
                  className="icon"
                  src="/images/code.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <h3>Program</h3>
                <p>
                  Creating dynamic and responsive websites using the latest web
                  technologies. I ensure that your website is not only visually
                  appealing but also functional and user-friendly.
                  <span className="typing-cursor">|</span>
                </p>
                <ul className="pill-list">
                  <li className="pill">Full-Stack Development (HTML, CSS, JavaScript)</li>
                  <li className="pill">React & Next.js</li>
                  <li className="pill">Node.js & Express</li>
                  <li className="pill">Database Management</li>
                  <li className="pill">API Integration</li>
                </ul>
                <div className="iconcontainer">
                  <img
                    className="icon"
                    src="/images/Html.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className="icon"
                    src="/images/Css.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className="icon"
                    src="/images/Js.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className="icon"
                    src="/images/C.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className="icon"
                    src="/images/git.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className="icon"
                    src="/images/node.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className="icon"
                    src="/images/react.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="Design"
            className={`tabcontent${activeTab === "Design" ? " active" : ""}`}
          >
            <div className="card">
              <div className="service-content">
                <Image
                  className="icon"
                  src="/images/design.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <h3>Design</h3>
                <p>
                  Crafting visually stunning designs for various media,
                  including graphic design, video production, and motion
                  graphics. I have a strong foundation in the Adobe Creative
                  Suite and have worked with clients in the entertainment,
                  fashion, and tech industries.
                  <span className="typing-cursor">|</span>
                </p>
                <ul className="pill-list">
                  <li className="pill">UI/UX Design</li>
                  <li className="pill">Graphic Design</li>
                  <li className="pill">Motion Graphics</li>
                  <li className="pill">Video Production</li>
                  <li className="pill">Adobe Creative Suite</li>
                </ul>
                <div className="iconcontainer">
                  <Image
                    className="icon"
                    src="/images/Figma.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className="icon"
                    src="/images/photoshop.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className="icon"
                    src="/images/illustrator.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <Image
                    className="icon"
                    src="/images/aftereffects.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div>
          <h2>Education</h2>
          <div className="grid-container">
            <div>
              <h3>Bachelor's Degree in Industrial Design</h3>
              <p>OCAD University</p>
            </div>
            <div>
              <h3>Web Development Postgraduate Certificate</h3>
              <p>Humber College</p>
            </div>
          </div>
        </div> */}
        <br />
        <br />
        <h2> Contact Me </h2>
        <ContactForm />
      </div>
    </main>
  );
}
