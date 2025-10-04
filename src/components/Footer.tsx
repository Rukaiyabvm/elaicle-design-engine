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
      name: "Mission & Vision",
      href: "/about"
    }],
    Products: [{
      name: "Trike 2π",
      href: "/products"
    }, {
      name: "MaaS",
      href: "/maas"
    }],
    Resources: [{
      name: "Blogs",
      href: "/blogs"
    }, {
      name: "Sustainability",
      href: "/sustainability"
    }],
    Contact: [{
      name: "Get in Touch",
      href: "/contact"
    }]
  };
  const socialLinks = [{
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/elaicle"
  }, {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/elaicle"
  }];
  return <footer className="bg-primary border-t border-primary">
      <div className="container px-6 py-12 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => <div key={category}>
              <h3 className="body-regular font-semibold mb-4 text-slate-50">{category}</h3>
              <ul className="space-y-2">
                {links.map(link => <li key={link.name}>
                    <Link to={link.href} className="body-small text-muted-foreground hover:text-primary transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo - Ultra Minimal with half-etched 'e' */}
            <div className="flex items-center space-x-2">
              
              <span className="font-secondary text-xl font-bold tracking-tight text-slate-50">eLAICLE</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(social => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 hover:border-primary-foreground hover:scale-110 transition-all duration-200 text-primary-foreground" aria-label={social.name}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="body-small text-muted-foreground">
                © {currentYear} eLAICLE. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;