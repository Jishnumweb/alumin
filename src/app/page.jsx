import BauenPortfolio from "@/components/About";
import BenefitsSection from "@/components/Benefits";
import StatsStrip from "@/components/Counter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TestimonialSection from "@/components/Testimonial";
import RecentWorks from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <BauenPortfolio />
      <StatsStrip />
      <RecentWorks />
      <BenefitsSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
