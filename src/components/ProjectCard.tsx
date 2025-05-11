'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  link: string;
  date?: string;
}

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  imageSrc,
  link,
  date
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
          <p> <span className="date"> {date} </span></p> 
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
            <div className="btn">View more <FontAwesomeIcon icon={faChevronRight} /></div>
          </Link>
        </div>
      </div>
    </>
  )
} 