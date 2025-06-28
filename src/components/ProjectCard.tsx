'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectCard.module.css'

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
    <div className={styles.projectCard}>
      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
          <p className="date">{date}</p>
          <p className={styles.projectTitle}>{title}</p>
          <p className={styles.projectDescription}>{description}</p>
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <img
                key={index}
                src={`/images/${tech}.svg`}
                alt={tech}
                className={styles.techIcon}
              />
            ))}
          </div>
          <Link href={link} className="flex items-center gap-2 btn">
            VIEW MORE
            <FontAwesomeIcon icon={faChevronRight} className="chevron" />
          </Link>
        </div>
        <div className={styles.projectImage}>
          <img
            src={imageSrc}
            alt={title}
            className={styles.projectImageImg}
          />
        </div>
      </div>

    </div>
  )
} 