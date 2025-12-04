"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  const [activeNav, setActiveNav] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navItems = ["HOME", "ABOUT", "SERVICES", "GALLERY", "CONTACT"];

  const heroImages = ["/images/home.jpg"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="min-h-screen bg-cover bg-center relative transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${heroImages[currentSlide]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        {/* HERO CONTENT */}
        <div className="relative z-20 min-h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white uppercase text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.25em] mb-6 max-w-4xl">
            Premium Aluminium Solutions{" "}
          </h1>

          <p className="text-white/90 max-w-xl mb-10 text-sm md:text-base leading-relaxed px-2">
            Aro Mauris ultricies leo vel nibdunt lobortis the challenge. Comados
            nibierghe megurito est quam actum eist.
          </p>

          {/* Call-to-action button now moves slide */}
          <a href="/works">
            <button
              onClick={nextSlide}
              className="bg-transparent border-2 border-white text-white px-10 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Our Works
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
