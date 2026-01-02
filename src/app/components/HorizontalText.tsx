"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; 

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HorizontalScrollText() {
  const componentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      if (!textRef.current || !componentRef.current) return;

      const split = new SplitText(textRef.current, { type: "chars, words" });
      
      // Calculate how far the text needs to move
      // (Total width of text - width of the viewport)
      const getScrollAmount = () => {
        let textWidth = textRef.current?.offsetWidth || 0;
        return -(textWidth - window.innerWidth);
      };

      const scrollTween = gsap.to(textRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          start: "top top",
          // Adjust scroll length based on text width for a consistent feel
          end: () => `+=${textRef.current?.offsetWidth}`,
          scrub: 1,
          invalidateOnRefresh: true, // Crucial for responsiveness
        },
      });

      split.chars.forEach((char) => {
        gsap.from(char, {
          yPercent: () => gsap.utils.random(-100, 100),
          opacity: 0,
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 95%",
            end: "left 60%",
            scrub: true,
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={componentRef} className="overflow-hidden h-screen flex items-center ">
      {/* Use w-fit so the container wraps the text size exactly */}
      <div className="flex w-fit">
        <p 
          ref={textRef}
          className="whitespace-nowrap px-[10vw] font-semibold leading-[1.1] text-[12vw] md:text-[10vw] lg:text-[8vw]"
        >
          A designer🎨–developer 👩🏻‍💻 crafting digital ideas, inspired by birds 🐦 and fueled by cooking🍳.
        </p>
      </div>
    </section>
  );
}