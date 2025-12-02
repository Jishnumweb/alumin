"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

export default function Hero() {
  const [activeNav, setActiveNav] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navItems = ["HOME", "ABOUT", "SERVICES", "GALLERY", "CONTACT"];

  const heroImages = [
    "https://images.pexels.com/photos/2530342/pexels-photo-2530342.jpeg",
    "https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg",
    "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
  ];

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

        {/* NAVBAR */}
        <header className="relative z-20">
          <div className="container mx-auto max-w-7xl px-4 py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="text-white font-bold text-2xl tracking-wide">
              ALU<span className="text-red-500">PLUS</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`uppercase text-sm tracking-widest transition-colors ${
                    activeNav === item
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="md:hidden bg-black/80 backdrop-blur-md py-6 space-y-4 text-center animate-fadeIn">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveNav(item);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-white text-sm tracking-widest hover:text-red-400 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </header>

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
          <button
            onClick={nextSlide}
            className="bg-transparent border-2 border-white text-white px-10 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Next Slide
          </button>
        </div>

        {/* SLIDER CONTROLS */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
