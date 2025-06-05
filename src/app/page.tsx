"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

const projects = [
  {
    number: "01",
    title: "Balance of Power",
    description: "A series of cooperative audio storytelling games",
    technologies: ["Html", "Css", "Js"],
    imageSrc: "/images/pob.svg",
    link: "/projects/powerOfBalance",
    date: "April 2025",
  },
  {
    number: "02",
    title: "Bird IP",
    description: "Your IP address indicates your local bird species",
    technologies: ["Html", "Css", "Js", "php"],
    imageSrc: "/images/birdip.svg",
    link: "/projects/birdIP",
    date: "April 2025",
  },
  {
    number: "03",
    title: "National Parks Ecology",
    description:
      "A project where admins manage national park info and users can view/save it",
    technologies: ["Html", "Css", "Js", "php", "mysql"],
    imageSrc: "/images/npe.svg",
    link: "/projects/nationalParks",
    date: "April 2025",
  },
  {
    number: "04",
    title: "Earth V.S. Mars",
    description:
      "A project that explores the differences between Earth and Mars using APIs",
    technologies: ["pug", "Css", "node", "Js"],
    imageSrc: "/images/evm.svg",
    link: "/projects/weather",
    date: "March 2025",
  },
  {
    number: "05",
    title: "ANIMATION PROJECT",
    description: "Joyce's first coding project",
    technologies: ["Html", "Css", "Js"],
    imageSrc: "/images/animation.svg",
    link: "/projects/birdanimation",
    date: "Nov 2024",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Program");

  return (
    <main>
      <div className="content">
        <section className="hero">
          <div className="grid-container">
            <div>
              <div className="hero-text">
                <span className="subtitle">Hi, I am Joyce</span>
                <br />
                <span className="title">
                  I am a full-stack developer + designer.{" "}
                  <span className="typing-cursor">|</span>
                </span>
                <br />
                <span>Based in TW & CA</span>
                <br />
                <Link href="https://drive.google.com/file/d/1WMRM53EZVsGQciQ1KZ6U-PWWpXPaP5XD/view?usp=sharing">
                  <div className="btn">Resume</div>
                </Link>
              </div>
            </div>
            <div>
              <iframe
                className="responsive-iframe"
                src="https://my.spline.design/developwe-f3cc7a88c680ba4cf806a9340e3e9ede/"
                width="100%"
                height="100%"
              />
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
              <Link href="https://wanchanlin.webflow.io/work/rakuten" target="_blank" rel="noopener noreferrer">
                <img className="companylogo" src="/images/rakuten.svg" alt="Rakuten" />
              </Link>
              <Link href="https://wanchanlin.webflow.io/work/spaceship" target="_blank" rel="noopener noreferrer">
                <img className="companylogo" src="/images/spaceship.svg" alt="SpaceshipHK" />
              </Link>
              <Link href="https://wanchanlin.webflow.io/work/hongmall" target="_blank" rel="noopener noreferrer">
                <img className="companylogo" src="/images/HongMall.svg" alt="HongMall" />
              </Link>
              <img className="companylogo" src="/images/heys.svg" alt="Heys" />
              <Link href="https://wanchanlin.webflow.io/work/xingmobility" target="_blank" rel="noopener noreferrer">
                <img className="companylogo" src="/images/xingmobility.svg" alt="XingMobility" />
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
