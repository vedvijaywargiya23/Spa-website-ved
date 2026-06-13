import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const headerOffset = 85;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-luxury-cream/40 via-white to-luxury-ivory"
    >
      {/* Absolute Aesthetic background elements */}
      <div className="absolute top-1/4 right-[5%] w-96 h-96 rounded-full bg-luxury-rose/20 blur-3xl -z-10 animate-subtle-pulse" />
      <div className="absolute bottom-1/12 left-[10%] w-[500px] h-96 rounded-full bg-silk-beige/25 blur-3xl -z-10" />

      {/* Decorative vertical lines representing clinical structure */}
      <div className="absolute inset-y-0 left-12 w-px bg-gray-100/50 hidden xl:block" />
      <div className="absolute inset-y-0 right-12 w-px bg-gray-100/50 hidden xl:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Typographic Hero Columns */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white border border-silk-beige px-3 py-1.5 rounded-full shadow-sm"
            >
              <div className="flex h-2 w-2 rounded-full bg-luxury-gold animate-pulse" />
              <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-gray-500">
                <MapPin className="h-3 w-3 text-luxury-gold" />
                South Congress, Austin • TX
              </div>
            </motion.div>

            {/* Core Display Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-light leading-[1.08] tracking-tight text-primary-charcoal"
              >
                Look Your Best. <br />
                <span className="font-serif italic font-normal text-luxury-gold pr-1">
                  Feel Unstoppable.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-xl mx-auto lg:mx-0 text-gray-500 text-sm sm:text-base font-light leading-relaxed"
              >
                Austin's elite medical-grade sanctuary for clinical aesthetic excellence. We design bespoke, non-surgical beauty plans leveraging board-certified expertise to elevate your native facial harmony.
              </motion.p>
            </div>

            {/* Hero Interactive Triggers */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto bg-primary-charcoal text-white hover:bg-zinc-850 px-8 py-4 uppercase tracking-widest text-xs font-semibold rounded-full shadow-lg transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center gap-2 group"
              >
                Book Your Free Consultation
                <ArrowRight className="h-4 w-4 text-luxury-gold transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto border border-silk-beige bg-white/70 hover:bg-white text-gray-700 px-8 py-4 uppercase tracking-widest text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer text-center"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Core Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 font-mono"
            >
              <span className="flex items-center gap-1.5 font-sans">
                <ShieldCheck className="h-4 w-4 text-luxury-gold" />
                Medical Director Oversight
              </span>
              <span className="h-1 w-1 bg-gray-300 rounded-full hidden sm:block" />
              <span className="flex items-center gap-1.5 font-sans">
                <Sparkles className="h-4 w-4 text-luxury-gold" />
                Natural-Looking Guarantee
              </span>
            </motion.div>
          </div>

          {/* Aesthetic Luxury Frame Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 45, damping: 20, delay: 0.2 }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-[200px] overflow-hidden border-8 border-white shadow-2xl"
            >
              {/* Luxury Image with no-referrer rule */}
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                alt="Aesthetic medical treatments"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 duration-700 ease-out"
              />

              {/* Dynamic Soft Rose Gold Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-charcoal/45 via-transparent to-transparent mix-blend-multiply" />

              {/* Small Overlay Float */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-silk-beige flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-luxury-cream text-luxury-gold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-primary-charcoal leading-tight">
                    "Look Rejuvenated, Not Different"
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5 uppercase tracking-wider">
                    Our Injection Philosophy
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Extra abstract circular framing element */}
            <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border border-silk-beige -z-20 animate-subtle-pulse hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
