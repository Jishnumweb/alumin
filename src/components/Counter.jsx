"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsStrip = () => {
  const statsRef = useRef([]);
  const sectionRef = useRef(null);

  const stats = [
    { value: 2, suffix: "+", line1: "COMPANY", line2: "" },
    { value: 70, suffix: "+", line1: "COMPLETED", line2: "WORKS" },
    { value: 10, suffix: "+", line1: "YEARS", line2: "EXPERIENCE" },
    { value: 100, suffix: "%", line1: "HAPPY", line2: "CUSTOMERS" },
  ];

  useEffect(() => {
    statsRef.current.forEach((el, index) => {
      const finalValue = stats[index].value;

      gsap.fromTo(
        el,
        { innerHTML: 0 },
        {
          innerHTML: finalValue,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // when animation starts
          },
          onUpdate: function () {
            el.innerHTML = Math.floor(el.innerHTML) + stats[index].suffix;
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left relative"
          >
            {/* Icon placeholder */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 opacity-10">
              <div className="w-10 h-10 border border-black rounded-full" />
            </div>

            {/* Value */}
            <div
              ref={(el) => (statsRef.current[index] = el)}
              className="text-4xl md:text-5xl font-semibold text-[red] mb-1"
            >
              0{item.suffix}
            </div>

            {/* Labels */}
            <div className="text-[10px] tracking-[0.25em] uppercase text-black/80 leading-4">
              <div>{item.line1}</div>
              <div>{item.line2}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
