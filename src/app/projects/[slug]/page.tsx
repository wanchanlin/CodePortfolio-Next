import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  features: string[];
  demo: string;
  github: string;
  videoUrl?: string;
}

// Define page props interface
interface PageProps {
  params: {
    slug: string;
  };
}

const projects: Record<string, Project> = {
  powerOfBalance: {
    title: 'National Parks Project',
    description: 'A comprehensive project for managing and exploring national parks information.',
    technologies: ['Html', 'Css', 'Js', 'php', 'mysql'],
    images: ['/images/project3.svg'],
    features: [
      'Admin dashboard for park management',
      'User-friendly interface for park exploration',
      'Real-time data updates',
      'Interactive maps and guides'
    ],
    demo: "https://demo-project1.com",
    github: "https://github.com/yourusername/project1",
  },
  birdIP: {
    title: 'BirdIP',
    description: 'A comprehensive project for managing and exploring national parks information.',
    technologies: ['Html', 'Css', 'Js', 'php', 'mysql'],
    images: ['/images/project3.svg'],
    features: [
      'Admin dashboard for park management',
      'User-friendly interface for park exploration',
      'Real-time data updates',
      'Interactive maps and guides'
    ],
    demo: "https://demo-project1.com",
    github: "https://github.com/yourusername/project1",
  },
  nationalParks: {
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // Optional
    title: 'National Parks Project',
    description: 'A comprehensive project for managing and exploring national parks information.',
    technologies: ['Html', 'Css', 'Js', 'php', 'mysql'],
    images: ['/images/project3.svg'],
    features: [
      'Admin dashboard for park management',
      'User-friendly interface for park exploration',
      'Real-time data updates',
      'Interactive maps and guides'
    ],
    demo: "https://demo-project1.com",
    github: "https://github.com/yourusername/project1",
  },
  weather: {
    title: 'Earth V.S. Mars Weather',
    description: 'Compare weather conditions between Earth and Mars using real-time data.',
    technologies: ['pug', 'Css', 'node', 'Js'],
    images: ['/images/project2.svg'],
    features: [
      'Real-time weather data comparison',
      'Interactive visualizations',
      'Historical data analysis',
      'API integration'
    ],  
    demo: "https://demo-project1.com",
    github: "https://github.com/yourusername/project1",
  },
  birdanimation: {
    title: 'Animation Project',
    description: 'A creative animation project showcasing various bird species.',
    technologies: ['Html', 'Css', 'Js'],
    images: ['/images/project1.svg'],
    features: [
      'Interactive animations',
      'Responsive design',
      'Smooth transitions',
      'Cross-browser compatibility'
    ],
    demo: "https://demo-project1.com",
    github: "https://github.com/yourusername/project1",
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects[params.slug]
  return {
    title: project?.title || 'Project Not Found',
    description: project?.description || 'Project details'
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects[params.slug]

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
    )
  }

  return (
    <main className="project-container">
      <Link href="/" className="btn">
        ← Back to Projects
      </Link>
      
     

      <div className="project-content">
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        {project.videoUrl && (
          <div className="video-container">
            <iframe
              className="responsive-iframe"
              src={project.videoUrl}
              title="Project Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        <div>
          {project.images.map((image, index) => (
            <div key={index} className="relative h-64">
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div>
          <h2>Technologies Used</h2>
          <div>
            {project.technologies.map((tech, index) => (
              <div key={index}>
                <Image
                  src={`/images/${tech}.svg`}
                  alt={tech}
                  width={24}
                  height={24}
                />
                <span>{tech}</span>
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
    </main>
  )
} 