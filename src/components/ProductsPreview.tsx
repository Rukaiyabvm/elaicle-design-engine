import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Battery, Gauge, Users } from "lucide-react";
const trikeImages = {
  detail: "/lovable-uploads/8cef69c7-c5f5-4e85-8c05-05a7275978cc.png",
  dashboard: "/lovable-uploads/db87f760-17de-431c-893e-518b4e9c379d.png",
  outdoor: "/lovable-uploads/350f3d73-c0a5-4e81-b799-a7744a1b4cde.png",
  building: "/lovable-uploads/55983431-0851-423d-ae41-574d661ebdce.png"
};
const ProductsPreview = () => {
  const features = [{
    icon: Battery,
    title: "Long Range",
    value: "25-30km",
    description: "Extended range with swappable battery technology"
  }, {
    icon: Gauge,
    title: "Fast Charging",
    value: "150min",
    description: "Quick charge for uninterrupted mobility"
  }, {
    icon: Users,
    title: "Universal Design",
    value: "All Ages",
    description: "Designed for users of all age groups"
  }];
  return <section className="section-spacing bg-zinc-200 section-divider">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up stagger-1">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full body-small font-medium mb-6 animate-pulse-glow">
            OUR PRODUCTS
          </div>
          <h2 className="heading-2 mb-8 mask-slide">
            Meet the 
            <span className="text-primary animate-float"> Trike 2π</span>
          </h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto fade-in-up stagger-2">
            Innovative Electric Patrol Trike for Efficient Mobility. Built for efficiency, 
            stability, and ease of use, enhancing mobility needs and security patrolling.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Gallery */}
          <div className="fade-in-up stagger-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-image hover-lift relative fade-in-up stagger-4">
                  <img src={trikeImages.detail} alt="Trike 2π Detail View" className="w-full h-full object-cover parallax-slow" />
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(135deg, hsl(211 100% 17.1% / 0.2) 0%, transparent 70%)'
                  }}></div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-image hover-lift relative fade-in-up stagger-5">
                  <img src={trikeImages.dashboard} alt="Trike 2π Dashboard Display" className="w-full h-full object-cover parallax-slow" />
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(135deg, hsl(211 100% 17.1% / 0.15) 0%, transparent 60%)'
                  }}></div>
                </div>
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-image hover-lift relative fade-in-up stagger-3">
                <img src={trikeImages.outdoor} alt="Trike 2π Outdoor View" className="w-full h-full object-cover parallax-slow" />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(135deg, hsl(211 100% 17.1% / 0.25) 0%, transparent 80%)'
                }}></div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="fade-in-up stagger-3">
            <h3 className="heading-3 mb-8 mask-slide">Key Features</h3>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => <div key={feature.title} className={`flex items-start space-x-4 hover-lift fade-in-up stagger-${index + 4}`}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center animate-pulse-glow">
                      <feature.icon className="w-6 h-6 text-primary bounce-subtle" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline space-x-3 mb-2">
                      <h4 className="heading-4 text-foreground underline-expand">{feature.title}</h4>
                      <span className="body-large font-medium text-primary animate-float">{feature.value}</span>
                    </div>
                    <p className="body-regular text-muted-foreground">{feature.description}</p>
                  </div>
                </div>)}
            </div>

            <div className="space-y-4 fade-in-up stagger-5">
              <Button variant="default" size="lg" asChild className="ripple-effect hover:shadow-button-hover">
                <Link to="/products" className="flex items-center w-full sm:w-auto">
                  Explore Specifications
                  <ArrowRight className="ml-2 w-4 h-4 bounce-subtle" />
                </Link>
              </Button>
              
              <div className="flex items-center space-x-4 text-muted-foreground hover-lift">
                <span className="body-small">Starting from</span>
                <span className="heading-4 text-primary animate-pulse-glow">₹2.5L*</span>
                <span className="body-small">*Price may vary</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-up stagger-1">
          {[{
          title: "Compact & Maneuverable",
          value: "5ft",
          desc: "Turning radius"
        }, {
          title: "High Stability",
          value: "Low",
          desc: "Tilt during cornering"
        }, {
          title: "Max Load Capacity",
          value: "150kg",
          desc: "Single occupant"
        }, {
          title: "Battery Life",
          value: "3 Years",
          desc: "Swappable design"
        }].map((item, index) => <div key={item.title} className={`text-center p-6 bg-card rounded-2xl shadow-card hover-lift ripple-effect fade-in-up stagger-${index + 2}`}>
              <div className="heading-3 text-primary mb-2 animate-pulse-glow">{item.value}</div>
              <div className="heading-4 mb-2 underline-expand">{item.title}</div>
              <div className="body-small text-muted-foreground">{item.desc}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProductsPreview;