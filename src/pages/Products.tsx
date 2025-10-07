import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Battery, Gauge, Users, Zap, Shield, Wrench } from "lucide-react";
const productImages = {
  hero: "/lovable-uploads/324217eb-769d-4dfa-9923-943917241f1f.png",
  detail: "/lovable-uploads/8cef69c7-c5f5-4e85-8c05-05a7275978cc.png",
  dashboard: "/lovable-uploads/db87f760-17de-431c-893e-518b4e9c379d.png",
  outdoor: "/lovable-uploads/350f3d73-c0a5-4e81-b799-a7744a1b4cde.png",
  building: "/lovable-uploads/55983431-0851-423d-ae41-574d661ebdce.png",
  component: "/lovable-uploads/f0da27a2-a457-40fd-80be-50e4447e3543.png"
};
const Products = () => {
  const specifications = [{
    label: "Range",
    value: "25-30 km",
    icon: Battery
  }, {
    label: "Charging Time",
    value: "150 minutes",
    icon: Zap
  }, {
    label: "Battery Life",
    value: "3 years",
    icon: Shield
  }, {
    label: "Max Load",
    value: "150 kg",
    icon: Gauge
  }, {
    label: "Turning Radius",
    value: "5 feet",
    icon: Users
  }, {
    label: "Maintenance",
    value: "Low",
    icon: Wrench
  }];
  const features = [{
    title: "Compact & Maneuverable",
    description: "Turns within 5 feet, perfect for tight spaces. Engineered for seamless navigation in crowded campuses and urban environments.",
    image: productImages.detail
  }, {
    title: "High Stability",
    description: "Reduced tilt during cornering for safer rides. The three-wheel configuration delivers superior stability for all users.",
    image: productImages.outdoor
  }, {
    title: "Universal Accessibility",
    description: "Comfortable and easy to operate for all age groups. Intuitive controls make it accessible to everyone.",
    image: productImages.dashboard
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-primary">
        <div className="absolute inset-0 z-0">
          <img src={productImages.hero} alt="Elaicle Trike 2π Electric Vehicle" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, hsl(211 100% 17.1% / 0.9) 0%, hsl(211 100% 17.1% / 0.5) 60%, hsl(211 100% 17.1% / 0.3) 100%)'
        }}></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8 text-white">
            Trike 2π – The Future of Electric Mobility
          </h1>
          <p className="body-large mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            The Trike 2π is a compact three-wheeled electric patrol trike designed for manoeuvrability, stability, 
            and eco-friendly performance. Ideal for campuses, city patrols, and industrial complexes, it delivers 
            zero-emission transport with unmatched efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Book Demo Ride</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="#specifications">View Specs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">Trike 2π Overview</h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              The Trike 2π is more than a vehicle—it's a movement toward smarter, cleaner, and more efficient urban mobility. 
              Built for performance, designed for sustainability, and engineered for reliability.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-image hover-scale">
              <img src={productImages.outdoor} alt="Trike 2π Main View" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-image hover-scale">
              <img src={productImages.detail} alt="Trike 2π Detail" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-image hover-scale">
              <img src={productImages.dashboard} alt="Trike 2π Dashboard" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-image hover-scale">
              <img src={productImages.building} alt="Trike 2π Context View" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-spacing section-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8 text-white">Our Features</h2>
            <p className="body-large text-white/90">
              Advanced engineering meets user-centric design
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => <div key={feature.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="heading-3 mb-6 text-white">{feature.title}</h3>
                  <p className="body-large text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-image hover-scale">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="section-spacing section-grey">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">Performance Specs</h2>
            <p className="body-large text-muted-foreground">
              Engineered for efficiency and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {specifications.map(spec => <div key={spec.label} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center hover-scale">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <spec.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="heading-3 text-primary mb-2">{spec.value}</div>
                <div className="body-regular text-muted-foreground">{spec.label}</div>
              </div>)}
          </div>

          {/* Detailed Specs Table */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="heading-3 mb-8 text-center">Detailed Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="heading-4 mb-4 text-primary">Performance</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="body-regular text-muted-foreground">Range per Charge</span>
                    <span className="body-regular font-medium">25-30 km</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="body-regular text-muted-foreground">Charging Time</span>
                    <span className="body-regular font-medium">150 minutes</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="body-regular text-muted-foreground">Battery Life</span>
                    <span className="body-regular font-medium">~3 years</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="body-regular text-muted-foreground">Battery Type</span>
                    <span className="body-regular font-medium">Swappable Li-ion</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="heading-4 mb-4 text-primary">Physical</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="body-regular text-muted-foreground">Max Load Capacity</span>
                    <span className="body-regular font-medium">150 kg</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="body-regular text-muted-foreground">Turning Radius</span>
                    <span className="body-regular font-medium">5 feet</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="body-regular text-muted-foreground">Occupancy</span>
                    <span className="body-regular font-medium">Single rider</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="body-regular text-muted-foreground">Reverse Mode</span>
                    <span className="body-regular font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      

      {/* CTA */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="heading-2 mb-8">Ready to Experience the Future?</h2>
            <p className="body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a demo ride and experience the Trike 2π firsthand. See how our innovative design 
              can transform your mobility needs.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact" className="flex items-center">
                  Book Demo Ride
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/sustainability">Learn About Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Products;