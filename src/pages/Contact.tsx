import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-spacing bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center text-primary-foreground">
            <h1 className="heading-1 mb-8">Let's Shape the Future Together</h1>
            <p className="body-large max-w-2xl mx-auto opacity-90">
              Ready to experience sustainable mobility? Get in touch with us for demos, partnerships, or inquiries.
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
              <h2 className="heading-2 mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="focus-ring" />
                  <Input placeholder="Last Name" className="focus-ring" />
                </div>
                <Input placeholder="Email Address" type="email" className="focus-ring" />
                <Input placeholder="Organization" className="focus-ring" />
                <Textarea placeholder="Tell us about your requirements..." className="focus-ring min-h-32" />
                <Button variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="heading-3 mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="heading-4 mb-2">Address</h4>
                    <p className="body-regular text-muted-foreground">
                      Elaicle Headquarters<br />
                      Coimbatore, Tamil Nadu<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="heading-4 mb-2">Phone</h4>
                    <p className="body-regular text-muted-foreground">+91 XXXX XXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="heading-4 mb-2">Email</h4>
                    <p className="body-regular text-muted-foreground">info@elaicle.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="heading-4 mb-2">Business Hours</h4>
                    <p className="body-regular text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="section-spacing bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center text-primary-foreground">
            <h2 className="heading-2 mb-8">Book a Demo Ride</h2>
            <p className="body-large mb-8 max-w-2xl mx-auto opacity-90">
              Experience the Trike 2π firsthand. Schedule a demo at your location or visit our facility.
            </p>
            <Button variant="secondary" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;