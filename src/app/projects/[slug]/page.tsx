import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

const projectData = {
  nationalParks: {
    title: 'National Parks Project',
    description: 'A comprehensive project for managing and exploring national parks information.',
    technologies: ['Html', 'Css', 'Js', 'php', 'mysql'],
    images: ['/images/project3.svg'],
    features: [
      'Admin dashboard for park management',
      'User-friendly interface for park exploration',
      'Real-time data updates',
      'Interactive maps and guides'
    ]
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
    ]
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
    ]
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectData[params.slug as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg mb-8">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {project.images.map((image, index) => (
            <div key={index} className="relative h-64">
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
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
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
} 