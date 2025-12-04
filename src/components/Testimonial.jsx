"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Michael Robert",
      role: "ARCHITECT & DESIGNER",
      review:
        "Working with ALUPLUS was an excellent decision. Their precision engineering and fabrication exceeded expectations.",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "Sarah Johnson",
      role: "CONSTRUCTION DIRECTOR",
      review:
        "Their finishing and craftsmanship is unmatched. Absolutely premium quality and professional team.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: "David Martinez",
      role: "PROJECT MANAGER",
      review:
        "Fast communication, excellent technical support, and stunning output. Highly recommended.",
      img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const animateCard = () => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    animateCard();
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    animateCard();
  };

  // Auto slider
  useEffect(() => {
    animateCard();
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-light uppercase mb-14 text-black">
          CUSTOMER <span className="text-[red] font-bold">TESTIMONIALS</span>
        </h2>

        <div
          ref={cardRef}
          className="relative bg-white shadow-xl p-10 rounded-xl border border-gray-200"
        >
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[red] -mt-20 shadow-lg">
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-8 text-sm md:text-base leading-relaxed text-black/80 italic max-w-3xl mx-auto">
            “{testimonials[index].review}”
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold">
              {testimonials[index].name}
            </h4>
            <p className="text-[10px] tracking-[0.25em] text-[red] mt-1 uppercase">
              {testimonials[index].role}
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-black/50 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-black/50 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-[red]" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
