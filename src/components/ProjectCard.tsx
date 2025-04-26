'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  number: string
  title: string
  description: string
  technologies: string[]
  imageSrc: string
  link: string
}

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  imageSrc,
  link,
}: ProjectCardProps) {
  return (
    <>
      <div className="grid-item">
        <Image 
          className="project" 
          src={imageSrc} 
          alt={title} 
          width={500} 
          height={300}
        />
      </div>
      <div className="grid-item alignment">
        <div className="project-content">
          <p>{number}</p>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="flex gap-4">
            {technologies.map((tech, index) => (
              <Image 
                key={index}
                src={`/images/${tech}.svg`} 
                alt={tech} 
                width={30} 
                height={30}
              />
            ))}
          </div>
          <br />
          <Link href={link}>
            <div className="btn">View more</div>
          </Link>
        </div>
      </div>
    </>
  )
} 