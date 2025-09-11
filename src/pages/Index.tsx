import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProductsPreview from "@/components/ProductsPreview";
import SustainabilityPreview from "@/components/SustainabilityPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Animation trigger for fade-in elements
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach((el) => {
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
