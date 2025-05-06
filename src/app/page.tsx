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
      "A series of cooperative audio storytelling games",
    technologies: ["Html", "Css", "Js"],
    imageSrc: "/images/pob.svg",
    link: "/projects/powerOfBalance",
  },
  {
    number: "02",
    title: "Bird IP",
    description:
      "Yours ip address indicates your local bird species",
    technologies: ["Html", "Css", "Js", "php"],
    imageSrc: "/images/birdip.svg",
    link: "/projects/birdIP",
  },
  {
    number: "03",
    title: "National Parks Ecology",
    description:
      "A project admin can manage national park info\nand the users can view and save their information",
    technologies: ["Html", "Css", "Js", "php", "mysql"],
    imageSrc: "/images/npe.svg",
    link: "/projects/nationalParks",
  },
  {
    number: "04",
    title: "Earth V.S. Mars",
    description:
      "A project that explores the differences between Earth and Mars by using APIs",
    technologies: ["pug", "Css", "node", "Js"],
    imageSrc: "/images/evm.svg",
    link: "/projects/weather",
  },
  {
    number: "05",
    title: "ANIMATION PROJECT",
    description: "joyce's first coding project",
    technologies: ["Html", "Css", "Js"],
    imageSrc: "/images/animation.svg",
    link: "/projects/birdanimation",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Program");

  function openService(tab: string) {
    setActiveTab(tab);
  }

  return (
    <main>
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
                href="https://wanchanlin.webflow.io/work/spaceship"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="companylogo"
                  src="/images/spaceship.svg"
                  alt="SpaceshipHK"
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
