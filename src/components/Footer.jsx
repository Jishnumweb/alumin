"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-widest mb-4">
              ALU<span className="text-[red]">PLUS</span>
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We deliver premium aluminium fabrication designs with innovative
              engineering & quality craftsmanship.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-[red] hover:border-[red] transition"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-[red] cursor-pointer">About Us</li>
              <li className="hover:text-[red] cursor-pointer">Services</li>
              <li className="hover:text-[red] cursor-pointer">Works</li>
              <li className="hover:text-[red] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest mb-4">
              CONTACT
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[red]" />
                Aluplus Aluminium, Near Sree Budha School, Sree Budha Road
                Veluthamanal, Thodiyur, Kollam-690523, Kerala
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[red]" />
                +91 7034751431 | 8075255573
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[red]" />
                aluplus7575@gmail.com
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest mb-4">
              SUBSCRIBE
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe for updates & exclusive offers.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-gray-600 px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-[red] px-4 py-2 text-sm tracking-widest font-semibold hover:bg-white hover:text-black transition">
                SEND
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 ALUPLUS. All Rights Reserved.</p>
          <p className="mt-3 md:mt-0">
            Designed by{" "}
            <span className="text-[red] font-semibold">
              <a href="https://jishnum.in">JISHNU M</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
