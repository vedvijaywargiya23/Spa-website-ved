import React from "react";
import { Sparkles, MapPin, Phone, Instagram, Mail, Clock, ShieldCheck } from "lucide-react";

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white border-t border-gray-100 relative pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-100">
          
          {/* Brand Presentation Columns (4 lines span) */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-charcoal text-luxury-gold">
                <Sparkles className="h-5 w-5" />
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
            
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Austin’s luxury destination for non-surgical rejuvenation. Our medical experts craft custom skincare alignments designed to harmonize and uplift.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-full border border-gray-150 flex items-center justify-center text-gray-500 hover:text-luxury-gold hover:border-luxury-gold transition duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <span className="text-xs font-mono font-medium text-gray-450 hover:text-luxury-gold duration-200">
                @glowaustin
              </span>
            </div>
          </div>

          {/* Quick links & Clinical hours columns (3 lines span) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-primary-charcoal">
              Hours of Sanctuary
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-gray-400">
              <li className="flex justify-between">
                <span>MON - FRI</span>
                <span className="text-primary-charcoal font-medium">09:00 AM - 06:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>SATURDAY</span>
                <span className="text-primary-charcoal font-medium">10:00 AM - 04:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>SUNDAY</span>
                <span className="text-luxury-gold font-medium">CLOSED</span>
              </li>
            </ul>
          </div>

          {/* Clinic Coordinates columns (3 lines span) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-primary-charcoal">
              The Clinic Location
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400">
              <li className="flex items-start gap-2.5 leading-normal">
                <MapPin className="h-4 w-4 text-luxury-gold shrink-0 mt-0.5" />
                <span>
                  1412 S Congress Ave, <br />
                  Austin, TX 78704
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-luxury-gold shrink-0" />
                <a href="tel:5125550199" className="hover:text-primary-charcoal duration-150 font-mono text-primary-charcoal font-semibold">
                  (512) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-luxury-gold shrink-0" />
                <a href="mailto:concierge@glowaustin.com" className="hover:text-primary-charcoal duration-150">
                  concierge@glowaustin.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Reservation Action (2 lines span) */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-start md:items-start">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-primary-charcoal">
              Reservations
            </h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Skip wait times and instantly lock diagnostic skin analysis online.
            </p>
            <button
              onClick={onBookClick}
              className="w-full bg-primary-charcoal text-white hover:bg-zinc-850 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-lg shadow-sm transition duration-150 cursor-pointer text-center"
            >
              Book Now
            </button>
          </div>

        </div>

        {/* Legal and compliance disclaimer (Glossier meets Medical Authority feels) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-400 text-center md:text-left leading-relaxed max-w-2xl font-mono">
            © {new Date().getFullYear()} Glow Aesthetics Austin. All rights reserved. <br />
            Medical Direction: Dr. Caroline Sterling, MD, Licensed Medical Director. Botox, Juvederm, and Kybella are registered trademarks of Allergan Aesthetics.
          </p>

          <div className="flex items-center gap-4 text-[10px] font-semibold text-gray-450 uppercase tracking-widest font-sans shrink-0">
            <span>Privacy Standard</span>
            <span>•</span>
            <span>Treatment Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
