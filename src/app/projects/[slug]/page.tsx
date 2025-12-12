import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";  
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

// import { faUser, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
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
  jencyLab: {
    title: "Jency Lab",
    description: "An e-commerce website for Skincare products.",    
    technologies: ["Nextjs", "Tailwind", "Js", "Supabase"],
    images: ["/images/jency.png"],
    features: [
      "User-friendly interface for browsing and purchasing skincare products",
      "Secure payment gateway integration",
      "Personalized product recommendations based on user preferences",
      "Inventory management system for real-time stock updates",
    ],
    demo: "https://jencylab.vercel.app/",
    github: "https://github.com/wanchanlin/Jency-Lab.git",
      
  },    
    
  powerOfBalance: {
    title: "Power Of Balance",
    description:
      "An immersive series of cooperative audio storytelling games set during the Cold War between the United States and Cuba. \nPlayers work together to uncover secrets, navigate political tension, and make impactful decisions through rich audio-driven narratives.",
    technologies: ["Html", "Css", "Js"],
    images: ["/images/pob.svg"],
    features: [
      "Cooperative Gameplay: Collaborate with others to shape the story’s outcome.",
      "Audio-Driven Storytelling: Experience the Cold War through atmospheric sound design and voice-acted scenes",
      "Historical Immersion: Engage with real events and fictionalized scenarios inspired by the US–Cuba conflict.",
      "Interactive maps and guides",
    ],
    demo: "https://balanceofpower.kvieve.com/",
    github: "https://github.com/awsactivators/balance-of-power-game.git",
    members: [
      { name: "Heather", url: "https://github.com/heatherfeather-code" },
      { name: "Gabi", url: "https://github.com/gabi-studio" },
      { name: "Genevieve", url: "https://github.com/awsactivators" },
      { name: "Wanchan", url: "https://github.com/wanchanlin" },
    ],
  },
  birdIP: {
    videoUrl: "https://www.youtube.com/embed/oj6NyqT32OA",
    title: "BirdIP",
    description:
      "Your IP address is used to identify local bird species in your area. By clicking the More button, you can view a ranked list of recently sighted birds nearby, along with their observed locations. For each bird species, you’ll also have the option to access more detailed information by following a link to its Wikipedia page.n/The bird-sighting website integrates several APIs to offer a location-based, informative experience for users. \n\n Here’s a breakdown of each:\n 1. IP Geolocation API\n Purpose: Identify the user’s approximate location using their IP address.\n2. eBird API (Bird Observation Data)\nPurpose: Retrieve a ranked list of recently sighted bird species in the user’s region.\n3. Google Maps JavaScript API\nPurpose: Visualize bird sighting locations on an interactive map. ",
    technologies: ["Html", "Css", "Js", "php", "api"],
    features: [
      "A ranked list of recently sighted birds in your region",
      "The locations where these birds were last observed",
      "Detailed information about each species, with a link to their Wikipedia page for more in-depth reading",

    ],
    demo: "https://joycelin.infinityfreeapp.com/",
    github: "https://github.com/wanchanlin/BirdIP",
  },
  nationalParks: {
    videoUrl: "https://www.youtube.com/embed/mLvPdRS_Bp8", // Optional
    title: "National Parks Project",
    description:
      "A comprehensive project for managing and exploring national parks information.they can view and save their information.\nand the admin can manage the information.\n\nAdmin \nUsername: admin@example.com \nPassword:test\n\nUser \nUsername: henry.clark@example.com \nPassword:test",
    technologies: ["Html", "Css", "Js", "php", "mysql"],
    images: ["/images/project3.svg"],
    features: [
      "Admin dashboard for park management",
      "User-friendly interface for park exploration",
      "Real-time data updates",
      "Interactive maps and guides",
      "CRUD operations",
    ],
    demo: "https://lavender-dolphin-454296.hostingersite.com/index.php",
    github: "https://github.com/wanchanlin/national-parks-ecology",
    members: [
      { name: "Gabi", url: "https://github.com/gabi-studio" },
      { name: "Tashrif", url: "https://github.com/Ramdao" },
      { name: "Wanchan", url: "https://github.com/wanchanlin" },
    ],
  },
  weather: {
    title: "Earth V.S. Mars Weather",
    description:
      "Compare weather conditions between Earth and Mars using real-time data.",
    technologies: ["pug", "Css", "node", "Js"],
    images: ["/images/evm.svg"],
    features: [
      "Real-time weather data comparison",
      "Interactive visualizations",
      "Historical data analysis",
      "API integration",
    ],
    demo: "https://weather-mars-earth.vercel.app/",
    github: "https://github.com/wanchanlin/MarsVSEarth",
  },
  birdanimation: {
    title: "Animation",
    description:
      "A creative animation project showcasing various bird species.",
    technologies: ["Html", "Css", "Js"],
    images: ["/images/project1.svg"],
    features: [
      "Interactive animations",
      "Not Responsive",
      "Smooth transitions",
      "Cross-browser compatibility",
    ],
    demo: "https://animation-project-lemon.vercel.app/",
    github: "https://github.com/wanchanlin/AnimationProject",
 
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
      <div >
        <div>
          <h1>Project Not Found</h1>
          <Link href="/" >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="project-container">
      <div className="project-header">
        <Link href="/" className="hyperlink">
          <FontAwesomeIcon icon={faChevronLeft} className="back-arrow"/>
        </Link>
        <h1>{project.title}</h1>
      </div>
      <div className="grid-container">
        <div>
          <div className="project-page-content">
            

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
                  GitHub <FontAwesomeIcon icon={faGithub}/>
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo <FontAwesomeIcon icon={faLaptopCode} />
                </Link>
              )}
            </div>
           
          </div>
        </div>
        <div className="features-container">
       
          <div>
          <h2>About</h2>
          <p style={{ whiteSpace: "pre-line" }}>{project.description}</p>
          <h2>Techonology</h2>
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

          {project.members && project.members.length > 0 && (
            <div>
              <h2>Member</h2>
              <div className="member-list">
                {project.members.map((member, idx) => (
                  <a
                    key={idx}
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="member-btn"
                  >
                    {member.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div>
        <ContactForm />
      </div> */}
    </main>
  );
}
