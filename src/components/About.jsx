"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./Services";

gsap.registerPlugin(ScrollTrigger);

const BauenPortfolio = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Fade up for About + Services Titles & Text
    gsap.fromTo(
      [aboutRef.current],
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen font-sans text-black">
      {/* --- Section 1: ABOUT BAUEN --- */}
      <section
        className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto"
        ref={aboutRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col">
            <h2 className="text-4xl font-light uppercase mb-6">
              ABOUT <span className="text-[red] font-bold">ALUPLUS</span>
            </h2>

            <p className="text-sm leading-relaxed mb-6 font-light">
              Established in the year 2016, Aluplus Aluminium in Thodiyur,
              Kollam is a top player in the category Glass Door Dealers in the
              Kollam. This well-known establishment acts as a one-stop
              destination servicing customers both local and from other parts of
              Kollam. Over the course of its journey, this business has
              established a firm foothold in its industry. The belief that
              customer satisfaction is as important as their products and
              services, have helped this establishment garner a vast base of
              customers, which continues to grow by the day. This business
              employs individuals that are dedicated towards their respective
              roles and put in a lot of effort to achieve the common vision and
              larger goals of the company.
            </p>
            <p className="text-sm leading-relaxed mb-6 font-light italic">
              In the near future, this business aims to expand its line of
              products and services and cater to a larger client base. In
              Kollam, this establishment occupies a prominent location in
              Thodiyur. It is an effortless task in commuting to this
              establishment as there are various modes of transport readily
              available. It is at Veluthamanal Jn, Near Juma Masjid, which makes
              it easy for first-time visitors in locating this establishment.{" "}
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] md:aspect-auto">
            <div
              className="w-full h-full bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: 'url("/images/home2.jpg")',
              }}
            />
            <div className="absolute bottom-0 right-0 p-4 bg-black/70">
              <button className="uppercase text-sm tracking-widest text-white px-4 py-2 border border-gray-500 hover:bg-white hover:text-black transition duration-300">
                OUR OFFICE
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="w-11/12 mx-auto border-gray-600 my-10" />
    </div>
  );
};

export default BauenPortfolio;
