import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Target, Users, Calendar } from "lucide-react";
const bannerImage = "/lovable-uploads/ce10e403-ca16-4a77-8c5d-a5cbbe756455.png";
const About = () => {
  const milestones = [{
    year: "2021",
    title: "Conceptualization",
    description: "Conceptualization of the first Trike prototype—designed for student mobility and future scalability.",
    icon: Lightbulb
  }, {
    year: "2023",
    title: "First Pilot",
    description: "First pilot tested within controlled campus environments, demonstrating real-world utility.",
    icon: Target
  }, {
    year: "2024",
    title: "Public Deployment",
    description: "Expanded trials with Coimbatore City Patrol Officials, proving efficiency, stability, and practicality in urban mobility scenarios.",
    icon: Users
  }];
  const values = [{
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries in electric mobility through cutting-edge technology and creative solutions."
  }, {
    icon: Target,
    title: "Sustainability",
    description: "Committed to reducing environmental impact and promoting circular economy principles."
  }, {
    icon: Users,
    title: "Accessibility",
    description: "Designing mobility solutions that are universal, inclusive, and accessible to all age groups."
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImage}
            alt="Elaicle Trike 2π - About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, hsl(211 100% 17.1% / 0.85) 0%, hsl(211 100% 17.1% / 0.4) 50%, transparent 100%)'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">
            About Elaicle – Innovation Meets Purpose
          </h1>
          <p className="body-large mb-8 opacity-90">
            Rewriting conventions, one trike at a time
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-8">Who We Are</h2>
            <p className="body-large text-muted-foreground mb-8 leading-relaxed">
              Elaicle is a dedicated electric micro-mobility startup focused exclusively on Trike 2π—our compact, 
              eco-friendly electric patrol trike. Our mission is to redefine urban mobility by combining cutting-edge 
              battery technology, efficient design, and sustainability-driven engineering.
            </p>
            <p className="body-regular text-muted-foreground leading-relaxed">
              We design for campuses, industrial complexes, city patrols, and gated communities, ensuring accessible, 
              reliable, and safe mobility for all users. At Elaicle, we believe one small trike can create a ripple 
              effect, advancing cleaner, smarter cities for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">Our Journey</h2>
            <p className="body-large text-muted-foreground">
              From a humble prototype to a public patrol solution, every step reflects passion, precision, and purpose
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => <div key={milestone.year} className="relative">
                  {/* Timeline line */}
                  {index !== milestones.length - 1 && <div className="absolute left-6 top-16 w-0.5 h-24 bg-primary/20 hidden md:block"></div>}
                  
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
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Impact */}
      <section className="section-spacing bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">Sustainability & Impact</h2>
            <h3 className="heading-3 mb-8 text-success">Mobility with a Mission: A Greener Future</h3>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto mb-8">
              Sustainability is the backbone of everything we do. By replacing fuel-based vehicles with electric trikes, 
              Elaicle actively reduces carbon emissions, urban congestion, and environmental impact. Our commitment is 
              reflected in alignment with the United Nations Sustainable Development Goals (SDGs).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="text-5xl font-bold text-success mb-2">7</div>
              <h4 className="heading-4 mb-3">SDG 7</h4>
              <p className="body-regular text-muted-foreground">
                Affordable and Clean Energy: Energy-efficient, swappable battery solutions for uninterrupted, eco-friendly mobility.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="text-5xl font-bold text-success mb-2">9</div>
              <h4 className="heading-4 mb-3">SDG 9</h4>
              <p className="body-regular text-muted-foreground">
                Industry, Innovation, and Infrastructure: Continuous innovation in micro-mobility design and technology, creating sustainable urban infrastructure.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card text-center">
              <div className="text-5xl font-bold text-success mb-2">11</div>
              <h4 className="heading-4 mb-3">SDG 11</h4>
              <p className="body-regular text-muted-foreground">
                Sustainable Cities and Communities: Cleaner, quieter transport solutions that foster livable cities.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-card">
            <h4 className="heading-4 mb-6 text-center">Our Sustainability Initiatives</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-regular text-muted-foreground">Battery Return & Reward Program: Encouraging responsible recycling of used batteries</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-regular text-muted-foreground">Zero-emission urban patrols: Replacing conventional vehicles in campus and municipal mobility</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-8">Vision & Mission</h2>
              
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
                    Drive innovation in battery technologies and energy systems for mobility, storage, drones, 
                    and robotics.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="heading-3 mb-8">Our Values</h3>
              <div className="space-y-6">
                {values.map(value => <div key={value.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="heading-4 mb-2">{value.title}</h4>
                      <p className="body-regular text-muted-foreground">{value.description}</p>
                    </div>
                  </div>)}
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
              {[{
              year: "2027",
              title: "Market Leadership",
              description: "Establish a strong market presence by capturing 20% of the Indian market share.",
              icon: Target
            }, {
              year: "2030",
              title: "Revenue Milestone",
              description: "Achieve ₹300 million in annual revenue, demonstrating significant business growth.",
              icon: Calendar
            }, {
              year: "2035",
              title: "Industry Leader",
              description: "Solidify position as a leading manufacturer in the electric vehicle industry.",
              icon: Users
            }].map((goal, index) => <div key={`${goal.year}-${index}`} className="text-center">
                  <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <goal.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-4">{goal.year}</div>
                    <h3 className="heading-4 mb-4">{goal.title}</h3>
                    <p className="body-regular text-muted-foreground">{goal.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-blue-100">
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
    </div>;
};
export default About;