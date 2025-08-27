import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Zap, Recycle, Target, Users, Building, Battery } from "lucide-react";
import { useState, useEffect } from "react";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";

const Sustainability = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact-metrics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const CountUpNumber = ({ end, duration = 2000, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const startValue = 0;
      const endValue = parseInt(end);

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * (endValue - startValue) + startValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return <span>{count}</span>;
  };

  const impactMetrics = [
    {
      icon: Leaf,
      value: "50+",
      unit: "tonnes",
      label: "CO₂ Emissions Reduced",
      description: "Through our electric mobility solutions",
      color: "text-success"
    },
    {
      icon: Zap,
      value: "95",
      unit: "%",
      label: "Energy Efficiency",
      description: "Compared to traditional vehicles",
      color: "text-warning"
    },
    {
      icon: Recycle,
      value: "100",
      unit: "%",
      label: "Battery Recyclability",
      description: "Full circular economy implementation",
      color: "text-primary"
    },
    {
      icon: Target,
      value: "3",
      unit: "SDGs",
      label: "UN Goals Aligned",
      description: "Contributing to global sustainability",
      color: "text-success"
    }
  ];

  const sdgData = [
    {
      number: "7",
      title: "Affordable and Clean Energy",
      description: "By developing energy-efficient battery technologies and promoting clean energy solutions for mobility.",
      icon: Zap,
      initiatives: [
        "Advanced lithium-ion battery development",
        "Solar charging station integration",
        "Energy storage optimization"
      ]
    },
    {
      number: "9",
      title: "Industry, Innovation, and Infrastructure",
      description: "Through continuous innovation in micro-mobility and energy storage, enhancing sustainable infrastructure.",
      icon: Building,
      initiatives: [
        "R&D in micro-mobility solutions",
        "Smart charging infrastructure",
        "Technology transfer programs"
      ]
    },
    {
      number: "11",
      title: "Sustainable Cities and Communities",
      description: "By creating eco-friendly transportation solutions that reduce urban congestion and carbon emissions.",
      icon: Users,
      initiatives: [
        "Urban patrol vehicle deployment",
        "Campus mobility solutions",
        "Community engagement programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url(${sustainabilityHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-success/60 to-primary/80"></div>
        
        <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">
            Moving Forward for a
            <br />
            <span className="text-success">Greener Tomorrow</span>
          </h1>
          <p className="body-large mb-12 opacity-90 leading-relaxed">
            Our company is committed to advancing sustainable development by aligning with the United Nations 
            Sustainable Development Goals (SDGs) because at Elaicle, sustainability is at the core of our mission.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="#impact">Explore Our Impact</Link>
          </Button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-8">Our Commitment</h2>
            <p className="body-large text-muted-foreground mb-8 leading-relaxed">
              We believe in transforming urban mobility while protecting our planet. By reducing carbon emissions 
              and promoting eco-friendly transport, we create cleaner, healthier cities for everyone.
            </p>
            <p className="body-regular text-muted-foreground leading-relaxed">
              Our commitment to sustainability drives innovation, ensuring that every ride on an Elaicle trike 
              contributes to a greener future. Our mission is to drive impactful change by integrating 
              sustainability into every aspect of our innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="section-spacing bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">Our Impact</h2>
            <p className="body-large text-muted-foreground">
              Measurable results in our sustainability journey
            </p>
          </div>

          <div id="impact-metrics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactMetrics.map((metric, index) => (
              <div 
                key={metric.label}
                className="text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                </div>
                <div className="heading-2 mb-2 text-foreground">
                  <CountUpNumber end={metric.value.replace(/\D/g, '')} isVisible={isVisible} />
                  {metric.value.replace(/\d/g, '')}
                  <span className="body-large text-muted-foreground ml-1">{metric.unit}</span>
                </div>
                <div className="body-regular text-foreground font-medium mb-2">{metric.label}</div>
                <div className="body-small text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">UN Sustainable Development Goals</h2>
            <p className="body-large text-muted-foreground">
              Actively contributing to global sustainability initiatives
            </p>
          </div>

          <div className="space-y-16">
            {sdgData.map((sdg, index) => (
              <div key={sdg.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-reverse' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center font-bold text-2xl">
                      {sdg.number}
                    </div>
                    <div>
                      <h3 className="heading-3 text-foreground">{sdg.title}</h3>
                    </div>
                  </div>
                  
                  <p className="body-large text-muted-foreground mb-8 leading-relaxed">
                    {sdg.description}
                  </p>

                  <div>
                    <h4 className="heading-4 mb-4 text-foreground">Our Initiatives</h4>
                    <ul className="space-y-3">
                      {sdg.initiatives.map((initiative, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <span className="body-regular text-muted-foreground">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card rounded-2xl p-12 shadow-card text-center">
                    <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <sdg.icon className="w-12 h-12 text-success" />
                    </div>
                    <div className="text-6xl font-bold text-success mb-4">SDG {sdg.number}</div>
                    <div className="body-large text-foreground font-medium">{sdg.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="section-spacing bg-success/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-8">Circular Economy Initiative</h2>
              <p className="body-large text-muted-foreground">
                Our comprehensive battery return and recycling program
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Battery className="w-10 h-10 text-success" />
                </div>
                <h3 className="heading-4 mb-4">Purchase</h3>
                <p className="body-regular text-muted-foreground">
                  Every Elaicle trike comes with a high-quality, long-lasting battery designed for optimal performance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-10 h-10 text-success" />
                </div>
                <h3 className="heading-4 mb-4">Return</h3>
                <p className="body-regular text-muted-foreground">
                  When your battery reaches end-of-life, return it to us through our reward program for responsible disposal.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Recycle className="w-10 h-10 text-success" />
                </div>
                <h3 className="heading-4 mb-4">Recycle</h3>
                <p className="body-regular text-muted-foreground">
                  100% recyclable materials are processed into new products, completing the circular economy loop.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 p-8 bg-card rounded-2xl shadow-card">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="heading-3 mb-4 text-success">100% Recyclable Promise</h3>
              <p className="body-regular text-muted-foreground mb-6">
                We guarantee that every battery purchased from us can be fully recycled, with rewards for customers 
                who participate in our return program.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Learn About Rewards</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">Our Sustainability Roadmap</h2>
            <p className="body-large text-muted-foreground">
              Ambitious targets for a sustainable future
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2025",
                  title: "Carbon Neutral Operations",
                  description: "Achieve carbon neutrality in all manufacturing and operational processes."
                },
                {
                  year: "2027",
                  title: "Zero Waste Manufacturing",
                  description: "Implement zero waste production with 100% material recycling and reuse."
                },
                {
                  year: "2030",
                  title: "1 Million Tons CO₂ Saved",
                  description: "Cumulative carbon emissions reduction through our mobility solutions."
                }
              ].map((goal, index) => (
                <div key={goal.year} className="flex items-start space-x-6 p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {goal.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="heading-4 mb-3 text-foreground">{goal.title}</h3>
                    <p className="body-regular text-muted-foreground">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center text-primary-foreground">
            <h2 className="heading-2 mb-8">Join Our Sustainability Mission</h2>
            <p className="body-large mb-8 max-w-2xl mx-auto opacity-90">
              Be part of the solution. Choose sustainable mobility and help us create a cleaner, 
              greener future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/products" className="flex items-center">
                  Explore Our Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;