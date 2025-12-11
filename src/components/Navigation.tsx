import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import elaicLogo from "@/assets/elaicle-logo.png";
import BookDemoModal from "./BookDemoModal";

const SCROLL_THRESHOLD = 56; // px

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Trike 2π", href: "/products" },
  { name: "MaaS", href: "/maas" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const mediaHandler = () => setReduceMotion(media.matches);
    media.addEventListener?.("change", mediaHandler);
    return () => media.removeEventListener?.("change", mediaHandler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const transitionClass = reduceMotion ? "transition-none" : "transition-all duration-300 ease-out";

  return (
    <>
      <header
        className={`fixed inset-x-4 top-4 z-50 ${transitionClass}`}
        aria-hidden={false}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`w-full rounded-3xl overflow-hidden ${transitionClass} ${
            isScrolled
              ? "bg-white/60 dark:bg-black/60 backdrop-blur-md border border-gray-200/20 shadow-md"
              : "bg-transparent border border-transparent shadow-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex items-center justify-between h-16">
              {/* Brand */}
              <Link to="/" className="flex items-center gap-3 no-underline">
                <div
                  className={`flex items-center justify-center rounded-full w-10 h-10 flex-shrink-0 ${
                    isScrolled ? "bg-primary text-white" : "bg-white/20 text-white"
                  }`}
                >
                  <img src={elaicLogo} alt="Elaicle logo" className="h-8 object-contain" />
                </div>

                <span
                  className={`ml-1 font-semibold tracking-tight text-sm ${
                    isScrolled ? "text-gray-900 dark:text-gray-100 opacity-100" : "text-white opacity-0"
                  } ${transitionClass}`}
                  aria-hidden={!isScrolled}
                >
                  Elaicle
                </span>
              </Link>

              {/* Desktop Links */}
              <div className="hidden lg:flex items-center space-x-8">
                <div className="flex items-center space-x-6">
                  {navLinks.map((link) => {
                    const active = location.pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 ${
                          isScrolled
                            ? active
                              ? "text-primary"
                              : "text-gray-800 hover:text-primary"
                            : active
                            ? "text-white underline"
                            : "text-white hover:text-white/90"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                <Button
                  variant="default"
                  size="lg"
                  onClick={() => setBookDemoOpen(true)}
                >
                  Book Demo Ride
                </Button>
              </div>

              {/* Mobile Controls */}
              <div className="lg:hidden flex items-center">
                <button
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen((s) => !s)}
                  className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Panel */}
          <div
            className={`lg:hidden ${transitionClass} overflow-hidden ${
              mobileOpen ? "max-h-[500px] ease-out" : "max-h-0"
            }`}
            aria-hidden={!mobileOpen}
          >
            <div className="px-5 pb-6 pt-4 bg-background/80 border-t border-gray-200/10">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-base font-medium text-foreground py-2 px-2 rounded-md hover:bg-gray-100/50"
                  >
                    {link.name}
                  </Link>
                ))}

                <Button
                  variant="default"
                  size="lg"
                  className="mt-3"
                  onClick={() => {
                    setMobileOpen(false);
                    setBookDemoOpen(true);
                  }}
                >
                  Book Demo Ride
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={bookDemoOpen} onClose={() => setBookDemoOpen(false)} />
    </>
  );
}
