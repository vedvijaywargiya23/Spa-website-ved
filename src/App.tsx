import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, CheckCircle, Bell, X, ShieldAlert } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BeforeAfterGallery from "./components/BeforeAfterGallery";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [activeToast, setActiveToast] = useState<{ id: number; message: string; subtext: string } | null>(null);

  // Success Booking Callback Notification State
  const [successNotif, setSuccessNotif] = useState<{ name: string; service: string; date: string; time: string } | null>(null);

  // Austin localized reservations (Social Proof notifications)
  const notificationsPool = [
    { message: "Isabella S. from West Lake Hills", subtext: "just booked RF Microneedling" },
    { message: "Harrison G. from South Congress", subtext: "just reserved Botox & Dermal Fillers" },
    { message: "Madeline P. from Tarrytown", subtext: "just booked Medical Chemical Peel" },
    { message: "Chloe W. from Barton Hills", subtext: "just reserved Skin Glow Facials" },
    { message: "Noah L. from Central Austin", subtext: "just booked Laser Hair Removal" }
  ];

  useEffect(() => {
    // Periodically show localized conversions to emulate high popularity
    let timerId = setTimeout(() => {
      triggerNotificationFlow(0);
    }, 6000);

    return () => clearTimeout(timerId);
  }, []);

  const triggerNotificationFlow = (idx: number) => {
    const item = notificationsPool[idx];
    setActiveToast({
      id: Date.now(),
      message: item.message,
      subtext: item.subtext
    });

    // Auto fadeout after 6 seconds
    setTimeout(() => {
      setActiveToast(null);
      // Setup next index
      const nextIdx = (idx + 1) % notificationsPool.length;
      setTimeout(() => {
        triggerNotificationFlow(nextIdx);
      }, 14000); // Wait 14s between bubbles to stay elegant and non-distracting
    }, 6000);
  };

  const handleBookClick = () => {
    setSelectedServiceId(undefined);
    setIsBookingOpen(true);
  };

  const handleBookService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handlePreFillCTABook = (data: { email: string; phone: string }) => {
    // Set service ID as empty or default
    setSelectedServiceId(undefined);
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = (details: { name: string; service: string; date: string; time: string }) => {
    setSuccessNotif(details);
    // Dismiss after 8 seconds
    setTimeout(() => {
      setSuccessNotif(null);
    }, 8000);
  };

  return (
    <div className="relative min-h-screen bg-luxury-ivory text-primary-charcoal selection:bg-luxury-rose selection:text-primary-charcoal overflow-hidden font-sans">
      
      {/* Sticky header */}
      <Navbar onBookClick={handleBookClick} />

      {/* Hero section */}
      <Hero onBookClick={handleBookClick} />

      {/* Services and categories */}
      <Services onBookServiceClick={handleBookService} />

      {/* Trust section details */}
      <WhyChooseUs />

      {/* Before and After slider comparison views */}
      <BeforeAfterGallery />

      {/* Client reviews endorsements */}
      <Testimonials />

      {/* Booking fast ribbon CTA */}
      <BookingCTA onPreFillBook={handlePreFillCTABook} />

      {/* Clinic Coordinates Footer */}
      <Footer onBookClick={handleBookClick} />

      {/* Global reservation calendar Modal overlays */}
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            selectedServiceId={selectedServiceId}
            onSuccess={handleBookingSuccess}
          />
        )}
      </AnimatePresence>

      {/* BOTTOM LEFT ACTIVE RESERVATIONS EMBEDDED TOAST */}
      <AnimatePresence>
        {activeToast && !isBookingOpen && (
          <motion.div
            initial={{ opacity: 0, x: -30, y: 15 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -30, y: 15 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed bottom-6 left-6 z-80 max-w-sm bg-white rounded-xl shadow-xl border border-silk-beige p-4 flex items-start gap-3.5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-luxury-cream text-luxury-gold animate-pulse">
              <Bell className="h-4 w-4" />
            </div>
            <div className="text-left font-sans">
              <p className="text-xs font-semibold text-primary-charcoal">{activeToast.message}</p>
              <p className="text-[10px] text-gray-500 font-medium font-mono mt-0.5">{activeToast.subtext}</p>
            </div>
            <button
              onClick={() => setActiveToast(null)}
              className="text-gray-300 hover:text-gray-600.5 self-center pb-1 p-0.5"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING SUCCESS TOAST WHEN YOU ACTUALLY FINISH BOOKING */}
      <AnimatePresence>
        {successNotif && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-120 w-11/12 max-w-md bg-white border border-luxury-rose border-l-4 border-l-luxury-gold rounded-xl shadow-2xl p-4 flex items-start gap-3 leading-relaxed"
          >
            <div className="flex h-8 w-8 rounded-full bg-luxury-cream text-luxury-gold items-center justify-center shrink-0">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div className="text-left flex-1">
              <h5 className="text-xs font-bold text-primary-charcoal font-serif">Priority Spot Registered!</h5>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Hi <span className="font-semibold text-primary-charcoal">{successNotif.name}</span>, your requested <span className="font-semibold text-primary-charcoal">{successNotif.service}</span> consultation is held for {successNotif.date} at {successNotif.time}. Check your email and SMS.
              </p>
            </div>
            <button onClick={() => setSuccessNotif(null)} className="text-gray-400 hover:text-gray-600">
              <X className="h-4.5 w-4.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
