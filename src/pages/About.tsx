import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Target, Users, Calendar } from "lucide-react";
import trikeHero from "@/assets/trike-hero.jpg";

const About = () => {
  const milestones = [
    {
      year: "2021",
      title: "Initial Concept",
      description: "Our founder conceptualized and developed the initial version of the Trike, addressing mobility requirements and campus patrol needs.",
      icon: Lightbulb
    },
    {
      year: "2023", 
      title: "First Pilot Model",
      description: "Successfully tested the first pilot model in controlled campus premises, validating our design and functionality.",
      icon: Target
    },
    {
      year: "2023",
      title: "Public Deployment", 
      description: "Second pilot model deployed in public settings, experienced by Coimbatore City Patrol Officials with positive feedback.",
      icon: Users
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries in electric mobility through cutting-edge technology and creative solutions."
    },
    {
      icon: Target,
      title: "Sustainability", 
      description: "Committed to reducing environmental impact and promoting circular economy principles."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Designing mobility solutions that are universal, inclusive, and accessible to all age groups."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url(${trikeHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        
        <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">
            Rewriting Conventions!
          </h1>
          <p className="body-large mb-8 opacity-90">
            Envisioning Sustainability, One Step at a Time
          </p>
          <blockquote className="body-large italic mb-8 opacity-80">
            "We aim to contribute our part to a sustainable world, even if that is a 0.0000000000001%"
          </blockquote>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-8">Our Story</h2>
            <p className="body-large text-muted-foreground mb-8 leading-relaxed">
              We, Elaicle are an Electric automotive manufacturing enterprise, specialising in micro-mobility 
              and pioneering change with a concentration in Energy Storage. Based in Coimbatore, ELAICLE has 
              been redefining green innovations and the mobility game.
            </p>
            <p className="body-regular text-muted-foreground leading-relaxed">
              A startup that is committed to exponentially amplifying our impact, creating ripples of positive 
              change with a Greener Mobility and Energy Retention. By integrating advanced energy storage 
              solutions, we ensure efficiency and longevity in our mobility systems.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">Our Milestones</h2>
            <p className="body-large text-muted-foreground">
              Key moments that shaped our journey towards sustainable mobility
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  {/* Timeline line */}
                  {index !== milestones.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-24 bg-primary/20 hidden md:block"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                    {/* Year & Icon */}
                    <div className="flex items-center space-x-4 flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        <milestone.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex-1">
                      <h3 className="heading-4 mb-3">{milestone.title}</h3>
                      <p className="body-regular text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Mission & Vision */}
            <div>
              <h2 className="heading-2 mb-8">Mission & Vision</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="heading-4 mb-4 text-primary">Our Vision</h3>
                  <p className="body-regular text-muted-foreground leading-relaxed">
                    To lead the transformation of transportation by pioneering sustainable micro-mobility 
                    solutions, ensuring a future where clean energy powers every journey.
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-4 mb-4 text-primary">Our Mission</h3>
                  <p className="body-regular text-muted-foreground leading-relaxed">
                    At Elaicle, we drive innovation in battery technologies and energy systems to create 
                    efficient, eco-friendly solutions for micro-mobility, energy storage, drones, and 
                    robotics—advancing a cleaner, more sustainable future.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="heading-3 mb-8">Our Values</h3>
              <div className="space-y-6">
                {values.map((value) => (
                  <div key={value.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="heading-4 mb-2">{value.title}</h4>
                      <p className="body-regular text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="section-spacing bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <blockquote className="heading-3 mb-8 font-light italic">
              "Innovation thrives where passion meets purpose."
            </blockquote>
            <p className="body-large mb-6 opacity-90">
              Driven by a vision for sustainable mobility, I believe in creating efficient, eco-friendly 
              solutions that redefine transportation. My journey with Elaicle is fueled by a commitment 
              to clean energy and impactful innovation.
            </p>
            <p className="body-regular opacity-80 mb-8">
              Together, we are shaping a future where technology and sustainability go hand in hand.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center text-2xl font-bold">
                SA
              </div>
              <div className="text-left">
                <div className="heading-4">Shakeel Akhtar S</div>
                <div className="body-regular opacity-80">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Timeline */}
      <section className="section-spacing bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">Our Goals</h2>
            <p className="body-large text-muted-foreground">
              Ambitious targets that drive our vision forward
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2027",
                  title: "Market Leadership",
                  description: "Establish a strong market presence by capturing 20% of the Indian market share.",
                  icon: Target
                },
                {
                  year: "2030", 
                  title: "Revenue Milestone",
                  description: "Achieve ₹300 million in annual revenue, demonstrating significant business growth.",
                  icon: Calendar
                },
                {
                  year: "2035",
                  title: "Industry Leader",
                  description: "Solidify position as a leading manufacturer in the electric vehicle industry.",
                  icon: Users
                }
              ].map((goal) => (
                <div key={goal.year} className="text-center">
                  <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <goal.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-4">{goal.year}</div>
                    <h3 className="heading-4 mb-4">{goal.title}</h3>
                    <p className="body-regular text-muted-foreground">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="heading-2 mb-8">Ready to Join Our Journey?</h2>
            <p className="body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the future of sustainable mobility with Elaicle. Let's shape a greener tomorrow together.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact" className="flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;