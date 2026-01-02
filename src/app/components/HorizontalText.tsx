"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Note: SplitText is a GSAP Premium plugin (Club GSAP)
import { SplitText } from "gsap/SplitText"; 

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HorizontalScrollText() {
  const componentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!textRef.current || !componentRef.current) return;

      // 1. Split the text
      const split = new SplitText(textRef.current, { type: "chars, words" });

      // 2. Create the horizontal scroll tween
      const scrollTween = gsap.to(textRef.current, {
        xPercent: -100,
        x: "100vw", // Offsets the initial padding to ensure it scrolls all the way
        ease: "none",
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          start: "top top",
          end: "+=6000px",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // 3. Animate characters using containerAnimation
      split.chars.forEach((char) => {
        gsap.from(char, {
          yPercent: () => gsap.utils.random(-200, 200),
          rotation: () => gsap.utils.random(-20, 20),
          opacity: 0,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 90%",
            end: "left 30%",
            scrub: 1,
          },
        });
      });
    }, componentRef); // Scope selectors to the component ref

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section 
      ref={componentRef} 
      className="overflow-hidden h-screen flex items-center "
    >
      <div className="flex w-max-content">
        <p 
          ref={textRef}
          className="flex whitespace-nowrap gap-[4vw] pl-[10vw] font-semibold leading-[1.1] text-[clamp(2rem,10vw,10rem)] pr-[10vw] "
        >
         A designer🎨–developer 👩🏻‍💻 crafting digital ideas, inspired by birds 🐦 and fueled by cooking🍳.
        </p>
      </div>
    </section>
  );
}