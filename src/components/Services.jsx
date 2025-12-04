"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Services() {
  const servicesRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Fade up for About + Services Titles & Text
    gsap.fromTo(
      [servicesRef.current],
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    // Animate Each Project Image Individually
    imagesRef.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 120 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
          },
        }
      );
    });
  }, []);
  return (
    <div>
      <section
        className="py-20 md:py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto"
        ref={servicesRef}
      >
        <h2 className="text-4xl font-light uppercase mb-12">
          OUR <span className="text-[red] font-bold">SERVICES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div
            className="relative w-full lg:aspect-[4/3] aspect-[4/4] group cursor-pointer"
            ref={(el) => (imagesRef.current[0] = el)}
          >
            <div
              className="w-full h-full bg-cover bg-center shadow-lg group-hover:opacity-90 transition duration-500"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/1200x/c3/d1/5a/c3d15ad58a93095d02f0848b76c5f664.jpg")',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className=" text-lg tracking-widest text-[red] bg-white bg-opacity-50 px-2 py-1">
                Aluminium Fabricators
              </p>
            </div>
          </div>

          <div
            className="relative w-full lg:aspect-[4/3] aspect-[4/4] group cursor-pointer"
            ref={(el) => (imagesRef.current[1] = el)}
          >
            <div
              className="w-full h-full bg-cover bg-center shadow-lg group-hover:opacity-90 transition duration-500"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/1200x/2e/80/c4/2e80c418d21cdb275453522b9e84a794.jpg")',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className=" text-lg tracking-widest text-[red] bg-white bg-opacity-50 px-2 py-1">
                Gypsum False Ceiling Contractors
              </p>
            </div>
          </div>

          <div
            className="relative w-full lg:aspect-[4/3] aspect-[4/4] group cursor-pointer"
            ref={(el) => (imagesRef.current[1] = el)}
          >
            <div
              className="w-full h-full bg-cover bg-center shadow-lg group-hover:opacity-90 transition duration-500"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/736x/92/7d/aa/927daaa508ce945d89e2b65080a20f4d.jpg")',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className=" text-lg tracking-widest text-[red] bg-white bg-opacity-50 px-2 py-1">
                Mosquito Net Installation
              </p>
            </div>
          </div>

          <div
            className="relative w-full lg:aspect-[4/3] aspect-[4/4] group cursor-pointer"
            ref={(el) => (imagesRef.current[1] = el)}
          >
            <div
              className="w-full h-full bg-cover bg-center shadow-lg group-hover:opacity-90 transition duration-500"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/736x/46/30/af/4630af3303e428ef8f59181a395b10ae.jpg")',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className=" text-lg tracking-widest text-[red] bg-white bg-opacity-50 px-2 py-1">
                Fabricators
              </p>
            </div>
          </div>

          <div
            className="relative w-full lg:aspect-[4/3] aspect-[4/4] group cursor-pointer"
            ref={(el) => (imagesRef.current[1] = el)}
          >
            <div
              className="w-full h-full bg-cover bg-center shadow-lg group-hover:opacity-90 transition duration-500"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/1200x/84/5a/2b/845a2b39496e2c2a84000031e4ca9154.jpg")',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className=" text-lg tracking-widest text-[red] bg-white bg-opacity-50 px-2 py-1">
                False Ceiling Contractors
              </p>
            </div>
          </div>

          <div
            className="relative w-full lg:aspect-[4/3] aspect-[4/4] group cursor-pointer"
            ref={(el) => (imagesRef.current[1] = el)}
          >
            <div
              className="w-full h-full bg-cover bg-center shadow-lg group-hover:opacity-90 transition duration-500"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/1200x/f5/91/07/f59107c9a3e5e9763ba490c2f1f35fa6.jpg")',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className=" text-lg tracking-widest text-[red] bg-white bg-opacity-50 px-2 py-1">
                ACP Fabricators
              </p>
            </div>
          </div>

          <div
            className="relative w-full lg:aspect-[4/3] aspect-[4/4] group cursor-pointer"
            ref={(el) => (imagesRef.current[1] = el)}
          >
            <div
              className="w-full h-full bg-cover bg-center shadow-lg group-hover:opacity-90 transition duration-500"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/736x/8c/d8/67/8cd8675d1e2ed6c10bca1fd6f4e5b1a1.jpg")',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className=" text-lg tracking-widest text-[red] bg-white bg-opacity-50 px-2 py-1">
                Glass Door Dealers
              </p>
            </div>
          </div>

          <div
            className="relative w-full lg:aspect-[4/3] aspect-[4/4] group cursor-pointer"
            ref={(el) => (imagesRef.current[1] = el)}
          >
            <div
              className="w-full h-full bg-cover bg-center shadow-lg group-hover:opacity-90 transition duration-500"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/736x/21/f6/b1/21f6b117dddbb52d4122765d66fa0c1c.jpg")',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className=" text-lg tracking-widest text-[red] bg-white bg-opacity-50 px-2 py-1">
                Aluminium Ladder Dealers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
