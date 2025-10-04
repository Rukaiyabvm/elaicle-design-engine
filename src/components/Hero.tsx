import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
const heroImage = "/lovable-uploads/324217eb-769d-4dfa-9923-943917241f1f.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-end overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Elaicle Trike 2π Electric Vehicle" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-primary/30"></div>
      </div>

      {/* Content - Bottom Left */}
      <div className="relative z-10 text-left text-primary-foreground px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-4xl">
        <div className="fade-in">
          <h1 className="hero-tagline mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Rewriting Conventions,
            <br />
            One Trike at a Time
          </h1>
          
          <p className="body-large mb-8 max-w-2xl text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            At Elaicle, we envision a world where urban mobility is efficient, sustainable, and effortless.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/products" className="flex items-center justify-center">
                Discover Trike 2π
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            <Button variant="ghost" size="lg" asChild>
              <Link to="/about" className="flex items-center justify-center">
                About Elaicle
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default Hero;