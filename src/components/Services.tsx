import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Zap, Droplet, User, Grid, Clock, DollarSign, ShieldAlert, ArrowUpRight, Check, X, ArrowLeft } from "lucide-react";
import { Service } from "../types";
import { SERVICES } from "../data";

interface ServicesProps {
  onBookServiceClick: (serviceId: string) => void;
}

export default function Services({ onBookServiceClick }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeDrawerService, setActiveDrawerService] = useState<Service | null>(null);

  const categories = ["All", "Injectables", "Laser Treatments", "Collagen Induction", "Resurfacing", "Facial Care"];

  const filteredServices = selectedCategory === "All"
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  // Map individual treatments to premium aesthetic icons
  const getIcon = (id: string) => {
    switch (id) {
      case "botox-fillers":
        return <Sparkles className="h-5 w-5 text-luxury-gold" />;
      case "laser-hair-removal":
        return <Zap className="h-5 w-5 text-luxury-gold" />;
      case "microneedling":
        return <Grid className="h-5 w-5 text-luxury-gold" />;
      case "chemical-peels":
        return <Droplet className="h-5 w-5 text-luxury-gold" />;
      case "skin-rejuvenation":
        return <User className="h-5 w-5 text-luxury-gold" />;
      default:
        return <Sparkles className="h-5 w-5 text-luxury-gold" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative scroll-mt-12">
      {/* Visual background details */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-luxury-cream/10 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] uppercase font-semibold tracking-widest text-luxury-gold block">
            Clinical Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-primary-charcoal tracking-tight">
            Non-Surgical Curated Treatments
          </h2>
          <div className="h-1 w-12 bg-luxury-gold/50 mx-auto rounded" />
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Discover bespoke clinical plans engineered to lift, smooth, and restore. We pair cutting-edge laser mechanics with artistic injection expertise.
          </p>
        </div>

        {/* Category Filters (Pill design) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary-charcoal text-white shadow-sm"
                  : "bg-luxury-ivory hover:bg-luxury-cream/50 text-gray-400 border border-gray-150"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              layoutId={`service-card-${service.id}`}
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex flex-col justify-between bg-luxury-ivory/40 rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-silk-beige hover:bg-white duration-300 hover:shadow-xl transition-all"
            >
              {/* Card Image and Icon Banner */}
              <div className="space-y-6">
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 border border-gray-100/50">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-102 group-hover:scale-106 duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-primary-charcoal/10 mix-blend-multiply" />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                    {getIcon(service.id)}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold text-primary-charcoal">
                    {service.category}
                  </div>
                </div>

                {/* Card Info details */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-medium text-primary-charcoal group-hover:text-luxury-gold duration-200">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed min-h-[60px]">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action buttons footer */}
              <div className="pt-6 border-t border-gray-100/60 mt-6 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-luxury-gold">
                  {service.duration}
                </span>

                <div className="flex items-center gap-4">
                  {/* Learn More link */}
                  <button
                    onClick={() => setActiveDrawerService(service)}
                    className="text-xs font-mono font-semibold text-gray-500 hover:text-primary-charcoal uppercase tracking-widest duration-150 cursor-pointer flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    Learn More
                    <ArrowUpRight className="h-3.5 w-3.5 text-luxury-gold" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Drawer Interface */}
      <AnimatePresence>
        {activeDrawerService && (
          <div className="fixed inset-0 z-110 flex justify-end">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDrawerService(null)}
              className="absolute inset-0 bg-primary-charcoal/70 backdrop-blur-xs"
            />

            {/* Sliding Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-lg bg-white h-full shadow-2xl border-l border-silk-beige flex flex-col justify-between overflow-hidden"
            >
              {/* Top sticky bar */}
              <div className="bg-luxury-ivory px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
                <button
                  onClick={() => setActiveDrawerService(null)}
                  className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-primary-charcoal transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  onClick={() => setActiveDrawerService(null)}
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-primary-charcoal transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body elements scrollable scroll container */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-8">
                {/* Header title */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-semibold font-mono tracking-widest text-luxury-gold px-2.5 py-1 rounded bg-luxury-cream inline-block">
                    {activeDrawerService.category}
                  </span>
                  <h3 className="font-serif text-3xl font-light text-primary-charcoal leading-tight">
                    {activeDrawerService.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {activeDrawerService.shortDesc}
                  </p>
                </div>

                {/* Hero image panel */}
                <div className="h-48 w-full rounded-xl overflow-hidden border border-gray-100">
                  <img
                    src={activeDrawerService.imageUrl}
                    alt={activeDrawerService.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Pricing / Duration specifications */}
                <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-4 font-mono text-xs">
                  <div className="space-y-1.5 border-r border-gray-100">
                    <p className="text-gray-450 uppercase tracking-wider text-[9px] font-semibold">TREATMENT TIME</p>
                    <p className="text-primary-charcoal font-semibold flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-luxury-gold shrink-0" />
                      {activeDrawerService.duration}
                    </p>
                  </div>
                  <div className="space-y-1.5 pl-4">
                    <p className="text-gray-450 uppercase tracking-wider text-[9px] font-semibold">VALUE INVESTMENT</p>
                    <p className="text-primary-charcoal font-semibold flex items-center gap-1.5">
                      <DollarSign className="h-3.5 w-3.5 text-luxury-gold shrink-0" />
                      {activeDrawerService.price}
                    </p>
                  </div>
                </div>

                {/* Benefits breakdown */}
                <div className="space-y-4">
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-primary-charcoal">
                    Key Esthetic Benefits:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeDrawerService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-500">
                        <Check className="h-4 w-4 text-luxury-gold shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Security and clinical parameters */}
                <div className="bg-luxury-ivory p-5 rounded-xl border border-silk-beige space-y-4">
                  <div className="space-y-1 text-xs">
                    <h5 className="font-semibold text-primary-charcoal font-mono uppercase tracking-wider text-[9px] flex items-center gap-1.5 text-luxury-gold">
                      <ShieldAlert className="h-3.5 w-3.5 text-luxury-gold" />
                      Clinical Authority Profile
                    </h5>
                    <p className="text-gray-500 leading-relaxed pt-1">{activeDrawerService.safety}</p>
                  </div>

                  <div className="h-px bg-gray-150" />

                  <div className="space-y-1 text-xs">
                    <h5 className="font-semibold text-primary-charcoal font-mono uppercase tracking-wider text-[9px]">
                      Recovery & Aftercare Expectation
                    </h5>
                    <p className="text-gray-500 leading-relaxed pt-1">{activeDrawerService.recovery}</p>
                  </div>
                </div>
              </div>

              {/* Bottom sticky conversion trigger */}
              <div className="p-6 border-t border-gray-100 bg-white shadow-xl shrink-0">
                <button
                  onClick={() => {
                    const serId = activeDrawerService.id;
                    setActiveDrawerService(null);
                    onBookServiceClick(serId);
                  }}
                  className="w-full bg-primary-charcoal text-white hover:bg-zinc-850 py-4 uppercase tracking-widest text-xs font-semibold rounded-lg shadow transition-all transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4 text-luxury-gold" />
                  Schedule {activeDrawerService.name} Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
