import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Zap, Recycle, Target } from "lucide-react";
import { useEffect, useState } from "react";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";

const SustainabilityPreview = () => {
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

    const element = document.getElementById('sustainability-metrics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: Leaf,
      value: "50+",
      unit: "tonnes",
      label: "CO₂ Emissions Reduced",
      color: "text-success"
    },
    {
      icon: Zap,
      value: "95%",
      unit: "",
      label: "Energy Efficiency",
      color: "text-warning"
    },
    {
      icon: Recycle,
      value: "100%",
      unit: "",
      label: "Battery Recyclability",
      color: "text-primary"
    },
    {
      icon: Target,
      value: "3",
      unit: "SDGs",
      label: "UN Goals Aligned",
      color: "text-success"
    }
  ];

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

  return (
    <section 
      className="section-spacing relative overflow-hidden"
      style={{
        backgroundImage: `url(${sustainabilityHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-success/20 text-success px-4 py-2 rounded-full body-small font-medium mb-6">
            SUSTAINABILITY
          </div>
          <h2 className="heading-2 mb-8 text-primary-foreground">
            Moving Forward for a
            <br />
            <span className="text-success">Greener Tomorrow</span>
          </h2>
          <p className="body-large text-primary-foreground/90 max-w-3xl mx-auto">
            At Elaicle, sustainability is at the core of our mission. We believe in transforming urban 
            mobility while protecting our planet, creating cleaner, healthier cities for everyone.
          </p>
        </div>

        {/* Metrics Grid */}
        <div id="sustainability-metrics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center p-8 bg-card/95 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale"
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
              <div className="body-regular text-muted-foreground font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* SDG Goals */}
        <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-3 mb-6 text-foreground">UN Sustainable Development Goals</h3>
              <div className="space-y-6">
                {[
                  {
                    number: "7",
                    title: "Affordable and Clean Energy",
                    description: "Developing energy-efficient battery technologies and promoting clean energy solutions."
                  },
                  {
                    number: "9", 
                    title: "Industry, Innovation, and Infrastructure",
                    description: "Continuous innovation in micro-mobility and energy storage, enhancing sustainable infrastructure."
                  },
                  {
                    number: "11",
                    title: "Sustainable Cities and Communities", 
                    description: "Creating eco-friendly transportation solutions that reduce urban congestion and emissions."
                  }
                ].map((goal) => (
                  <div key={goal.number} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-success/20 text-success rounded-xl flex items-center justify-center font-bold">
                        {goal.number}
                      </div>
                    </div>
                    <div>
                      <h4 className="heading-4 mb-2 text-foreground">{goal.title}</h4>
                      <p className="body-regular text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-block bg-success/10 p-8 rounded-2xl mb-8">
                <Recycle className="w-16 h-16 text-success mx-auto lg:mx-0" />
                <h4 className="heading-4 mt-4 mb-4 text-foreground">Circular Economy</h4>
                <p className="body-regular text-muted-foreground mb-6">
                  Our reward system for battery returns ensures 100% recyclability and promotes circular economy principles.
                </p>
                <div className="text-2xl font-bold text-success">♻️ 100% Recyclable</div>
              </div>

              <Button variant="secondary" size="lg" asChild>
                <Link to="/sustainability" className="flex items-center">
                  Learn More About Our Impact
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityPreview;