"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("HOME");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["ABOUT", "SERVICES", "WORKS", "CONTACT"];

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto max-w-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src="/images/logo.png"
              alt="Aluplus-logo"
              className="lg:h-8 h-6 object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              href={`#${item}`}
              key={item}
              onClick={() => setActiveNav(item)}
              className={`uppercase text-sm tracking-widest transition-colors ${
                activeNav === item
                  ? isScrolled
                    ? "text-black"
                    : "text-white"
                  : isScrolled
                  ? "text-black/50 hover:text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white py-6 space-y-4 text-center shadow-lg">
          {navItems.map((item) => (
            <a
              href={`#${item}`}
              key={item}
              onClick={() => {
                setActiveNav(item);
                setMenuOpen(false);
              }}
              className="block w-full text-black text-sm tracking-widest hover:text-red-500 py-2"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
