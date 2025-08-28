import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
const heroImage = "/lovable-uploads/324217eb-769d-4dfa-9923-943917241f1f.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Subtle Motion */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elaicle Trike 2π Electric Vehicle"
          className="w-full h-full object-cover parallax-slow"
        />
        <div className="absolute inset-0 gradient-shift opacity-80"></div>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, hsl(211 100% 17.1% / 0.85) 0%, hsl(211 100% 17.1% / 0.3) 50%, transparent 100%)'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-6xl mx-auto">
        <div className="fade-in-up stagger-1">
          <h1 className="heading-1 mb-8 font-light mask-slide">
            Rewriting Conventions,
            <br />
            <span className="text-accent animate-float">One Trike at a Time</span>
          </h1>
          
          <p className="body-large mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed fade-in-up stagger-2">
            Pioneering sustainable micro-mobility solutions with advanced energy storage technologies. 
            Experience the future of urban transportation with our electric patrol trike.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up stagger-3">
            <Button variant="secondary" size="lg" asChild className="ripple-effect hover:shadow-button-hover">
              <Link to="/products" className="flex items-center">
                Explore Trike 2π
                <ArrowRight className="ml-2 w-4 h-4 bounce-subtle" />
              </Link>
            </Button>
            
            <Button variant="ghost" size="lg" asChild className="hover:shadow-button-hover">
              <Link to="/contact" className="flex items-center">
                <Play className="mr-2 w-4 h-4 bounce-subtle" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20 fade-in-up stagger-4">
            <div className="text-center hover-lift">
              <div className="heading-3 mb-2 animate-pulse-glow">25-30km</div>
              <div className="body-regular opacity-80">Range per Charge</div>
            </div>
            <div className="text-center hover-lift">
              <div className="heading-3 mb-2 animate-pulse-glow">150min</div>
              <div className="body-regular opacity-80">Fast Charging</div>
            </div>
            <div className="text-center hover-lift">
              <div className="heading-3 mb-2 animate-pulse-glow">150kg</div>
              <div className="body-regular opacity-80">Max Load Capacity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;