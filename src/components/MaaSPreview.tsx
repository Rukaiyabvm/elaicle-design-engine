import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Package, CheckCircle, Zap } from "lucide-react";

const MaaSPreview = () => {
  const services = [
    {
      icon: Package,
      title: "Vendor Sourcing",
      description: "Access to reliable manufacturing vendors for custom components"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Strict quality checks and verification throughout the process"
    },
    {
      icon: Wrench,
      title: "Assembly & Integration",
      description: "Expert in-house assembly, integration, and comprehensive testing"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Optimized workflows for efficient prototype-to-product delivery"
    }
  ];

  return (
    <section className="section-spacing bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full body-small font-medium mb-6">
            MANUFACTURING AS A SERVICE
          </div>
          <h2 className="heading-2 mb-8 text-primary">
            Empowering Startups Through Manufacturing as a Service (MaaS)
          </h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto mb-12">
            We help innovators bring their ideas to life. From sourcing vendors to part fabrication, 
            assembly, and final delivery, Elaicle provides a complete manufacturing ecosystem. Whether 
            you are a student team or an early-stage startup, we make your designs manufacturable and scalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-scale text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-4 mb-3">{service.title}</h3>
              <p className="body-regular text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild className="hover:scale-105 transition-transform">
            <Link to="/maas" className="flex items-center justify-center">
              Explore MaaS
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaaSPreview;
