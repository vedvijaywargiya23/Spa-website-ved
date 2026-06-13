import { Star, MessageSquareCode, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { Testimonial } from "../types";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-luxury-cream/15 relative scroll-mt-12 overflow-hidden">
      {/* Decorative text watermark background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-2 pointer-events-none w-full text-center">
        <span className="font-serif text-[120px] md:text-[180px] font-bold text-stroke-gold">
          GLOWING
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] uppercase font-semibold tracking-widest text-luxury-gold block">
            Endorsements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-primary-charcoal tracking-tight">
            Loved By Austin's Most Discerning Residents
          </h2>
          <div className="h-1 w-12 bg-luxury-gold/50 mx-auto rounded" />
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Our results speak for themselves. Read what real clients have to say about our conservative philosophy, warm sanctuary, and professional injection authority.
          </p>
        </div>

        {/* 3 Grid Testimonials Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between p-6 md:p-8 bg-white rounded-2xl border border-gray-150/50 hover:border-silk-beige shadow-sm hover:shadow-lg duration-300 transition-all group"
            >
              <div className="space-y-6">
                {/* 5-Stars Highlight header */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5" id={`stars-${testimonial.id}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-luxury-gold text-luxury-gold"
                      />
                    ))}
                  </div>

                  {/* Verification Indicator Badge */}
                  <div className="flex items-center gap-1 bg-luxury-cream/60 rounded-full px-2.5 py-0.5 text-[9px] font-medium text-luxury-gold border border-silk-beige">
                    <ShieldCheck className="h-3 w-3 text-luxury-gold" />
                    Verified Client
                  </div>
                </div>

                {/* Review Copy paragraph */}
                <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed min-h-[140px] italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Reviewer Details Bottom card */}
              <div className="pt-6 border-t border-gray-100 flex items-center gap-3 mt-6">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 rounded-full object-cover border border-gray-100"
                />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-primary-charcoal">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px] text-gray-400 font-mono">
                    <span className="text-luxury-gold font-medium">{testimonial.treatment}</span>
                    <span>•</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Brand citation details below reviews */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-medium text-gray-500">
            <span>Google Rating</span>
            <span className="text-luxury-gold font-bold">5.0 ★★★★★</span>
            <span>(120+ reviews)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
