"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Program");

  return (
    <main>
      <div>
        <h1>About Me</h1>
        
        <div>
          <div>
            <h2>Professional Journey</h2>
            <p>
              With over 9 years of experience in the technology industry, I've developed a unique blend of skills
              in both design and development. My journey began with a passion for creating beautiful and functional
              digital experiences.
            </p>
            <p>
              Throughout my career, I've worked with clients across various industries, including entertainment,
              fashion, and technology. This diverse experience has allowed me to develop a versatile skill set
              and a deep understanding of different market needs.
            </p>
          </div>
          
          <div>
            <img
              src="/images/profile.jpg"
              alt="Professional photo"
              
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        
        <section>
          <h2 id="services">{`{ SERVICES }`}</h2>
          <div className="tabs">
            <button className="tablinks" onClick={() => setActiveTab("Program")}>
              Program
            </button>
            <button className="tablinks" onClick={() => setActiveTab("Design")}>
              Design
            </button>
          </div>

          <div id="Program" className={`tabcontent${activeTab === "Program" ? " active" : ""}`}>
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

          <div id="Design" className={`tabcontent${activeTab === "Design" ? " active" : ""}`}>
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


        <div>
          <h2>Skills & Expertise</h2>
          <div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <ul className="list-disc pl-6">
                <li>Frontend Development (HTML, CSS, JavaScript)</li>
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>Database Management</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div>
              <h3>Design</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>Graphic Design</li>
                <li>Motion Graphics</li>
                <li>Video Production</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2>Education & Certifications</h2>
          <div>
            <div>
              <h3>Bachelor's Degree in Computer Science</h3>
              <p>University Name, Year</p>
            </div>
            
            <div>
              <h3>Web Development Postgraduate Certificate</h3>
              <p>Humber College, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 