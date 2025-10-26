import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
const TestimonialsPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    id: 1,
    name: "Mr. Balakrishnan",
    role: "Former Commissioner of Police",
    organization: "Coimbatore",
    rating: 5,
    content: "Elaicle’s vehicle brings a new dimension to smart patrolling for smart cities. Its design enhances mobility, public engagement, and operational efficiency for ground-level policing.",
    image: "BK"
  }, {
    id: 2,
    name: "Ms. Priyanka",
    role: "Sub-Inspector of Police",
    organization: "Race Course Police Station",
    rating: 5,
    content: "With features like the PA system and easy maneuverability, this vehicle makes field patrolling more efficient and practical. It’s user-friendly and purpose-built for real policing needs.",
    image: "PN"
  }, {
    id: 3,
    name: "Brathikan VM",
    role: "Principal Architect of Research & Development",
    organization: "Kumaraguru Institutions",
    rating: 5,
    content: "Elaicle is a bold step forward in mobility innovation. It’s thoughtfully engineered, functional, and built with real purpose.",
    image: "BR"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  const renderStars = rating => {
    return Array.from({
      length: 5
    }, (_, i) => <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-warning fill-current' : 'text-gray-300'}`} />);
  };
  return <section className="section-spacing section-blue">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full body-small font-medium mb-6">
            TESTIMONIALS
          </div>
          <h2 className="heading-2 mb-8 text-white">
            What Our Customers Say
          </h2>
          <p className="body-large text-white/90 max-w-3xl mx-auto">
            Real experiences from organizations and individuals who have embraced sustainable mobility with Elaicle.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden rounded-3xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {testimonials.map(testimonial => <div key={testimonial.id} className="w-full flex-shrink-0 px-6">
                  <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Quote className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Content */}
                    <blockquote className="body-large text-foreground mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {testimonial.image}
                      </div>
                      <div className="text-left">
                        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</div>
                        <div className="body-small text-muted-foreground">
                          {testimonial.role} • {testimonial.organization}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact" className="flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
        </div>
      </div>
    </section>;
};
export default TestimonialsPreview;
