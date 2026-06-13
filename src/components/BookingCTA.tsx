import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Phone, Mail, CheckCircle } from "lucide-react";

interface BookingCTAProps {
  onPreFillBook: (data: { email: string; phone: string }) => void;
}

export default function BookingCTA({ onPreFillBook }: BookingCTAProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (val: string) => {
    return /\S+@\S+\.\S+/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!email.trim() || !validateEmail(email)) {
      newErrors.email = "Please input a valid email.";
    }
    if (!phone.trim() || phone.length < 10) {
      newErrors.phone = "Include a valid contact phone.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onPreFillBook({ email, phone });
  };

  return (
    <section id="book-now" className="py-24 bg-primary-charcoal text-white relative overflow-hidden">
      {/* Decorative luxury abstract circles */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-luxury-gold/5 blur-3xl -z-10" />
      <div className="absolute right-0 bottom-0 w-[450px] h-96 rounded-full bg-luxury-rose/5 blur-3xl -z-10" />

      {/* Decorative vertical bounds */}
      <div className="absolute inset-y-0 left-12 w-px bg-white/5 hidden xl:block" />
      <div className="absolute inset-y-0 right-12 w-px bg-white/5 hidden xl:block" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Core copy */}
        <div className="space-y-4 max-w-2xl mx-auto mb-12">
          <span className="text-[10px] uppercase font-semibold tracking-widest text-[#ECC8C1] block font-mono">
            Elevate Your Skincare Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-snug">
            Ready for your transformation?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
            Enter your details below to activate a priority cosmetic assessment scheduling invitation. Your premier clinical glow awaits in South Congress, Austin.
          </p>
        </div>

        {/* Dynamic conversion layout */}
        <div className="mx-auto max-w-xl bg-[#222222] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Contact Email field */}
              <div className="text-left space-y-1">
                <label className="block text-[10px] uppercase font-semibold text-gray-400 font-mono tracking-wider ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <Mail className="h-4 w-4" />
                  </span>
                  <input
                    type="email"
                    placeholder="isabella@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-gray-600 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition duration-200"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-rose-450 font-medium ml-1 mt-0.5">{errors.email}</p>
                )}
              </div>

              {/* Contact Phone field */}
              <div className="text-left space-y-1">
                <label className="block text-[10px] uppercase font-semibold text-gray-400 font-mono tracking-wider ml-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <Phone className="h-4 w-4" />
                  </span>
                  <input
                    type="tel"
                    placeholder="(512) 555-0199"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-gray-600 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition duration-200"
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-rose-450 font-medium ml-1 mt-0.5">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Submission button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-luxury-gold hover:bg-[#b08865] active:scale-99 text-white font-semibold py-3.5 uppercase tracking-widest text-xs rounded-xl shadow-lg transition-all duration-300 transform flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="h-4 w-4 text-white" />
                Proceed to Secure Calendar
              </button>
            </div>

          </form>

          {/* Secure disclaimer */}
          <p className="text-[10px] text-gray-500 font-mono mt-4">
            🔒 Fully encrypted. We respect your medical details and never spam.
          </p>
        </div>

      </div>
    </section>
  );
}
