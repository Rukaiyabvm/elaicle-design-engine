import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    About: [{
      name: "Our Story",
      href: "/about"
    }, {
      name: "Team",
      href: "/about#team"
    }, {
      name: "Mission & Vision",
      href: "/about#mission"
    }, {
      name: "Careers",
      href: "/careers"
    }],
    Products: [{
      name: "Trike 2π",
      href: "/products"
    }, {
      name: "Features",
      href: "/products#features"
    }, {
      name: "Specifications",
      href: "/products#specs"
    }, {
      name: "Pricing",
      href: "/products#pricing"
    }],
    Sustainability: [{
      name: "Our Impact",
      href: "/sustainability"
    }, {
      name: "SDG Goals",
      href: "/sustainability#sdg"
    }, {
      name: "Battery Program",
      href: "/sustainability#battery"
    }, {
      name: "Green Initiatives",
      href: "/sustainability#initiatives"
    }],
    Contact: [{
      name: "Get in Touch",
      href: "/contact"
    }, {
      name: "Support",
      href: "/support"
    }, {
      name: "Partnerships",
      href: "/partnerships"
    }, {
      name: "Media Kit",
      href: "/media"
    }]
  };
  const socialLinks = [{
    name: "Facebook",
    icon: Facebook,
    href: "#"
  }, {
    name: "Twitter",
    icon: Twitter,
    href: "#"
  }, {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#"
  }, {
    name: "Instagram",
    icon: Instagram,
    href: "#"
  }];
  return <footer className="bg-background-dark text-primary-foreground">
      {/* CTA Banner */}
      

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">e</span>
                </div>
                <span className="font-secondary text-2xl font-bold">eLAICLE</span>
              </div>
              <p className="body-regular mb-6 opacity-80">
                Rewriting conventions, one trike at a time. Leading the transformation of urban mobility through sustainable innovation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 opacity-60" />
                  <span className="body-small opacity-80">Coimbatore, Tamil Nadu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 opacity-60" />
                  <span className="body-small opacity-80">info@elaicle.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 opacity-60" />
                  <span className="body-small opacity-80">+91 XXXX XXXXXX</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => <div key={category}>
                <h3 className="heading-4 mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map(link => <li key={link.name}>
                      <Link to={link.href} className="body-regular opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200">
                        {link.name}
                      </Link>
                    </li>)}
                </ul>
              </div>)}
          </div>

          {/* Social Links & Newsletter */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <span className="body-regular font-medium">Follow Us:</span>
                <div className="flex space-x-4">
                  {socialLinks.map(social => <a key={social.name} href={social.href} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200" aria-label={social.name}>
                      <social.icon className="w-4 h-4" />
                    </a>)}
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="body-small opacity-60">
                  © {currentYear} ELAICLE. All rights reserved.
                </p>
                <div className="flex space-x-4 mt-2 justify-center md:justify-end">
                  <Link to="/privacy" className="body-small opacity-60 hover:opacity-100 transition-opacity">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="body-small opacity-60 hover:opacity-100 transition-opacity">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;