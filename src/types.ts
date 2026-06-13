export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  duration: string;
  price: string;
  category: string;
  benefits: string[];
  safety: string;
  recovery: string;
  imageUrl: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  treatment: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  treatment: string;
  text: string;
  date: string;
  avatarUrl: string;
  verified: boolean;
}

export interface AppointmentBooking {
  serviceId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes?: string;
}
