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
        <img
          className="project" 
          src={imageSrc} 
          alt={title} 
        />
      </div>
      <div className="grid-item">
        <div>
          <p>{number}</p>
          <p className='project-title'>{title}</p>
          <p>{description}</p>
          <div>
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