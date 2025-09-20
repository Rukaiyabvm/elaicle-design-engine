import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProductsPreview from "@/components/ProductsPreview";
import SustainabilityPreview from "@/components/SustainabilityPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Enhanced Animation System with Staggered Reveals
    const observerCallback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add stagger delay for child elements
          const children = entry.target.querySelectorAll('.fade-slide-up, .hover-lift');
          children.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, childIndex * 150); // Staggered animation
          });
          
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    });

    // Observe all animated elements
    document.querySelectorAll('.fade-slide-up, .fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <AboutPreview />
      <ProductsPreview />
      <SustainabilityPreview />
      <TestimonialsPreview />
    </div>
  );
};

export default Index;
