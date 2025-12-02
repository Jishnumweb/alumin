"use client";

import React from "react";
import { CheckCircle, Shield, Timer, Award } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Award size={40} />,
      title: "PREMIUM QUALITY",
      desc: "We maintain top-tier build standards with precision engineering and advanced fabrication.",
    },
    {
      icon: <Timer size={40} />,
      title: "ON-TIME DELIVERY",
      desc: "Strategic planning and efficient workflow ensure completion within committed deadlines.",
    },
    {
      icon: <Shield size={40} />,
      title: "TRUST & RELIABILITY",
      desc: "We value transparency and long-term client relationships through honest service.",
    },
    {
      icon: <CheckCircle size={40} />,
      title: "CUSTOM SOLUTIONS",
      desc: "Every project is tailored to meet modern architecture and functional requirements.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="text-4xl font-light uppercase text-black mb-12">
          OUR <span className="text-[red] font-bold">BENEFITS</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-300 p-8 text-center shadow-sm hover:shadow-xl transition rounded-xl cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 text-[red] group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold tracking-wider mb-3 text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-black/70 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Accent Bar */}
              <div className="w-0 group-hover:w-full h-[3px] bg-[red] mt-6 mx-auto transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
