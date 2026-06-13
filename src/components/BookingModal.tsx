import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar as CalendarIcon, Clock, User, Phone, Mail, MessageSquare, Check, Sparkles, ChevronRight, ChevronLeft, ShieldCheck } from "lucide-react";
import { Service } from "../types";
import { SERVICES } from "../data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
  onSuccess: (details: { name: string; service: string; date: string; time: string }) => void;
}

export default function BookingModal({ isOpen, onClose, selectedServiceId, onSuccess }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset booking form on open
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setService(selectedServiceId || "free-consultation");
      setSelectedDate(null);
      setSelectedTime("");
      setFormData({ name: "", phone: "", email: "", notes: "" });
      setErrors({});
    }
  }, [isOpen, selectedServiceId]);

  // Calendar logic (generating current + next few days)
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const generateDays = () => {
    const totalDays = getDaysInMonth(currentMonth);
    const firstDayIndex = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const days = [];
    
    // Fill in blanks for previous month offset
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
    }
    
    return days;
  };

  const handlePrevMonth = () => {
    const now = new Date();
    if (currentMonth.getMonth() === now.getMonth() && currentMonth.getFullYear() === now.getFullYear()) return;
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const days = generateDays();

  const isDateInPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const timeslots = [
    "09:00 AM",
    "10:15 AM",
    "11:30 AM",
    "01:00 PM",
    "02:15 PM",
    "03:30 PM",
    "04:45 PM"
  ];

  const handleNextStep = () => {
    if (step === 1 && !service) {
      setErrors({ service: "Please select a service to proceed." });
      return;
    }
    if (step === 2) {
      if (!selectedDate) {
        setErrors({ date: "Please select a preferred date." });
        return;
      }
      if (!selectedTime) {
        setErrors({ time: "Please select a convenient time slot." });
        return;
      }
    }
    setErrors({});
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = "Valid email address is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const selectedServiceName = SERVICES.find(s => s.id === service)?.name || "Free Virtual Consultation";
    const dateFormatted = selectedDate ? selectedDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : "";
    
    onSuccess({
      name: formData.name,
      service: selectedServiceName,
      date: dateFormatted,
      time: selectedTime
    });
    
    // Switch to step 4 (Success Screen)
    setStep(4);
  };

  const getMonthYearString = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary-charcoal/80 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-silk-beige"
      >
        {/* Progress Bar */}
        {step < 4 && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-luxury-cream">
            <motion.div
              initial={{ width: "33%" }}
              animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
              className="h-full bg-luxury-gold"
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            {step < 4 ? (
              <h3 className="font-serif text-xl font-medium tracking-tight text-primary-charcoal">
                Book Consultation
              </h3>
            ) : (
              <h3 className="font-serif text-xl font-medium tracking-tight text-luxury-gold flex items-center gap-2">
                <Sparkles className="h-5 w-5 animate-subtle-pulse" />
                Booking Confirmed
              </h3>
            )}
            {step < 4 && (
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">
                Step {step} of 3
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4"
              >
                <div>
                  <label className="block font-serif text-sm font-medium text-primary-charcoal mb-2">
                    Which luxurious aesthetic care do you seek?
                  </label>
                  <p className="text-xs text-gray-500 mb-3">
                    All new clients receive an exhaustive clinical facial assessment and skin analytics session.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      type="button"
                      onClick={() => { setService("free-consultation"); setErrors({}); }}
                      className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                        service === "free-consultation"
                          ? "border-luxury-gold bg-luxury-cream/30 text-primary-charcoal"
                          : "border-gray-200 hover:border-luxury-gold/50 text-gray-600"
                      }`}
                    >
                      <div>
                        <p className="font-medium text-sm">Free Diagnostic Skin Consultation</p>
                        <p className="text-xs text-gray-400">Complete analysis with state board certified specialists.</p>
                      </div>
                      <span className="text-xs font-mono font-medium text-luxury-gold">FREE (30m)</span>
                    </button>
                    {SERVICES.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => { setService(item.id); setErrors({}); }}
                        className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                          service === item.id
                            ? "border-luxury-gold bg-luxury-cream/30 text-primary-charcoal"
                            : "border-gray-200 hover:border-luxury-gold/50 text-gray-600"
                        }`}
                      >
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-gray-400">{item.category}</p>
                        </div>
                        <span className="text-xs font-mono font-medium text-luxury-gold">{item.duration}</span>
                      </button>
                    ))}
                  </div>
                  {errors.service && (
                    <p className="text-xs text-rose-500 mt-2">{errors.service}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleNextStep}
                    className="flex w-full items-center justify-center gap-2 bg-primary-charcoal text-white hover:bg-zinc-800 rounded-lg px-4 py-3 font-medium text-sm transition-colors cursor-pointer"
                  >
                    Select Reservation Date
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4"
              >
                {/* Date Selection */}
                <div>
                  <label className="block font-serif text-sm font-medium text-primary-charcoal mb-2 flex items-center gap-1.5">
                    <CalendarIcon className="h-4 w-4 text-luxury-gold" />
                    Select Appointment Date
                  </label>
                  
                  {/* Calendar view */}
                  <div className="rounded-xl border border-gray-150 p-3 bg-luxury-ivory/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium tracking-wide uppercase text-gray-600">
                        {getMonthYearString(currentMonth)}
                      </span>
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="p-1 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-900 duration-150 disabled:opacity-20"
                          disabled={currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear()}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="p-1 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-900 duration-150"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center mb-1">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                        <span key={d} className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">{d}</span>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {days.map((day, ix) => {
                        if (!day) return <div key={`empty-${ix}`} />;
                        const isPast = isDateInPast(day);
                        const isChosen = selectedDate && day.getDate() === selectedDate.getDate() && day.getMonth() === selectedDate.getMonth() && day.getFullYear() === selectedDate.getFullYear();
                        const ist = isToday(day);

                        return (
                          <button
                            key={day.toISOString()}
                            type="button"
                            disabled={isPast}
                            onClick={() => { setSelectedDate(day); setErrors({}); }}
                            className={`h-8 w-8 text-xs font-mono rounded-full mx-auto flex items-center justify-center transition-all ${
                              isChosen
                                ? "bg-luxury-gold text-white font-semibold"
                                : isPast
                                ? "text-gray-200.5 cursor-not-allowed opacity-20"
                                : ist
                                ? "border border-luxury-rose text-primary-charcoal font-medium hover:bg-luxury-rose/10"
                                : "text-primary-charcoal hover:bg-luxury-cream/40"
                            }`}
                          >
                            {day.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  {errors.date && (
                    <p className="text-xs text-rose-500 mt-1">{errors.date}</p>
                  )}
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block font-serif text-sm font-medium text-primary-charcoal mb-2 flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-luxury-gold" />
                    Select Convenient Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeslots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => { setSelectedTime(t); setErrors({}); }}
                        className={`py-2 text-xs font-mono rounded-lg border text-center transition-all ${
                          selectedTime === t
                            ? "border-luxury-gold bg-luxury-cream/40 text-primary-charcoal font-medium shadow-sm"
                            : "border-gray-200 hover:border-luxury-rose-dark/40 text-gray-600 hover:bg-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {errors.time && (
                    <p className="text-xs text-rose-500 mt-1">{errors.time}</p>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={handlePrevStep}
                    className="flex flex-1 items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-600 rounded-lg px-4 py-3 font-medium text-sm transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="flex flex-1 items-center justify-center gap-2 bg-primary-charcoal text-white hover:bg-zinc-800 rounded-lg px-4 py-3 font-medium text-sm transition-colors cursor-pointer"
                  >
                    Personal Details
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-luxury-cream/20 p-3 rounded-lg border border-luxury-rose/20 text-xs text-gray-600 space-y-1">
                    <p className="font-semibold text-primary-charcoal flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-luxury-gold" />
                      Client Health Verification
                    </p>
                    <p>
                      Selected Treatment: <span className="font-semibold text-primary-charcoal capitalize">{SERVICES.find(s=>s.id===service)?.name || "Free Skin Care Consultation"}</span>
                    </p>
                    <p>
                      Date/Time: <span className="font-semibold text-primary-charcoal">{selectedDate?.toLocaleDateString("en-US", {month:"short", day:"numeric"})} at {selectedTime}</span>
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="E.g., Isabella Sterling"
                        className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                          <Phone className="h-4 w-4" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="(512) 555-0199"
                          className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="isabella@example.com"
                          className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Skin Concerns / Health Remarks (Optional)
                    </label>
                    <div className="relative">
                      <span className="absolute top-2.5 left-0 flex items-start pl-3 text-gray-400">
                        <MessageSquare className="h-4 w-4" />
                      </span>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleFormChange}
                        placeholder="Describe your skin goals (acne scars, fine lines, skin plumping, etc.)"
                        className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex flex-1 items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-600 rounded-lg px-4 py-3 font-medium text-sm transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex flex-1 items-center justify-center gap-2 bg-luxury-gold text-white hover:bg-opacity-90 rounded-lg px-4 py-3 font-medium text-sm transition-colors cursor-pointer"
                    >
                      <Sparkles className="h-4 w-4 text-white" />
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-6"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-luxury-cream text-luxury-gold">
                  <Check className="h-8 w-8 text-luxury-gold" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl font-medium text-primary-charcoal">
                    Your appointment is held, {formData.name.split(" ")[0]}!
                  </h4>
                  <p className="text-sm text-gray-600">
                    A clinical concierge will text and email you within 15 minutes with details.
                  </p>
                </div>

                <div className="bg-luxury-ivory p-4 rounded-xl border border-silk-beige max-w-sm mx-auto text-left space-y-2 text-xs text-gray-600 font-mono">
                  <p className="flex justify-between border-b border-gray-150 pb-1.5">
                    <span className="text-gray-400">RESERVATION ID</span>
                    <span className="font-bold text-primary-charcoal">GA-{Math.floor(Math.random() * 90000) + 10000}</span>
                  </p>
                  <p className="flex justify-between border-b border-gray-150 pb-1.5">
                    <span className="text-gray-400">TREATMENT</span>
                    <span className="font-bold text-primary-charcoal truncate max-w-[200px]">{SERVICES.find(s=>s.id===service)?.name || "Free Skin Assessment"}</span>
                  </p>
                  <p className="flex justify-between border-b border-gray-150 pb-1.5">
                    <span className="text-gray-400">DATE</span>
                    <span className="font-bold text-primary-charcoal">{selectedDate?.toLocaleDateString("en-US", {month:"short", day:"numeric", year:"numeric"})}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-400">TIME SLOT</span>
                    <span className="font-bold text-primary-charcoal">{selectedTime}</span>
                  </p>
                </div>

                {/* Important Rules details */}
                <div className="bg-luxury-rose/10 p-4 rounded-xl border border-luxury-rose/30 max-w-sm mx-auto text-left text-xs gap-3">
                  <p className="font-serif font-semibold text-primary-charcoal mb-1 flex items-center gap-1.5">
                    📋 Pre-Appointment Guidelines:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-500 font-sans leading-relaxed">
                    <li>Arrive 10 minutes prior for clinical record forms.</li>
                    <li>Avoid blood thinners or alcohol 24-48h prior to Botox.</li>
                    <li>Discontinue retinol 3 days prior to chemical peels.</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="w-full bg-primary-charcoal text-white hover:bg-zinc-800 rounded-lg px-4 py-2.5 font-medium text-sm transition-colors cursor-pointer"
                  >
                    Return to Glow Aesthetics
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
