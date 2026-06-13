import { Service, BeforeAfterItem, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "botox-fillers",
    name: "Botox & Dermal Fillers",
    shortDesc: "Diminish fine lines and restore youthful facial volume with precise, natural-looking injectables.",
    duration: "30 - 45 mins",
    price: "From $12 per unit / $650 syringe",
    category: "Injectables",
    benefits: [
      "Smooths forehead lines, crow's feet, and frown lines",
      "Restores volume to cheeks, lips, and under-eyes",
      "Immediate, elegant results with minimal to no downtime",
      "Tailored precisely to enhance your native facial symmetry"
    ],
    safety: "Administered exclusively by our double board-certified aesthetic nurse injectors. FDA-approved and highly researched formulas.",
    recovery: "Zero downtime. Mild swelling or bruising at injection sites may occur for 24-48 hours.",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    shortDesc: "Experience permanently silk-smooth skin with our state-of-the-art dual-wavelength laser technology.",
    duration: "15 - 60 mins",
    price: "From $99 / session",
    category: "Laser Treatments",
    benefits: [
      "Permanent reduction in hair growth across any skin type",
      "Advanced cooling tip technology ensures a virtually painless experience",
      "Prevents ingrown hairs and razor irritation long-term",
      "Quick, highly effective, walk-in treatments"
    ],
    safety: "Using medical-grade Candela GentleMax Pro lasers. Performed by licensed certified laser technicians.",
    recovery: "No recovery time. Treated areas may experience minor redness resembling mild sunburn for 1-3 hours.",
    imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "microneedling",
    name: "RF Microneedling",
    shortDesc: "Stimulate collagen and tighten skin from deep within using gold-insulated radiofrequency microneedles.",
    duration: "45 mins",
    price: "From $350 / treatment",
    category: "Collagen Induction",
    benefits: [
      "Drastically reduces acne scarring and hyperpigmentation",
      "Tightens sagging epidermal layers around the jaw and neck",
      "Shrinks enlarged facial pores and refines skin texture",
      "Triggers high natural collagen and elastin synthesis"
    ],
    safety: "Utilizes sterile, single-use gold tips. Safe for all skin tones (Fitzpatrick scale I-VI).",
    recovery: "Minimal social downtime. Redness and minor tight feelings for 12-24 hours. Makeup can be applied after 24 hours.",
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "chemical-peels",
    name: "Medical Chemical Peels",
    shortDesc: "Reveal flawless, baby-soft skin underneath with pharmaceutical-grade chemical resurfacing peels.",
    duration: "30 mins",
    price: "From $150 / session",
    category: "Resurfacing",
    benefits: [
      "Dissolves dull, dead skin cells instantly to reveal natural luminance",
      "Targets sun damage, age spots, and uneven pigmentation",
      "Rebalances oily skin and prevents chronic acne breakouts",
      "Promotes rapid cellular turnover for a fresh, healthy glow"
    ],
    safety: "Customized formulations selected based on your unique skin diagnostics. Ph-balanced.",
    recovery: "Subtle flaking of the skin starting around day 3, finishing by day 5-7. High-quality daily sunscreen required.",
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "skin-rejuvenation",
    name: "Skin Rejuvenation Therapy",
    shortDesc: "A luxurious multi-step treatment combining custom medical facials, red light, and hyperbaric oxygen.",
    duration: "75 mins",
    price: "From $220 / treatment",
    category: "Facial Care",
    benefits: [
      "Deeply hydrates and plumps skin cells with medical-grade serums",
      "Reduces systemic skin inflammation and redness immediately",
      "Perfect red-carpet ready cellular boost for any special event",
      "Customized botanical and peptide-rich nutrient infusers"
    ],
    safety: "Ultra-gentle yet medically formulated. Completely non-invasive with zero contraindications.",
    recovery: "Instant glowing results with absolute zero downtime. Walk right out and show off your skin.",
    imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
  }
];

export const TRUST_POINTS = [
  {
    id: "board-certified",
    title: "Board-Certified Staff",
    description: "Every treatment is custom-tailored and performed by elite board-certified medical doctors, nurse practitioners, and master aesthetic practitioners in Austin.",
    icon: "ShieldCheck"
  },
  {
    id: "happy-clients",
    title: "500+ Happy Clients",
    description: "Proudly earning consecutive 5-star ratings from Austin residents who enjoy natural-looking, radiant outcomes without looking 'overdone'.",
    icon: "Users"
  },
  {
    id: "fda-approved",
    title: "FDA-Approved Treatments",
    description: "We invest only in gold-standard, clinically proven, FDA-approved devices and premium serums for ultimate safety and medical efficacy.",
    icon: "Sparkles"
  }
];

export const BEFORE_AFTER_GALLERY: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Botox Full Face Resurfacing",
    treatment: "Botox & Dermal Fillers",
    description: "Diminished crow's feet and frown lines. Restored youthful contour and smoothness across forehead and cheekbones.",
    beforeUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800&blur=3",
    afterUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ba-2",
    title: "Plumping & Harmonizing Lip Filler",
    treatment: "Botox & Dermal Fillers",
    description: "Soft volume expansion of top and bottom lips using Juvederm. Restored perfect balance and beautiful definition.",
    beforeUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800&blur=3",
    afterUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ba-3",
    title: "RF Microneedling Acne Scarring Plan",
    treatment: "RF Microneedling",
    description: "Dramatic texture smoothing and cell regeneration after 3 sessions. Erased pitting scars and stubborn hyperpigmentation.",
    beforeUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&blur=3",
    afterUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ba-4",
    title: "Hyperpigmentation Resurfacing",
    treatment: "Medical Chemical Peels",
    description: "Rebalanced skin tone, erased solar freckles, and lifted melasma layers on outer cheeks over 2 custom chemical peels.",
    beforeUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800&blur=3",
    afterUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ba-5",
    title: "Ultimate Skin Glow Revival",
    treatment: "Skin Rejuvenation Therapy",
    description: "Instantly hydrated skin plumping and cellular energy infusion. Reduced facial redness and elevated youthful luster.",
    beforeUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&blur=3",
    afterUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ba-6",
    title: "Jawline Contouring & Smoothing",
    treatment: "RF Microneedling",
    description: "Tightened loose dermal tissue underneath neck and defined skin contour around lower jaw with targeted radiofrequency waves.",
    beforeUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&blur=3",
    afterUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Charlotte Vance",
    rating: 5,
    treatment: "Botox & Dermal Fillers",
    text: "Glow Aesthetics completely redefined how I view aging. Their approach is incredibly conservative and bespoke—I look like a refreshed, well-rested version of myself, not artificially frozen. The Austin clinic is stunningly beautiful, ultra-hygienic, and feels like a luxury resort on South Congress.",
    date: "A week ago",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: "t-2",
    name: "Dr. Ethan Harris",
    rating: 5,
    treatment: "RF Microneedling",
    text: "As a health professional, safety and clinical excellence are paramount. The specialists at Glow use premium, state-of-the-art FDA-approved technology. I did a series of RF Microneedling treatments for acne scarring, and the texture improvement is unbelievable. This is hands down the best med spa in Austin.",
    date: "1 month ago",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    verified: true
  },
  {
    id: "t-3",
    name: "Sofia Mendoza",
    rating: 5,
    treatment: "Skin Rejuvenation Therapy",
    text: "The hydration facial and skin therapy are absolute magic. My skin had persistent dryness and redness from the Texas summer heat, and I walked out literally glowing. No pushy sales pitches—just pure evidence-based skincare, high-touch luxury, and incredible medical expertise. Highly recommend!",
    date: "3 days ago",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    verified: true
  }
];
