import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { HeroQuickActions } from './HeroQuickActions';
import { ServiceHighlightStrip } from './ServiceHighlightStrip';
import { AccessoriesSection } from './AccessoriesSection';
import { GarageExperience } from './GarageExperience';
import { CustomerJourney } from './CustomerJourney';
import { ReviewsSection } from './ReviewsSection';
import { EmergencyBanner } from './EmergencyBanner';
import { BookingSection } from './BookingSection';
import { LocationMap } from './LocationMap';
import { FinalCTA } from './FinalCTA';
import { FloatingActionBar } from './FloatingActionBar';
import { BUSINESS_CONFIG, SERVICES_LIST } from '../data/businessData';
import { Phone, MessageCircle, Calendar, ArrowRight, ShieldCheck, MapPin, Wrench, Zap, Snowflake, Laptop, Sparkles, Paintbrush, Disc, Shield } from 'lucide-react';
import heroGarageImg from '../assets/images/hero_garage_service_1790239201662.jpg';

const ICON_MAP: Record<string, React.ElementType> = {
  Wrench,
  Zap,
  Snowflake,
  Laptop,
  Sparkles,
  Paintbrush,
  Disc,
  Shield,
};

export const ClassicWebsite: React.FC<{ onSwitchDesign: () => void }> = ({ onSwitchDesign }) => {
  const [selectedService, setSelectedService] = useState<string>('Car Service & Repair');

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111]">
      {/* Top Banner Switcher */}
      <div className="bg-[#111111] text-zinc-300 text-xs py-2 px-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">Viewing: Design 1 (Original Classic Website)</span>
        </div>
        <button
          type="button"
          onClick={onSwitchDesign}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F58220] hover:bg-[#d96e14] text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
        >
          <span>✨ Switch to Design 2 (Replicated Smart Garage)</span>
        </button>
      </div>

      {/* Classic Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <BrandLogo variant="light" showTagline />

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-700">
            <a href="#services-section" className="hover:text-[#F58220] transition-colors">Services</a>
            <a href="#accessories" className="hover:text-[#F58220] transition-colors">Accessories</a>
            <a href="#gallery-experience" className="hover:text-[#F58220] transition-colors">Workshop Gallery</a>
            <a href="#booking-section" className="hover:text-[#F58220] transition-colors">Book Service</a>
            <a href="#contact" className="hover:text-[#F58220] transition-colors">Location</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:+91${BUSINESS_CONFIG.phonePrimary}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-bold text-neutral-900 transition-colors"
            >
              <Phone size={14} className="text-[#F58220]" />
              <span>{BUSINESS_CONFIG.phonePrimary}</span>
            </a>
            <button
              type="button"
              onClick={() => scrollToBooking()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F58220] hover:bg-[#D96E14] text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
            >
              <Calendar size={14} />
              <span>Book Service</span>
            </button>
          </div>
        </div>
      </header>

      {/* Classic Hero Section */}
      <section className="relative bg-white pt-8 sm:pt-12 pb-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F58220] text-xs font-bold">
                <span>{BUSINESS_CONFIG.brandHindi}</span>
                <span>•</span>
                <span>Ambedkar Nagar Smart Garage</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight leading-[1.15]">
                “Aapki Car Ki Har Zarurat Ka Ek Hi Naam.”
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed">
                {BUSINESS_CONFIG.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToBooking()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F58220] hover:bg-[#D96E14] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Book Inspection</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20b857] text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#F58220]" />
                  <span>Multi-Brand Expert</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-[#F58220]" />
                  <span>Hussenpur Khurd Chowk</span>
                </span>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
                <img
                  src={heroGarageImg}
                  alt="Tiwari Motors Workshop Bay"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-neutral-200 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-neutral-900 font-heading">
                      {BUSINESS_CONFIG.shortName}
                    </p>
                    <p className="text-[11px] text-neutral-600">
                      {BUSINESS_CONFIG.hours}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#F58220] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    Open Today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Quick Actions Bar */}
      <HeroQuickActions onBookClick={() => scrollToBooking()} />

      {/* Service Highlight Strip */}
      <ServiceHighlightStrip onSelectService={(s) => scrollToBooking(s)} />

      {/* Services Section */}
      <section id="services-section" className="py-14 sm:py-18 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
              Automotive Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight font-heading mt-1">
              “Full Range of Services”
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Routine maintenance se lekar major engine work aur computer diagnostics tak.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES_LIST.map((srv) => {
              const IconComp = ICON_MAP[srv.iconName] || Wrench;
              return (
                <div
                  key={srv.id}
                  className="bg-[#FAFAFA] hover:bg-white rounded-2xl p-5 border border-neutral-200/90 hover:border-[#F58220]/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-9 h-9 rounded-xl bg-orange-50 text-[#F58220] flex items-center justify-center font-bold text-xs font-mono">
                        {srv.number}
                      </span>
                      <IconComp size={20} className="text-[#F58220]" />
                    </div>

                    <h3 className="font-heading font-bold text-base text-neutral-900 mb-1.5">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {srv.description}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {srv.highlights.map((h, i) => (
                        <div key={i} className="text-[11px] text-neutral-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToBooking(srv.title)}
                    className="w-full py-2 px-3 rounded-lg bg-neutral-100 hover:bg-[#F58220] text-neutral-800 hover:text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Book This Service
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <div id="accessories">
        <AccessoriesSection />
      </div>

      {/* Workshop Experience Gallery with Lightbox */}
      <div id="gallery-experience">
        <GarageExperience />
      </div>

      {/* Customer Journey / How It Works */}
      <CustomerJourney />

      {/* Reviews */}
      <ReviewsSection />

      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Interactive Booking Section */}
      <div id="booking-section">
        <BookingSection initialService={selectedService} />
      </div>

      {/* Map & Location */}
      <LocationMap />

      {/* Final CTA */}
      <FinalCTA onBookClick={() => scrollToBooking()} />

      {/* Classic Footer */}
      <footer className="bg-[#111111] text-neutral-400 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <BrandLogo variant="dark" />
            <p className="text-xs text-neutral-500 mt-2">
              {BUSINESS_CONFIG.fullAddress}
            </p>
          </div>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Tiwari Motors Smart Garage. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile Floating Action Bar */}
      <FloatingActionBar onBookClick={() => scrollToBooking()} />
    </div>
  );
};
