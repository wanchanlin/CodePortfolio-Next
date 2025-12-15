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
    
      <div className='flex flex-col gap-4 md:grid md:grid-cols-2 items-center justify-center px-4 py-8'  >
        <div className='flex flex-col gap-2 '>
          <p className='text-sm'>{date}</p>
          <p className='text-2xl font-bold'>{title}</p>
          <p className='text-sm text-[var(--foreground)] t'>{description}</p>
          <Link href={link} className=" gap-2 text-base flex justify-left w-fit no-underline py-2 px-4 bg-[var(--button)] text-[var(--foreground)] items-center rounded-md hover:bg-[var(--button)]">
            View More
            <FontAwesomeIcon icon={faChevronRight} className="chevron" />
          </Link>
        </div>
        <div className="w-full h-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

  
  )
} 