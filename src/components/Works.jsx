"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecentWorks = () => {
  const projects = [
    {
      title: "MODERN OFFICE TOWER",
      category: "FABRICATION",
      img: "https://images.jdmagicbox.com/comp/kollam/z4/9999px474.x474.230802111235.t7z4/catalogue/aluplus-aluminium-thodiyur-kollam-glass-door-dealers-j0gawg8dfw.jpg",
    },
    {
      title: "LUXURY BEACH VILLA",
      category: "FABRICATION",
      img: "https://images.jdmagicbox.com/comp/kollam/z4/9999px474.x474.230802111235.t7z4/catalogue/aluplus-aluminium-thodiyur-kollam-glass-door-dealers-fh6u5parpg.jpg",
    },
    {
      title: "URBAN CITY CENTER",
      category: "FABRICATION",
      img: "https://images.jdmagicbox.com/comp/kollam/z4/9999px474.x474.230802111235.t7z4/catalogue/aluplus-aluminium-thodiyur-kollam-glass-door-dealers-g7jt9leipx.jpg",
    },
    {
      title: "GLASS DESIGN BUILDING",
      category: "FABRICATION",
      img: "https://images.jdmagicbox.com/comp/kollam/z4/9999px474.x474.230802111235.t7z4/catalogue/aluplus-aluminium-thodiyur-kollam-glass-door-dealers-wnhnncd480.jpg",
    },
    {
      title: "GLASS DESIGN BUILDING",
      category: "FABRICATION",
      img: "https://images.jdmagicbox.com/comp/kollam/z4/9999px474.x474.230802111235.t7z4/catalogue/aluplus-aluminium-thodiyur-kollam-glass-door-dealers-10t980ar80.jpg",
    },
    {
      title: "GLASS DESIGN BUILDING",
      category: "FABRICATION",
      img: "https://images.jdmagicbox.com/comp/kollam/z4/9999px474.x474.230802111235.t7z4/catalogue/aluplus-aluminium-thodiyur-kollam-glass-door-dealers-kgmua205jj.jpg",
    },
    {
      title: "GLASS DESIGN BUILDING",
      category: "FABRICATION",
      img: "https://images.jdmagicbox.com/comp/kollam/z4/9999px474.x474.230802111235.t7z4/catalogue/aluplus-aluminium-thodiyur-kollam-glass-door-dealers-cleodmhc5p.jpg",
    },
    {
      title: "GLASS DESIGN BUILDING",
      category: "FABRICATION",
      img: "https://images.jdmagicbox.com/comp/kollam/z4/9999px474.x474.230802111235.t7z4/catalogue/aluplus-aluminium-thodiyur-kollam-glass-door-dealers-wd2s5u9u2d.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative">
        {/* SECTION HEADING */}
        <h2 className="text-4xl font-light uppercase mb-10 text-black">
          RECENT <span className="text-[red] font-bold">WORKS</span>
        </h2>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 cursor-pointer"
                onClick={() => alert(`View: ${project.title}`)}
              >
                <div className="relative w-full h-[380px] overflow-hidden group">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 bg-black/70 w-full py-4 px-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs tracking-[0.25em] uppercase text-[red]">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 hover:bg-black hover:text-white transition rounded-full"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 hover:bg-black hover:text-white transition rounded-full"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
