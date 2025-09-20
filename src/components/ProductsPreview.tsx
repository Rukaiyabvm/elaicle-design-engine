import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Battery, Clock, Users, Gauge, Shield, Recycle } from "lucide-react";

const trikeImages = {
  detail: '/lovable-uploads/8cef69c7-c5f5-4e85-8c05-05a7275978cc.png',
  dashboard: '/lovable-uploads/db87f760-17de-431c-893e-518b4e9c379d.png',
  outdoor: '/lovable-uploads/350f3d73-c0a5-4e81-b799-a7744a1b4cde.png',
  building: '/lovable-uploads/55983431-0851-423d-ae41-574d661ebdce.png',
};

const ProductsPreview = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-slide-up">
          <h2 className="heading-1 mb-6">The Trike 2π</h2>
          <p className="body-large text-muted-foreground">
            Compact three-wheeled electric patrol trike designed for campuses, 
            industrial spaces, and urban micro-mobility needs.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 fade-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <img 
                src={trikeImages.detail}
                alt="Trike 2π Detail View"
                className="w-full h-48 object-cover rounded-lg shadow-image hover-lift"
              />
              <img 
                src={trikeImages.dashboard}
                alt="Trike 2π Dashboard"
                className="w-full h-32 object-cover rounded-lg shadow-image hover-lift"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src={trikeImages.outdoor}
                alt="Trike 2π Outdoor"
                className="w-full h-32 object-cover rounded-lg shadow-image hover-lift"
              />
              <img 
                src={trikeImages.building}
                alt="Trike 2π at Building"
                className="w-full h-48 object-cover rounded-lg shadow-image hover-lift"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8 fade-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover-lift p-4 rounded-lg bg-card">
                <Battery className="w-6 h-6 text-accent mt-1 animate-bounce-subtle" />
                <div>
                  <h3 className="heading-3 mb-2">Long Range</h3>
                  <p className="body-regular text-muted-foreground">
                    Up to 25-30 km range per charge with swappable battery technology
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 hover-lift p-4 rounded-lg bg-card" style={{ animationDelay: '0.1s' }}>
                <Clock className="w-6 h-6 text-accent mt-1 animate-bounce-subtle" />
                <div>
                  <h3 className="heading-3 mb-2">Fast Charging</h3>
                  <p className="body-regular text-muted-foreground">
                    Quick 150-minute charging time for minimal downtime
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 hover-lift p-4 rounded-lg bg-card" style={{ animationDelay: '0.2s' }}>
                <Users className="w-6 h-6 text-accent mt-1 animate-bounce-subtle" />
                <div>
                  <h3 className="heading-3 mb-2">Universal Design</h3>
                  <p className="body-regular text-muted-foreground">
                    Ergonomic design suitable for security patrols and campus mobility
                  </p>
                </div>
              </div>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-hover hover-scale-shadow"
            >
              <Link to="/products">Explore Specifications</Link>
            </Button>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16 fade-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block bg-gradient-hero text-white px-8 py-4 rounded-full">
            <span className="body-large font-semibold">Starting from ₹2,50,000</span>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center p-6 bg-card rounded-lg hover-lift shadow-card">
            <Gauge className="w-8 h-8 mx-auto mb-3 text-accent animate-bounce-subtle" />
            <div className="heading-3 text-foreground">2.5m</div>
            <div className="caption text-muted-foreground">Turning Radius</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg hover-lift shadow-card" style={{ animationDelay: '0.1s' }}>
            <Shield className="w-8 h-8 mx-auto mb-3 text-accent animate-bounce-subtle" />
            <div className="heading-3 text-foreground">99.9%</div>
            <div className="caption text-muted-foreground">Stability</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg hover-lift shadow-card" style={{ animationDelay: '0.2s' }}>
            <Users className="w-8 h-8 mx-auto mb-3 text-accent animate-bounce-subtle" />
            <div className="heading-3 text-foreground">150kg</div>
            <div className="caption text-muted-foreground">Load Capacity</div>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg hover-lift shadow-card" style={{ animationDelay: '0.3s' }}>
            <Recycle className="w-8 h-8 mx-auto mb-3 text-accent animate-bounce-subtle" />
            <div className="heading-3 text-foreground">3 Years</div>
            <div className="caption text-muted-foreground">Battery Life</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;