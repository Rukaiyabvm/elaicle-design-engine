import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProductsPreview from "@/components/ProductsPreview";
import SustainabilityPreview from "@/components/SustainabilityPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Enhanced animation system with staggered reveals
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Trigger staggered animations for child elements
          const staggerElements = entry.target.querySelectorAll('[class*="stagger-"]');
          staggerElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible');
            }, index * 150); // 0.15s stagger delay
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    });

    // Observe all animation elements
    document.querySelectorAll('.fade-in, .fade-in-up, .mask-slide').forEach((el) => {
      observer.observe(el);
    });

    // Parallax effect for background elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-slow');
      
      parallaxElements.forEach((element) => {
        const speed = 0.4;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen animate-fade-slide">
      <Hero />
      <AboutPreview />
      <ProductsPreview />
      <SustainabilityPreview />
      <TestimonialsPreview />
    </div>
  );
};

export default Index;
