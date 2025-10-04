import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, Package, Wrench, CheckCircle, Zap } from "lucide-react";
import maasHeroImage from "@/assets/maas-hero.jpg";
const MaaS = () => {
  const steps = [{
    number: "1",
    title: "Design Input",
    description: "You share your design or prototype concept with our team",
    icon: FileText
  }, {
    number: "2",
    title: "Vendor Sourcing",
    description: "We identify and collaborate with reliable manufacturing vendors",
    icon: Users
  }, {
    number: "3",
    title: "Part Fabrication",
    description: "High-quality parts are produced with strict quality checks",
    icon: Package
  }, {
    number: "4",
    title: "Assembly & Integration",
    description: "Our team assembles, integrates, and tests your product",
    icon: Wrench
  }, {
    number: "5",
    title: "Final Delivery",
    description: "The complete product is handed back—ready to deploy or scale",
    icon: CheckCircle
  }];
  const benefits = [{
    icon: CheckCircle,
    title: "End-to-End Support",
    description: "From design to delivery, we handle every step of the manufacturing process"
  }, {
    icon: Zap,
    title: "Startup-Friendly",
    description: "Cost-effective and scalable solutions tailored for startups and innovators"
  }, {
    icon: Package,
    title: "Quality Assurance",
    description: "Vendor verification combined with rigorous in-house testing"
  }, {
    icon: ArrowRight,
    title: "Time-Efficient",
    description: "Faster turnaround with optimized workflows and established partnerships"
  }, {
    icon: Wrench,
    title: "Flexible",
    description: "Supports prototypes, pilot runs, and scaled production needs"
  }];
  const targetAudience = ["Student innovation teams building next-generation projects", "Early-stage hardware startups needing manufacturing support", "Small enterprises building niche products and solutions", "Research initiatives requiring prototype manufacturing capabilities"];
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img src={maasHeroImage} alt="Manufacturing as a Service - High-tech manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, hsl(211 100% 17.1% / 0.9) 0%, hsl(211 100% 17.1% / 0.6) 60%, hsl(211 100% 17.1% / 0.3) 100%)'
        }}></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8 text-white">
            Your Vision, Our Manufacturing Expertise
          </h1>
          <p className="body-large mb-8 text-white/90 leading-relaxed">
            Elaicle's MaaS bridges the gap between design and reality. We empower startups, student innovators, 
            and small enterprises to manufacture, assemble, and scale their products with ease.
          </p>
        </div>
      </section>

      {/* How MaaS Works */}
      <section className="section-spacing section-grey">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8">How eLAICLE's MaaS Works</h2>
            <p className="body-large text-muted-foreground">
              A streamlined five-step process from concept to completion
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => <div key={step.number} className="relative">
                  {/* Timeline line */}
                  {index !== steps.length - 1 && <div className="absolute left-8 top-20 w-0.5 h-16 bg-primary/20 hidden md:block"></div>}
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                    {/* Step Number & Icon */}
                    <div className="flex items-center space-x-4 flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex-1 flex items-center space-x-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="heading-4 mb-2">{step.title}</h3>
                        <p className="body-regular text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MaaS */}
      <section className="section-spacing section-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-8 text-white">Why Choose Elaicle MaaS?</h2>
            <p className="body-large text-white/90">
              Comprehensive manufacturing solutions designed for innovators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(benefit => <div key={benefit.title} className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-4 mb-4 text-black">{benefit.title}</h3>
                <p className="body-regular text-muted-foreground">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-spacing section-grey">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-8">Who We Work With</h2>
              <p className="body-large text-muted-foreground">
                Supporting innovation across various sectors and stages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="body-large text-foreground">{audience}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing section-blue">
        <div className="container mx-auto px-6">
          <div className="text-center text-primary-foreground">
            <h2 className="heading-2 mb-8 text-white">Let's Build Your Innovation Together</h2>
            <p className="body-large mb-12 max-w-2xl mx-auto opacity-90">
              Ready to transform your design into reality? Connect with our MaaS team and 
              start your manufacturing journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact" className="flex items-center">
                  Enquire About MaaS
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default MaaS;