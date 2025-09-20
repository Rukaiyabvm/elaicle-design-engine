import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Battery, Clock, Weight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Gradient Motion */}
      <div 
        className="absolute inset-0 bg-gradient-hero bg-[length:400%_400%] animate-gradient-shift"
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Animated Headline */}
          <h1 className="heading-hero text-white animate-mask-slide">
            Envisioning Sustainability, One Trike at a Time
          </h1>
          
          {/* Animated Subtext */}
          <p className="body-large text-white/90 max-w-2xl mx-auto fade-slide-up" 
             style={{ animationDelay: '0.3s' }}>
            We aim to contribute our part to a sustainable world, even if that is a 0.0000000000001%
          </p>
          
          {/* Animated CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-slide-up"
               style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-hover hover-scale-shadow"
            >
              <Link to="/products">Explore Our Trike</Link>
            </Button>
            <Button 
              asChild 
              variant="secondary" 
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm hover-scale-shadow"
            >
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto fade-slide-up"
             style={{ animationDelay: '0.9s' }}>
          <div className="text-center hover-lift p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Battery className="w-8 h-8 mx-auto mb-3 text-accent animate-bounce-subtle" />
            <div className="heading-3 text-white font-bold">25-30 km</div>
            <div className="caption text-white/80">Range per Charge</div>
          </div>
          
          <div className="text-center hover-lift p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
               style={{ animationDelay: '0.15s' }}>
            <Clock className="w-8 h-8 mx-auto mb-3 text-accent animate-bounce-subtle" />
            <div className="heading-3 text-white font-bold">150 min</div>
            <div className="caption text-white/80">Fast Charging</div>
          </div>
          
          <div className="text-center hover-lift p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
               style={{ animationDelay: '0.3s' }}>
            <Weight className="w-8 h-8 mx-auto mb-3 text-accent animate-bounce-subtle" />
            <div className="heading-3 text-white font-bold">150 kg</div>
            <div className="caption text-white/80">Max Load Capacity</div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;