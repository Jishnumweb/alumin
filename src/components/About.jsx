"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BauenPortfolio = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Fade up for About + Services Titles & Text
    gsap.fromTo(
      [aboutRef.current, servicesRef.current],
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
                backgroundImage:
                  'url("https://i.pinimg.com/1200x/23/af/07/23af07e234725fd0321398a69ac6b026.jpg")',
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

      {/* --- Section 2: OUR PROJECTS --- */}
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
};

export default BauenPortfolio;
