import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProductsPreview from "@/components/ProductsPreview";
import MaaSPreview from "@/components/MaaSPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import MediaPreview from "@/components/MediaPreview";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      <MaaSPreview />
      <TestimonialsPreview />
      <MediaPreview />
      
      {/* CTA Section */}
      <section className="section-spacing section-blue">
        <div className="container mx-auto px-6">
          <div className="text-center text-primary-foreground">
            <h2 className="heading-2 mb-8 text-white">Join Us in Shaping a Cleaner, Smarter Tomorrow</h2>
            <p className="body-large mb-12 max-w-2xl mx-auto opacity-90">
              From innovation to action, Elaicle is committed to transforming urban mobility and 
              promoting sustainability in every ride. Be part of the change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact" className="flex items-center justify-center">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/contact" className="flex items-center justify-center">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
