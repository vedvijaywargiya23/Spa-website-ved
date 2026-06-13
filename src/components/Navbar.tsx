import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Before & After", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-90 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#top")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-charcoal text-luxury-gold group-hover:scale-105 duration-300">
              <Sparkles className="h-5 w-5 fill-luxury-gold/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold tracking-wider text-primary-charcoal leading-none">
                GLOW
              </span>
              <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-medium mt-0.5 leading-none">
                Aesthetics
              </span>
            </div>
          </a>

          {/* Desktop Navigation Linkages */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-widest font-medium text-gray-500 hover:text-luxury-gold duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side CTA / Actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:5125550199"
              className="hidden lg:flex items-center gap-1.5 text-xs font-mono font-medium text-gray-600 hover:text-luxury-gold duration-200"
            >
              <Phone className="h-3.5 w-3.5 text-luxury-gold" />
              (512) 555-0199
            </a>

            <button
              onClick={onBookClick}
              className="bg-primary-charcoal text-white hover:bg-zinc-800 text-xs uppercase tracking-wider font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:shadow active:scale-95"
            >
              Book Now
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-luxury-gold p-1.5"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-6 px-4 animate-lux-fade">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-wide text-gray-700 hover:text-luxury-gold py-1 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <div className="flex flex-col gap-3">
              <a
                href="tel:5125550199"
                className="flex items-center gap-2 text-sm text-gray-650 font-medium"
              >
                <Phone className="h-4 w-4 text-luxury-gold" />
                (512) 555-0199
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full text-center bg-luxury-gold/15 text-primary-charcoal border border-luxury-gold/30 hover:bg-luxury-gold text-xs uppercase tracking-widest font-medium py-3 rounded-xl duration-250"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
