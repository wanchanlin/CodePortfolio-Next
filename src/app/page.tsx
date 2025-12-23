"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import GSAPWrapper from "./components/GSAPWrapper";
import projectsData from "./data/project";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import RunningText from "./components/RunningText";


const projects = [
  {
    number: "01",
    title: "Jency Lab",
    description: "an e-commerce website for Skincare products",
    technologies: ["Nextjs", "Tailwind", "Js", "Supabase"],
    imageSrc: "/images/jency.png",
    link: "/projects/jencyLab",
    date: "December 2025",
  },

  {
    number: "02",
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
  // register and run animation on mount
  useEffect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);
    gsap.to(".scramble", {
      duration: 1,
      scrambleText: { text: "I am a full-stack developer + designer." },
    });
  }, []);

  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  const filteredProjects = selectedTechnologies.length > 0
    ? projects.filter(project =>
        project.technologies.some(tech =>
          selectedTechnologies.some(selectedTech =>
            tech.toLowerCase() === selectedTech.toLowerCase()
          )
        )
      )
    : projects;

  return (
    <GSAPWrapper>
      <main>
        <div className=" max-w-[1000px] mx-auto px-8">
          
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div>
                <div id="hero-text" className="mt-4 flex flex-col justify-between">
                  <span className="text-[1.5rem] font-semibold text-[var(--foreground)]">Hi, I am Joyce</span>
                  <br />
                  <span className="scramble text-[2rem] font-semibold text-[var(--foreground)]">
                   {" "}
                    <span className="animate-[blink_1s_step-end_infinite]">|</span>
                  </span>
                  <br />
                  <br />
                  <Link href="https://drive.google.com/file/d/1WMRM53EZVsGQciQ1KZ6U-PWWpXPaP5XD/view?usp=sharing">
                    <div className="text-base inline-block no-underline py-2 px-4 bg-[var(--button)] text-[var(--foreground)] rounded cursor-pointer transition-colors duration-300 border-0 hover:bg-[var(--button)]">
                      Resume
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <iframe
                  className="w-full h-full min-h-[300px] border-0 rounded-[10px]"
                  src="https://my.spline.design/developwe-f3cc7a88c680ba4cf806a9340e3e9ede/"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </section>

          <h2 id="projects" className="text-[1.6rem] text-center font-semibold text-[var(--foreground)]">{`{ PROJECTS }`}</h2>
          <Tabs defaultValue="">
            <TabsList className="grid md:grid-cols-6  grid-cols-3 gap-4 p-2 rounded-lg relative">
              <TabsTrigger
                value=""
                className="relative py-2 px-4 text-sm font-medium rounded-lg border-2 border-[#c7ebbc] transition-all duration-200 cursor-pointer flex items-center gap-2 data-[state=active]:bg-[var(--button)] data-[state=inactive]:bg-[var(--background)] data-[state=inactive]:text-[var(--foreground)]"
                data-state={selectedTechnologies.length === 0 ? 'active' : 'inactive'}
              >
                All
                {selectedTechnologies.length > 0 && (
                  <>
                    <span className="text-sm text-gray-500">
                      ({selectedTechnologies.length})
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTechnologies([]);
                      }}
                      className="text-[var(--foreground)] bg-[var(--background)] cursor-pointer text-sm ml-2 border-0"
                      title="Clear all filters"
                    >
                      ✕
                    </button>
                  </>
                )}
              </TabsTrigger>
              {allTechnologies.map((tech) => (
                <TabsTrigger
                  key={tech}
                  value={tech}
                  onClick={() => {
                    if (selectedTechnologies.includes(tech)) {
                      setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech));
                    } else {
                      setSelectedTechnologies([...selectedTechnologies, tech]);
                    }
                  }}
                  className="relative py-2 px-4 text-sm font-medium rounded-lg border-2 border-[#c7ebbc] transition-all duration-200 cursor-pointer flex items-center gap-2 data-[state=active]:bg-[var(--button)] data-[state=inactive]:bg-[var(--background)] data-[state=inactive]:text-[var(--foreground)]"
                  data-state={selectedTechnologies.includes(tech) ? 'active' : 'inactive'}
                >
                  {tech}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="">
              <div className="grid grid-cols-1 gap-4">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.number} {...project} />
                ))}
              </div>
            </TabsContent>
            {allTechnologies.map((tech) => (
              <TabsContent key={tech} value={tech}>
                <div className="grid grid-cols-1 gap-4 ">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.number} {...project} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

      
          <h2 id="contact" className="text-[1.6rem] text-center font-semibold text-[var(--foreground)]">{`{ CONTACT }`}</h2>
          <ContactForm />
        </div>
      </main>
    </GSAPWrapper>
  );
}