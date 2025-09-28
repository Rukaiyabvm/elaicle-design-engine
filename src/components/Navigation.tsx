import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    name: "Sustainability",
    href: "/sustainability"
  }, {
    name: "News",
    href: "/news"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">e</span>
            </div>
            <span className="font-secondary text-2xl font-bold text-blue-950">eLAICLE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`body-regular font-medium transition-colors duration-200 hover:text-primary ${location.pathname === link.href ? "text-primary" : "text-foreground"}`}>
                {link.name}
              </Link>)}
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Book Demo Ride</Link>
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
              <Button variant="default" size="lg" className="w-full mt-4" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Demo Ride
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;