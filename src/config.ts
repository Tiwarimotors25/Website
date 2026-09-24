import React from 'react';
import {
  Wrench,
  Cog,
  Zap,
  Snowflake,
  ScanLine,
  Droplets,
  Paintbrush,
  CircleDot,
  ShoppingBag,
} from 'lucide-react';

export const BUSINESS = {
  name: 'Tiwari Motors Smart Garage',
  hindiName: 'तिवारी मोटर्स',
  tagline: 'Aapki Car Ki Har Zarurat Ka Ek Hi Naam.',
  phonePrimary: '8218766134',
  phoneSecondary: '9554182727',
  phonePrimaryIntl: '+918218766134',
  phoneSecondaryIntl: '+919554182727',
  whatsappNumber: '918218766134',
  email: 'tiwarimotors25@gmail.com',
  address: 'Hussenpur Khurd Chowk, Ambedkar Nagar, Uttar Pradesh – 224181',
  hours: 'Monday – Sunday: 10:00 AM – 6:30 PM',
  googleReviewUrl: 'https://share.google/y0p7E7BdyWeQg3lZR',
};

export const MAP_QUERY = 'Tiwari Motors Smart Garage, Hussenpur Khurd Chowk, Ambedkar Nagar, Uttar Pradesh 224181';

export const MAPS = {
  embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`,
};

export const LOGO_SRC = '/images/logo.jpeg';
export const GARAGE_PHOTO_SRC = '/images/garage-entrance.jpeg';

export const waLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 64;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export interface ServiceItem {
  id: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'car-service',
    name: 'Car Service & Repair',
    desc: 'Routine service, oil change aur general repairs — sabhi car brands ke liye.',
    icon: Wrench,
  },
  {
    id: 'engine-work',
    name: 'Engine Work',
    desc: 'Engine diagnosis, overhauling aur performance repairs.',
    icon: Cog,
  },
  {
    id: 'car-electrical',
    name: 'Car Electrical',
    desc: 'Battery, wiring, lights aur complete electrical fault repair.',
    icon: Zap,
  },
  {
    id: 'ac-repair',
    name: 'AC Repair',
    desc: 'AC gas refill, cooling problems aur full AC system service.',
    icon: Snowflake,
  },
  {
    id: 'computer-scanning',
    name: 'Computer Scanning',
    desc: 'Modern OBD scanning se exact fault turant pata karein.',
    icon: ScanLine,
  },
  {
    id: 'foam-wash',
    name: 'Foam Wash',
    desc: 'Premium foam wash aur interior cleaning — car bilkul fresh.',
    icon: Droplets,
  },
  {
    id: 'denting-painting',
    name: 'Denting & Painting',
    desc: 'Dent removal, body work aur quality paint finish.',
    icon: Paintbrush,
  },
  {
    id: 'wheel-alignment',
    name: 'Wheel Alignment & Balancing',
    desc: 'Alignment, balancing aur tyre care — smooth drive ke liye.',
    icon: CircleDot,
  },
  {
    id: 'car-accessories',
    name: 'Car Accessories',
    desc: 'Quality accessories, experienced haathon se fitting.',
    icon: ShoppingBag,
  },
];

export const QUICK_SERVICES = [
  { name: 'Car Service', icon: Wrench },
  { name: 'Electrical', icon: Zap },
  { name: 'AC Repair', icon: Snowflake },
  { name: 'Computer Scanning', icon: ScanLine },
  { name: 'Foam Wash', icon: Droplets },
  { name: 'Denting & Painting', icon: Paintbrush },
  { name: 'Wheel Care', icon: CircleDot },
  { name: 'Car Accessories', icon: ShoppingBag },
];
