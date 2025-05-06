import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// import ContactForm from "../../../components/ContactForm";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images?: string[];
  features: string[];
  demo: string;
  github: string;
  videoUrl?: string;
  members?: { name: string; url: string }[];
}

// Define page props interface
interface PageProps {
  params: {
    slug: string;
  };
}

const projects: Record<string, Project> = {
  powerOfBalance: {
    title: "Power Of Balance",
    description:
      "A series of cooperative audio storytelling games about cold war between US and Cuba",
    technologies: ["Html", "Css", "Js"],
    images: ["/images/pob.svg"],
    features: [
      "Admin dashboard for park management",
      "User-friendly interface for park exploration",
      "Real-time data updates",
      "Interactive maps and guides",
    ],
    demo: "https://balanceofpower.kvieve.com/",
    github: "https://github.com/awsactivators/balance-of-power-game.git",
    members: [
      { name: "Heather", url: "https://github.com/alice" },
      { name: "Gabi", url: "https://linkedin.com/in/bob" },
      { name: "Ge", url: "https://linkedin.com/in/bob" },
      { name: "Wanchan", url: "https://linkedin.com/in/bob" },
    ],
  },
  birdIP: {
    videoUrl: "https://www.youtube.com/embed/oj6NyqT32OA",
    title: "BirdIP",
    description:
      "A comprehensive project for managing and exploring national parks information.",
    technologies: ["Html", "Css", "Js", "php", "mysql"],
    features: [
      "Admin dashboard for park management",
      "User-friendly interface for park exploration",
      "Real-time data updates",
      "Interactive maps and guides",
    ],
    demo: "https://joycelin.infinityfreeapp.com/",
    github: "https://github.com/wanchanlin/BirdIP",
  },
  nationalParks: {
    videoUrl: "https://www.youtube.com/embed/mLvPdRS_Bp8", // Optional
    title: "National Parks Project",
    description:
      "A comprehensive project for managing and exploring national parks information. they can view and save their information. and the admin can manage the information.",
    technologies: ["Html", "Css", "Js", "php", "mysql"],
    images: ["/images/project3.svg"],
    features: [
      "Admin dashboard for park management",
      "User-friendly interface for park exploration",
      "Real-time data updates",
      "Interactive maps and guides",
    ],
    demo: "https://lavender-dolphin-454296.hostingersite.com/index.php",
    github: "https://github.com/wanchanlin/national-parks-ecology",
  },
  weather: {
    title: "Earth V.S. Mars Weather",
    description:
      "Compare weather conditions between Earth and Mars using real-time data.",
    technologies: ["pug", "Css", "node", "Js"],
    images: ["/images/project2.svg"],
    features: [
      "Real-time weather data comparison",
      "Interactive visualizations",
      "Historical data analysis",
      "API integration",
    ],
    demo: "https://animation-project-lemon.vercel.app/",
    github: "https://github.com/yourusername/project1",
  },
  birdanimation: {
    title: "Animation Project",
    description:
      "A creative animation project showcasing various bird species.",
    technologies: ["Html", "Css", "Js"],
    images: ["/images/project1.svg"],
    features: [
      "Interactive animations",
      "Responsive design",
      "Smooth transitions",
      "Cross-browser compatibility",
    ],
    demo: "https://demo-project1.com",
    github: "https://github.com/wanchanlin/AnimationProject",
    members: [
      { name: "MySelf", url: "https://github.com/wanchanlin" }
      
    ],
  },
};

// Generate metadata for the page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = projects[params.slug];
  return {
    title: project?.title || "Project Not Found",
    description: project?.description || "Project details",
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <h1>Project Not Found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="project-container">
      <Link href="/" className="hyperlink">
        ← Back
      </Link>
      <h1>{project.title}</h1>
      <div className="grid-container">
        <div>
          <div className="project-page-content">
            <p>{project.description}</p>

            {project.videoUrl ? (
              <div className="video-container">
                <iframe
                  className="responsive-iframe"
                  src={project.videoUrl}
                  title="Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : project.images && project.images.length > 0 ? (
              <div>
                {project.images.map((image, index) => (
                  <div key={index} className="relative h-64">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="project-image"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="project-links">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="features-container">
            <div>
              <h2>Technologies Used</h2>
              <div className="technologies-container">
                {project.technologies.map((tech, index) => (
                  <div key={index}>
                    <Image
                      src={`/images/${tech}.svg`}
                      alt={tech}
                      width={50}
                      height={50}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2>Features</h2>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Member</h2>
              <div className="member-list">
                {project.members && project.members.length > 0 ? (
                  project.members.map((member, idx) => (
                    <a
                      key={idx}
                      href={member.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member-btn"
                    >
                      {member.name}
                    </a>
                  ))
                ) : (
                  <span>No members listed.</span>
                )}
              </div>
            </div>
        </div>
      </div>
      {/* <div>
        <ContactForm />
      </div> */}
    </main>
  );
}
