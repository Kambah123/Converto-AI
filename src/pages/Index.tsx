import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Demo from "@/components/Demo";
import Contact from "@/components/Contact";

import Footer from "@/components/Footer";
import { Tiles } from "@/components/Tiles";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Tiles background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Tiles rows={24} cols={24} tileSize="md" />
      </div>
      <Navbar />
      <main className="space-y-4 sm:space-y-8 pt-16 sm:pt-20"> {/* Added top padding for mobile nav */}
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Demo />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
