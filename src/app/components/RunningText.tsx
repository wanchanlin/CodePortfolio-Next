"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function RunningText() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    // We animate exactly half of the total width 
    // because the content is duplicated inside.
    const scrollWidth = element.scrollWidth;
    
    const tl = gsap.to(element, {
      x: `-${scrollWidth / 2}px`,
      duration: 120, 
      ease: "none",
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (

    <div className=" m-8 flex font-bold uppercase text-[6px] justify-center items-center overflow-hidden px-4 py-4 shadow-sm max-w-5xl w-5/6 mx-auto dark:bg-white bg-gray-800  border-y border-gray-100 rounded-md ">
      <div 
        ref={scrollRef}
        className="whitespace-nowrap inline-block text-xs/[6px] dark:text-gray-600 text-[#67e242] will-change-transform "
      >
        {/* We need two identical sets of text side-by-side for a seamless loop */}
        <span className="inline-block">
          {'● Passionate Developer ● Creative Designer ● Lifelong Learner ● Open Source Enthusiast ● Tech Explorer '.repeat(10)}
        </span>
        <span className="inline-block">
          {'● Passionate Developer ● Creative Designer ● Lifelong Learner ● Open Source Enthusiast ● Tech Explorer '.repeat(10)}
        </span>
      </div>
    </div>

  );
}