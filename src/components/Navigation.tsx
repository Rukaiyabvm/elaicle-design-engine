import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import elaicLogo from "@/assets/elaicle-logo.png";
import BookDemoModal from "./BookDemoModal";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "About",
    href: "/about"
  }, {
    name: "Products",
    href: "/products"
  }, {
    name: "MaaS",
    href: "/maas"
  }, {
    name: "Blogs",
    href: "/blogs"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/70 backdrop-blur-xl shadow-lg rounded-b-3xl mx-4 mt-2`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={elaicLogo} alt="eLAICLE Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`body-regular font-medium transition-colors duration-200 hover:text-primary ${location.pathname === link.href ? "text-primary" : "text-foreground"}`}>
                {link.name}
              </Link>)}
            <Button variant="default" size="lg" onClick={() => setIsBookDemoOpen(true)}>
              Book Demo Ride
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t shadow-card-hover">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map(link => <Link key={link.name} to={link.href} className="block body-regular font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>)}
              <Button 
                variant="default" 
                size="lg" 
                className="w-full mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookDemoOpen(true);
                }}
              >
                Book Demo Ride
              </Button>
            </div>
          </div>}
      </div>
      <BookDemoModal isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} />
    </nav>;
};
export default Navigation;