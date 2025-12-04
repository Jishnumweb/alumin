import BauenPortfolio from "@/components/About";
import BenefitsSection from "@/components/Benefits";
import ContactSection from "@/components/Contact";
import StatsStrip from "@/components/Counter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TestimonialSection from "@/components/Testimonial";
import RecentWorks from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="HOME">
        <Hero />
      </div>
      <div id="ABOUT">
        <BauenPortfolio />
      </div>

      <div id="SERVICES">
        <Services />
      </div>

      <StatsStrip />

      <div id="WORKS">
        <RecentWorks />
      </div>

      <BenefitsSection />
      <TestimonialSection />
      <div id="CONTACT">
        <ContactSection />
      </div>
    </>
  );
}
