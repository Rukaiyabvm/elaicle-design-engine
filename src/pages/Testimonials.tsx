import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote, User, Building, Shield } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Campus Security Head",
      organization: "IIT Coimbatore",
      category: "education",
      rating: 5,
      content: "The Trike 2π has revolutionized our campus patrol operations. Its maneuverability in tight spaces and reliable battery life make it perfect for our security rounds. The team can cover more ground efficiently while reducing our carbon footprint. The 5-foot turning radius is particularly impressive for navigating between buildings.",
      image: "RK",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Priya Nair",
      role: "Sustainability Officer",
      organization: "Tech Park Chennai",
      category: "corporate",
      rating: 5,
      content: "Elaicle's commitment to sustainability aligns perfectly with our environmental goals. The trike's energy efficiency and the battery return program demonstrate their dedication to circular economy principles. We've seen a 40% reduction in our security patrol emissions since implementation.",
      image: "PN",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Inspector Murugan",
      role: "Traffic Police",
      organization: "Coimbatore City Police",
      category: "government",
      rating: 5,
      content: "For urban patrolling, the Trike 2π is exceptional. Its stability, quick charging, and ease of use have made our officers more effective in their duties. The vehicle handles well in all weather conditions and the 150-minute charging time fits perfectly with our shift patterns.",
      image: "IM",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Dr. Meera Patel",
      role: "Director of Operations",
      organization: "Apollo Hospitals",
      category: "healthcare",
      rating: 5,
      content: "The Trike 2π has improved our campus mobility significantly. Our security team can respond faster to incidents, and the quiet operation doesn't disturb patients. The universal design means staff of all ages can operate it comfortably.",
      image: "MP",
      date: "March 2024"
    },
    {
      id: 5,
      name: "Arjun Reddy",
      role: "Facility Manager",
      organization: "Infosys Mysore",
      category: "corporate",
      rating: 5,
      content: "The swappable battery feature is genius! We can maintain 24/7 patrol coverage without downtime. The build quality is excellent, and maintenance has been minimal. ROI was achieved within 8 months of deployment.",
      image: "AR",
      date: "December 2023"
    },
    {
      id: 6,
      name: "Colonel Sharma",
      role: "Security Head",
      organization: "Defense Research Lab",
      category: "government",
      rating: 5,
      content: "Reliability and performance are crucial for our operations. The Trike 2π delivers on both fronts. The 150kg load capacity allows our personnel to carry necessary equipment, and the stability during high-speed maneuvers is impressive.",
      image: "CS",
      date: "November 2023"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Reviews', icon: Quote },
    { id: 'education', name: 'Education', icon: User },
    { id: 'corporate', name: 'Corporate', icon: Building },
    { id: 'government', name: 'Government', icon: Shield },
    { id: 'healthcare', name: 'Healthcare', icon: User }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-warning fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const stats = [
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Happy Customers", value: "50+", icon: User },
    { label: "Satisfaction Rate", value: "95%", icon: Quote },
    { label: "Repeat Orders", value: "78%", icon: Building }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center text-primary-foreground">
            <h1 className="heading-1 mb-8">Customer Stories</h1>
            <p className="body-large mb-12 max-w-3xl mx-auto opacity-90">
              Real experiences from organizations and individuals who have embraced sustainable mobility with Elaicle. 
              Discover how our Trike 2π is transforming operations across various sectors.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="heading-3 mb-2">{stat.value}</div>
                  <div className="body-small opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="body-regular font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <h3 className="heading-4 text-foreground">{testimonial.name}</h3>
                      <p className="body-small text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="body-regular text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <div className="body-small text-primary font-medium">
                    {testimonial.organization}
                  </div>
                  <div className="body-small text-muted-foreground">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="section-spacing bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">Success Stories</h2>
            <p className="body-large text-muted-foreground">
              Detailed case studies showing real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-success" />
                </div>
                <div>
                  <h3 className="heading-3">IIT Coimbatore</h3>
                  <p className="body-regular text-muted-foreground">Campus Security Enhancement</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="body-regular text-muted-foreground">Coverage Increase</span>
                  <span className="body-regular font-medium text-success">+60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-regular text-muted-foreground">Response Time</span>
                  <span className="body-regular font-medium text-success">-40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-regular text-muted-foreground">Carbon Footprint</span>
                  <span className="body-regular font-medium text-success">-80%</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" asChild>
                <Link to="/case-studies">Read Full Case Study</Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="heading-3">Coimbatore Police</h3>
                  <p className="body-regular text-muted-foreground">Urban Patrol Efficiency</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="body-regular text-muted-foreground">Patrol Efficiency</span>
                  <span className="body-regular font-medium text-primary">+45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-regular text-muted-foreground">Operational Cost</span>
                  <span className="body-regular font-medium text-primary">-55%</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-regular text-muted-foreground">Officer Satisfaction</span>
                  <span className="body-regular font-medium text-primary">98%</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" asChild>
                <Link to="/case-studies">Read Full Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center text-primary-foreground">
            <h2 className="heading-2 mb-8">Ready to Create Your Success Story?</h2>
            <p className="body-large mb-8 max-w-2xl mx-auto opacity-90">
              Join the growing community of organizations that have transformed their operations with Elaicle. 
              Experience the difference sustainable mobility can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact" className="flex items-center">
                  Book Demo Ride
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;