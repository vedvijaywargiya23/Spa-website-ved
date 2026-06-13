import { motion } from "motion/react";
import { ShieldCheck, Users, Sparkles, Award, ShieldAlert } from "lucide-react";
import { TRUST_POINTS } from "../data";

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="h-6 w-6 text-luxury-gold" />;
      case "Users":
        return <Users className="h-6 w-6 text-luxury-gold" />;
      case "Sparkles":
        return <Sparkles className="h-6 w-6 text-luxury-gold" />;
      default:
        return <Award className="h-6 w-6 text-luxury-gold" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-luxury-cream/35 relative scroll-mt-12 overflow-hidden">
      {/* Abstract luxury geometric arcs */}
      <div className="absolute -right-16 top-10 h-72 w-72 rounded-full border border-silk-beige -z-10 animate-subtle-pulse" />
      <div className="absolute -left-20 bottom-10 h-96 w-96 rounded-full border border-silk-beige -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout and Header Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Aesthetic copy columns */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase font-semibold tracking-widest text-luxury-gold block">
              Confidence & Quality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-primary-charcoal tracking-tight leading-[1.12]">
              A Medical Approach to Pure Radiance
            </h2>
            <div className="h-[2px] w-14 bg-luxury-gold" />
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              At Glow Aesthetics, we believe clinical beauty should never feel artificial or industrial. We pair highly scrutinized safety rules, sterile pristine environments, and FDA-approved technology with a luxurious, comforting experience.
            </p>
            
            {/* Embedded Quote banner */}
            <div className="border-l-2 border-luxury-rose p-4 bg-white rounded-r-xl space-y-1">
              <p className="font-serif italic text-xs sm:text-sm text-gray-550">
                "Our mission is simple: to make you look like yourself, fully rested, beautifully proportioned, and unstoppable."
              </p>
              <p className="text-[9px] uppercase tracking-wider font-semibold text-primary-charcoal pt-1 font-mono">
                — DR. CAROLINE STERLING, MEDICAL DIRECTOR
              </p>
            </div>
          </div>

          {/* 3 Trust points grid Column */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
              {TRUST_POINTS.map((point, index) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100/50 hover:border-silk-beige/60 hover:shadow-lg duration-300 transition-all"
                >
                  {/* Icon highlight envelope */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-luxury-cream/80 text-luxury-gold shrink-0">
                    {getIcon(point.icon)}
                  </div>

                  {/* Point Content */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-medium text-primary-charcoal">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Localized stats highlight banner underneath */}
        <div className="mt-20 pt-16 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl font-light text-luxury-gold">100%</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">FDA-Approved Tech</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl font-light text-luxury-gold">500+</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Austin Clients Served</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl font-light text-luxury-gold">0%</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Artificial Overfills</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl font-light text-luxury-gold">15+</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Years Med Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
}
