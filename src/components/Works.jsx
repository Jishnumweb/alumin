"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecentWorks = () => {
  const projects = [
    {
      img: "/images/1 (3).jpg",
    },
    {
      img: "/images/1 (15).jpg",
    },
    {
      img: "/images/1 (34).jpg",
    },
    {
      img: "/images/1 (28).jpg",
    },
    {
      img: "/images/2 (18).jpg",
    },
    {
      img: "/images/2 (31).jpg",
    },
    {
      img: "/images/1 (16).jpg",
    },
    {
      img: "/images/1 (25).jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 3 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 3 : prev - 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-4xl font-light uppercase mb-10 text-black">
          RECENT <span className="text-[red] font-bold">WORKS</span>
        </h2>

        {/* MOBILE GRID 2 × 6 */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {projects.slice(0, 6).map((p, i) => (
            <img
              key={i}
              src={p.img}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="lg:hidden text-center mt-6">
          <a href="/works">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-red-600 transition">
              VIEW ALL
            </button>
          </a>
        </div>

        {/* DESKTOP SLIDER 3 PHOTOS */}
        <div className="hidden lg:block relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {projects.map((p, i) => (
              <img
                key={i}
                src={p.img}
                className="w-1/3 h-[360px] object-cover rounded-xl flex-shrink-0"
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full hover:bg-black hover:text-white"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full hover:bg-black hover:text-white"
          >
            <ChevronRight size={26} />
          </button>
          {/* VIEW ALL BUTTON */}
          <div className="lg:block hidden text-center mt-6">
            <a href="/works">
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-red-600 transition">
                VIEW ALL
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
