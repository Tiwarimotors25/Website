import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  MapPin,
  AlertCircle,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [service, setService] = useState('Car Service & Repair');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const serviceOptions = [
    'Car Service & Repair',
    'Engine Work',
    'Electrical',
    'AC Repair',
    'Computer Scanning',
    'Foam Wash',
    'Denting & Painting',
    'Wheel Alignment',
    'Wheel Balancing',
    'Car Accessories',
    'Other',
  ];

  // Sync initialService if changed
  useEffect(() => {
    if (initialService) {
      const match = serviceOptions.find(
        (opt) => opt.toLowerCase() === initialService.toLowerCase()
      );
      if (match) {
        setService(match);
      } else {
        const partial = serviceOptions.find((opt) =>
          opt.toLowerCase().includes(initialService.toLowerCase())
        );
        if (partial) setService(partial);
      }
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!mobile.trim() || mobile.replace(/\D/g, '').length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }
    setError('');

    const carDetails = [carBrand, carModel].filter(Boolean).join(' ') || 'Not specified';
    const dateText = preferredDate || 'Earliest available';
    const problemText = message.trim() || 'General service inquiry';

    const text = `New Service Request – Tiwari Motors

Name: ${name.trim()}
Mobile: ${mobile.trim()}
Car: ${carDetails}
Service: ${service}
Preferred Date: ${dateText}
Problem: ${problemText}`;

    const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="py-12 lg:py-18 bg-[#111111] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
              Easy Online Booking
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading mt-0.5">
              “Need Service for Your Car?”
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Share your requirement and our team will get in touch with you right away. You can also call us directly.
            </p>

            {/* Direct Contact Card - Compact */}
            <div className="mt-6 bg-[#181818] border border-neutral-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F58220]/15 border border-[#F58220]/30 flex items-center justify-center text-[#F58220] shrink-0">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400">Direct Phone Support</p>
                  <a
                    href={`tel:+91${BUSINESS_CONFIG.phonePrimary}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#F58220] transition-colors"
                  >
                    Call: {BUSINESS_CONFIG.phonePrimary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2.5 border-t border-neutral-800/80">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400">WhatsApp Booking</p>
                  <p className="text-xs font-semibold text-white">
                    +91 {BUSINESS_CONFIG.phonePrimary}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2.5 border-t border-neutral-800/80">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 shrink-0">
                  <MapPin className="w-4 h-4 text-[#F58220]" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400">Workshop Location</p>
                  <p className="text-xs font-medium text-neutral-200 mt-0.5">
                    {BUSINESS_CONFIG.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-neutral-800/80 text-[11px] text-neutral-400">
                <Clock className="w-3.5 h-3.5 text-[#F58220] shrink-0" />
                <span>Open: {BUSINESS_CONFIG.hours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Generation Form - Compact */}
          <div className="lg:col-span-7">
            <div className="bg-[#181818] border border-neutral-800 rounded-xl p-4 sm:p-6 shadow-xl">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white font-heading">
                  Schedule Service Appointment
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Fill in your details below and click Send to open a pre-formatted WhatsApp message.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-2.5 rounded-lg bg-red-950/60 border border-red-800/80 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              {submitted && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-white">Request generated!</strong>
                    <p className="text-xs text-emerald-300 mt-0.5">
                      If WhatsApp didn't open, call us directly at <strong>{BUSINESS_CONFIG.phonePrimary}</strong>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Name <span className="text-[#F58220]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-[#121212] border border-neutral-700/80 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#F58220] transition-colors"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Mobile Number <span className="text-[#F58220]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-[#121212] border border-neutral-700/80 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#F58220] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Car Brand */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Car Brand
                    </label>
                    <input
                      type="text"
                      value={carBrand}
                      onChange={(e) => setCarBrand(e.target.value)}
                      placeholder="e.g. Maruti, Hyundai, Tata"
                      className="w-full bg-[#121212] border border-neutral-700/80 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#F58220] transition-colors"
                    />
                  </div>

                  {/* Car Model */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Car Model
                    </label>
                    <input
                      type="text"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      placeholder="e.g. Swift, Creta, Nexon"
                      className="w-full bg-[#121212] border border-neutral-700/80 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#F58220] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Service Required
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#121212] border border-neutral-700/80 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#F58220] transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-neutral-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#121212] border border-neutral-700/80 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#F58220] transition-colors"
                    />
                  </div>
                </div>

                {/* Problem / Message */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Problem / Message (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe any issue (AC cooling, brake sound, scanning, foam wash...)"
                    className="w-full bg-[#121212] border border-neutral-700/80 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#F58220] transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#F58220] hover:bg-[#e07113] active:bg-[#c9620d] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#F58220]/25 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send Request on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
