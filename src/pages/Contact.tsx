import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // "success" | "error" | "sending" | null

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/office@elaicle.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          FirstName: formData.first_name,
          LastName: formData.last_name,
          Email: formData.email,
          Organization: formData.organization,
          Message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          organization: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-spacing section-blue">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="heading-1 mb-8 text-white">Let&apos;s Move Forward Together</h1>
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
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="first_name"
                    placeholder="First Name"
                    className="focus-ring"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="last_name"
                    placeholder="Last Name"
                    className="focus-ring"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Input
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  className="focus-ring"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  name="organization"
                  placeholder="Organization"
                  className="focus-ring"
                  value={formData.organization}
                  onChange={handleChange}
                />

                <Textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  className="focus-ring min-h-32"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <Button
                  variant="default"
                  size="lg"
                  className="w-full hover:scale-105 transition-transform"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                {/* Status message box */}
                {status === "success" && (
                  <div className="mt-4 rounded-lg border border-emerald-500 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Your message has been sent successfully. We&apos;ll get back to you shortly.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 rounded-lg border border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong while sending your message. Please try again in a moment.
                  </div>
                )}
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
                    <p className="body-regular text-muted-foreground">
                      office@elaicle.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="heading-4 mb-2">Phone</h4>
                    <p className="body-regular text-muted-foreground">
                      +91-9500034351
                    </p>
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
                  Partner with Elaicle to accelerate the shift toward clean, efficient mobility. 
                  Whether you&apos;re interested in deploying our trikes or exploring manufacturing 
                  partnerships through MaaS, we&apos;re here to help you succeed.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
