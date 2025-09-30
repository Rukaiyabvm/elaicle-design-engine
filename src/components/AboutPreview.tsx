import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Zap, Heart, ArrowRight } from "lucide-react";
const AboutPreview = () => {
  const pillars = [{
    icon: Lightbulb,
    title: "Design",
    description: "Innovative aesthetics meet functional engineering in every trike we create."
  }, {
    icon: Zap,
    title: "Efficiency",
    description: "Maximizing performance while minimizing environmental impact through smart technology."
  }, {
    icon: Heart,
    title: "Responsibility",
    description: "Committed to sustainable practices and contributing to a greener future."
  }];
  return <section className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full body-small font-medium mb-6">
              OUR STORY
            </div>
            
            <h2 className="heading-2 mb-8">
              Driven by Innovation.
              <br />
              <span className="text-primary">Guided by Sustainability.</span>
            </h2>
            
            <p className="body-regular mb-8 text-muted-foreground leading-relaxed">Elaicle is a Coimbatore-based micro-mobility startup dedicated to transforming the way people move in campuses, industrial complexes, and urban environments. Our journey began with a simple idea in 2021 to create a trike that is compact, reliable, and environmentally responsible. Today, we deliver mobility solutions that merge design excellence with meaningful sustainability.</p>

            <Button variant="default" size="lg" asChild>
              <Link to="/about" className="flex items-center">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right Content - Three Pillars */}
          <div className="fade-in">
            <div className="space-y-8">
              {pillars.map((pillar, index) => <div key={pillar.title} className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <pillar.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="heading-4 mb-3 text-foreground">{pillar.title}</h3>
                      <p className="body-regular text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutPreview;