import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-spacing section-blue">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="heading-1 mb-8 text-white">Let's Move Forward Together</h1>
            <p className="body-large max-w-2xl mx-auto opacity-90">
              Have questions, partnership ideas, or want to bring Trike 2π to your community? Connect with us 
              and become part of the future of sustainable mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="heading-2 mb-8 text-primary">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="focus-ring" />
                  <Input placeholder="Last Name" className="focus-ring" />
                </div>
                <Input placeholder="Email Address" type="email" className="focus-ring" />
                <Input placeholder="Organization" className="focus-ring" />
                <Textarea placeholder="Tell us about your requirements..." className="focus-ring min-h-32" />
                <Button variant="default" size="lg" className="w-full hover:scale-105 transition-transform">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="heading-3 mb-8 text-primary">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="heading-4 mb-2">Email</h4>
                    <p className="body-regular text-muted-foreground">office@elaicle.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="heading-4 mb-2">Phone</h4>
                    <p className="body-regular text-muted-foreground">+91-9500034351</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="heading-4 mb-2">Address</h4>
                    <p className="body-regular text-muted-foreground">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="body-regular text-foreground leading-relaxed">
                  Partner with Elaicle to accelerate the shift toward clean, efficient mobility. Whether you're 
                  interested in deploying our trikes or exploring manufacturing partnerships through MaaS, we're 
                  here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      
    </div>;
};
export default Contact;