import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, ChevronRight, Sliders, Info, Eye } from "lucide-react";
import { BEFORE_AFTER_GALLERY } from "../data";
import { BeforeAfterItem } from "../types";

export default function BeforeAfterGallery() {
  const [selectedItem, setSelectedItem] = useState<BeforeAfterItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Reset slider position when opening a different item
  useEffect(() => {
    if (selectedItem) {
      setSliderPosition(50);
    }
  }, [selectedItem]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white relative scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] uppercase font-semibold tracking-widest text-luxury-gold block">
            Proven Results
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-primary-charcoal tracking-tight">
            Before & After Clinical Portfolios
          </h2>
          <div className="h-1 w-12 bg-luxury-gold/50 mx-auto rounded" />
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Witness the artistic precision of our custom-tailored clinical plans. All photos represent unaltered, bona fide outcomes on real clients. Click any portrait for an interactive slide reveal.
          </p>
        </div>

        {/* 3x2 Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEFORE_AFTER_GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer relative bg-luxury-ivory rounded-2xl overflow-hidden border border-gray-150/40 hover:shadow-xl duration-300 transition-all flex flex-col justify-between"
            >
              {/* Image Frame with soft overlays */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                {/* Static Preview Image (After image is sharp, before was blurred to emulate differences) */}
                <img
                  src={item.afterUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />

                {/* Soft glow hover overlay */}
                <div className="absolute inset-0 bg-primary-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-white/95 text-luxury-gold flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 duration-300 transition-all">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <span className="text-white text-xs font-mono uppercase tracking-widest font-semibold">
                    Interactive Compare
                  </span>
                </div>

                {/* Tags on Card */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold text-primary-charcoal">
                  {item.treatment}
                </div>
                
                <div className="absolute bottom-4 right-4 bg-primary-charcoal/70 backdrop-blur-sm text-white px-2 py-1 rounded text-[9px] font-mono tracking-wider">
                  Verified Outcome
                </div>
              </div>

              {/* Text Card description */}
              <div className="p-5 space-y-1 bg-white">
                <h3 className="font-serif text-base font-semibold text-primary-charcoal group-hover:text-luxury-gold duration-200 flex items-center justify-between">
                  {item.title}
                  <ChevronRight className="h-4 w-4 text-luxury-gold group-hover:translate-x-1 duration-200" />
                </h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Slider comparison view modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-primary-charcoal/80 backdrop-blur-md"
            />

            {/* Slider focused container card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-silk-beige flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest font-semibold text-luxury-gold">
                    {selectedItem.treatment}
                  </span>
                  <h4 className="font-serif text-lg font-medium text-primary-charcoal">
                    {selectedItem.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-primary-charcoal transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Slidable Viewer container */}
              <div className="p-6 bg-luxury-ivory/50 flex flex-col items-center">
                
                {/* Interactive Slider Area */}
                <div
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onMouseDown={() => { setIsDragging(true); }}
                  onMouseUp={() => { setIsDragging(false); }}
                  onMouseLeave={() => { setIsDragging(false); }}
                  className="relative aspect-[4/3] w-full max-w-lg rounded-2xl overflow-hidden shadow-lg border border-gray-200 cursor-ew-resize select-none bg-zinc-900"
                >
                  {/* After Image (Right Background) */}
                  <img
                    src={selectedItem.afterUrl}
                    alt="After Treatment"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Before Image (Left Clipped Overlay) */}
                  <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <img
                      src={selectedItem.beforeUrl}
                      alt="Before Treatment"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Legends (Always visible in top corners) */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[10px] uppercase tracking-widest p-1.5 rounded font-semibold font-mono z-25 pointer-events-none">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-luxury-gold/90 backdrop-blur-xs text-white text-[10px] uppercase tracking-widest p-1.5 rounded font-semibold font-mono z-25 pointer-events-none">
                    After Glow
                  </div>

                  {/* Slider Divider Handle Line */}
                  <div
                    className="absolute inset-y-0 w-1 bg-white shadow-2xl z-20"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    {/* Active round thumb handle */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-luxury-gold border-2 border-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 duration-200">
                      <div className="flex gap-1 text-white">
                        <ChevronRight className="h-3.5 w-3.5 rotate-180" />
                        <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Helpful Instruction Tip */}
                <p className="text-[11px] text-gray-450 font-medium text-center mt-4 flex items-center justify-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-luxury-gold" />
                  Drag the center divider left or right to peel back layers of treatment.
                </p>
              </div>

              {/* Description & Treatment Context */}
              <div className="p-6 bg-white border-t border-gray-100 space-y-2">
                <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block font-mono">
                  Clinical Summary & Outcomes
                </span>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
