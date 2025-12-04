"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPage = () => {
  const projects = [
    {
      img: "/images/1 (1).jpg",
    },
    {
      img: "/images/1 (2).jpg",
    },
    {
      img: "/images/1 (3).jpg",
    },
    {
      img: "/images/1 (4).jpg",
    },
    {
      img: "/images/1 (5).jpg",
    },
    {
      img: "/images/1 (6).jpg",
    },
    {
      img: "/images/1 (7).jpg",
    },
    {
      img: "/images/1 (8).jpg",
    },
    {
      img: "/images/1 (9).jpg",
    },
    {
      img: "/images/1 (10).jpg",
    },
    {
      img: "/images/1 (11).jpg",
    },
    {
      img: "/images/1 (12).jpg",
    },
    {
      img: "/images/1 (13).jpg",
    },
    {
      img: "/images/1 (14).jpg",
    },
    {
      img: "/images/1 (15).jpg",
    },
    {
      img: "/images/1 (16).jpg",
    },
    {
      img: "/images/1 (17).jpg",
    },
    {
      img: "/images/1 (18).jpg",
    },
    {
      img: "/images/1 (19).jpg",
    },
    {
      img: "/images/1 (20).jpg",
    },
    {
      img: "/images/1 (21).jpg",
    },
    {
      img: "/images/1 (22).jpg",
    },
    {
      img: "/images/1 (23).jpg",
    },
    {
      img: "/images/1 (24).jpg",
    },
    {
      img: "/images/1 (29).jpg",
    },
    {
      img: "/images/1 (26).jpg",
    },
    {
      img: "/images/1 (27).jpg",
    },
    {
      img: "/images/1 (30).jpg",
    },
    {
      img: "/images/1 (31).jpg",
    },
    {
      img: "/images/1 (32).jpg",
    },
    {
      img: "/images/1 (33).jpg",
    },
    {
      img: "/images/1 (34).jpg",
    },
    {
      img: "/images/1 (35).jpg",
    },
    {
      img: "/images/1 (36).jpg",
    },
    {
      img: "/images/1 (37).jpg",
    },
    {
      img: "/images/1 (38).jpg",
    },
    {
      img: "/images/1 (39).jpg",
    },
    {
      img: "/images/2 (11).jpg",
    },
    {
      img: "/images/2 (11).jpg",
    },
    {
      img: "/images/2 (12).jpg",
    },
    {
      img: "/images/2 (13).jpg",
    },
    {
      img: "/images/2 (14).jpg",
    },
    {
      img: "/images/2 (15).jpg",
    },
    {
      img: "/images/2 (16).jpg",
    },
    {
      img: "/images/2 (17).jpg",
    },
    {
      img: "/images/2 (18).jpg",
    },
    {
      img: "/images/2 (19).jpg",
    },
    {
      img: "/images/2 (20).jpg",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const next = () =>
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section className="py-20 bg-white px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light uppercase text-black mb-10">
        ALL <span className="text-[red] font-bold">WORKS</span>
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((p, i) => (
          <img
            key={i}
            src={p.img}
            onClick={() => openModal(i)}
            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-6 right-6 bg-white p-2 rounded-full"
            onClick={closeModal}
          >
            <X size={28} />
          </button>

          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={projects[selectedIndex].img}
            className="max-w-[90%] max-h-[80vh] rounded-lg shadow-xl transition-all"
          />

          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
