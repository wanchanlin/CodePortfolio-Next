// GSAPWrapper.tsx
'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactNode, useRef } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type GSAPWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function GSAPWrapper({ children, className = '' }: GSAPWrapperProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero text animation with enhanced scroll effects
    gsap.utils.toArray<HTMLElement>('.hero-text').forEach((hero) => {
      // Create a timeline for the hero text animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top 100%',
          end: 'bottom top',
          toggleActions: 'play none none none',
          // markers: true, // Uncomment for debugging
        },
      });

      // Split text into lines/words for staggered animation
      const textLines = hero.querySelectorAll('.line');
      
      if (textLines.length > 0) {
        // If text is split into lines with 'line' class
        tl.from(textLines, {
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        });
      } else {
        // Fallback for non-split text
        tl.from(hero, {
          y: 60,
          duration: 1.2,
          ease: 'power3.out',
        });
      }

      // Add a subtle scale effect on scroll
      gsap.to(hero, {
        scale: 0.9,
        scrollTrigger: {
          trigger: hero,
          start: 'top center',
          end: 'bottom top',
          scrub: 2,
          // markers: true, // Uncomment for debugging
        },
      });
    });


    // Project cards animation
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1, // Stagger effect
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none', // Play once when it enters
            // markers: true, // Uncomment for debugging
          },
        }
      );
    });

    // Section headers animation
    gsap.utils.toArray<HTMLElement>('h2').forEach((header) => {
      gsap.fromTo(
        header,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 90%',
            toggleActions: 'play none none none', // Play once when it enters
            // markers: true, // Uncomment for debugging
          },
        }
      );
    });
  }, { scope: container }); // Scope ensures animations are cleaned up if component unmounts

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}