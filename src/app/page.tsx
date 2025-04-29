"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

const projects = [
  {
    number: "01",
    title: "Balance of Power",
    description:
      "A project admin can manage national park info and the users can view and save their",
    technologies: ["Html", "Css", "Js"],
    imageSrc: "/images/project3.svg",
    link: "/projects/nationalParks",
  },
  {
    number: "02",
    title: "Bird IP",
    description:
      "A project admin can manage national park info and the users can view and save their",
    technologies: ["Html", "Css", "Js", "php"],
    imageSrc: "/images/project3.svg",
    link: "/projects/nationalParks",
  },
  {
    number: "03",
    title: "National Parks Ecology",
    description:
      "A project admin can manage national park info and the users can view and save their",
    technologies: ["Html", "Css", "Js", "php", "mysql"],
    imageSrc: "/images/project3.svg",
    link: "/projects/nationalParks",
  },
  {
    number: "04",
    title: "Earth V.S. Mars",
    description:
      "A project that explores the differences between Earth and Mars by using APIs",
    technologies: ["pug", "Css", "node", "Js"],
    imageSrc: "/images/project2.svg",
    link: "/projects/weather",
  },
  {
    number: "05",
    title: "ANIMATION PROJECT",
    description: "joyce's first coding project",
    technologies: ["Html", "Css", "Js"],
    imageSrc: "/images/project1.svg",
    link: "/projects/birdanimation",
  },
];

function openService(tab: string) {
  setActiveTab(tab);
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Program");

  return (
    <main className="min-h-screen">
      <div className="content">
        <section>
          <div className="grid-container">
            <div className="grid-item">
              <div className="project-content text-white">
                <span className="subtitle">Hi, I am joyce</span>
                <br />
                <span className="title">
                  I am a full-stack developer + designer.{" "}
                  <span className="typing-cursor">|</span>
                </span>
                <br />
                <span>Base in TW CA</span>
                <br />
                <Link href="https://drive.google.com/file/d/1m5Zy2mz5g-fkOUsSy4ZigErFfSVLciCl/view?usp=sharing">
                  <div className="btn">Resume</div>
                </Link>
              </div>
            </div>
            <div className="grid-item">
              <iframe
                className="responsive-iframe"
                src="https://my.spline.design/developwe-f3cc7a88c680ba4cf806a9340e3e9ede/"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 id="about">{`{ PROFILE }`}</h2>
          <p>
            As a full-stack designer/developer with over 9 years of experience
            in the technology industry, I specialize in creating visually
            stunning designs for various media, including graphic design, video
            production, and motion graphics. I have a strong foundation in the
            Adobe Creative Suite and have worked with clients in the
            entertainment, fashion, and tech industries. I am constantly seeking
            to improve my skills and stay up-to-date on the latest design
            trends. If you have a project that could benefit from my expertise,
            please don't hesitate to reach out.
            <span className="typing-cursor">|</span>
          </p>
        </section>

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

        <h2 id="projects">{`{ PROJECTS }`}</h2>
        <div className="grid-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <h2>{`{ PARTNERS }`}</h2>
        <div className="crop">
          <div className="logo-container">
            <div className="logo-marquee">
              <Link
                href="https://wanchanlin.webflow.io/work/rakuten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="companylogo"
                  src="/images/rakuten.svg"
                  alt="Rakuten"
                />
              </Link>
              <Link
                href="https://wanchanlin.webflow.io/work/hongmall"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="companylogo"
                  src="/images/spaceship.svg"
                  alt="XingMobility"
                />
              </Link>
              <Link
                href="https://wanchanlin.webflow.io/work/hongmall"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="companylogo" src="/images/HongMall.svg" />
              </Link>
              <img className="companylogo" src="/images/heys.svg" alt="Heys" />
              <Link
                href="https://wanchanlin.webflow.io/work/xingmobility"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="companylogo"
                  src="/images/xingmobility.svg"
                  alt="XingMobility"
                />
              </Link>
            </div>
          </div>
        </div>

        <h2 id="contact">{`{ CONTACT }`}</h2>
        <ContactForm />
      </div>
    </main>
  );
}
