import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
const heroImage = "/lovable-uploads/324217eb-769d-4dfa-9923-943917241f1f.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Elaicle Trike 2π Electric Vehicle" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, hsl(211 100% 17.1% / 0.85) 0%, hsl(211 100% 17.1% / 0.3) 50%, transparent 100%)'
      }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="heading-1 mb-8 font-light my-[40px] mx-[40px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Rewriting Conventions,
            <br />
            <span className="text-center text-white">One Trike at a Time</span>
          </h1>
          
          <p className="body-large mb-12 max-w-3xl mx-auto text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            At Elaicle, we envision a world where urban mobility is efficient, sustainable, and effortless. 
            Our electric patrol trikes combine cutting-edge battery technology, intelligent design, and 
            eco-conscious engineering to create a seamless, zero-emission transport solution.
          </p>
          
          

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="secondary" size="lg" asChild className="bg-white text-primary border-white hover:bg-white/90">
              <Link to="/products" className="flex items-center">
                Discover Trike 2π
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/about" className="flex items-center">
                About Elaicle
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="heading-3 mb-2 text-white">25-30km</div>
              <div className="body-regular opacity-90 text-white">Range per Charge</div>
            </div>
            <div className="text-center">
              <div className="heading-3 mb-2 text-white">150min</div>
              <div className="body-regular opacity-90 text-white">Fast Charging</div>
            </div>
            <div className="text-center">
              <div className="heading-3 mb-2 text-white">150kg</div>
              <div className="body-regular opacity-90 text-white">Max Load Capacity</div>
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
    </section>;
};
export default Hero;