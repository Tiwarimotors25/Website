import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { SERVICES, waLink } from '../config';
import { useOwner } from '../context/OwnerContext';

interface BookingProps {
  selectedService?: string;
}

export const Booking: React.FC<BookingProps> = ({ selectedService }) => {
  const { business } = useOwner();
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    car: '',
    service: '',
    date: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setForm((f) => ({ ...f, service: selectedService }));
    }
  }, [selectedService]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Apna naam likhiye';
    const digits = form.mobile.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
    if (!/^[6-9]\d{9}$/.test(digits)) {
      errs.mobile = 'Sahi 10-digit mobile number daaliye';
    }
    if (!form.service) errs.service = 'Service chuniye';

    setErrors(errs);
    if (Object.keys(errs).length) return;

    const msg = [
      '🚗 *New Service Request - Tiwari Motors*',
      '',
      `👤 *Name:* ${form.name.trim()}`,
      `📱 *Mobile:* ${digits}`,
      `🚘 *Car:* ${form.car.trim() || 'Not specified'}`,
      `🔧 *Service:* ${form.service}`,
      `📅 *Preferred Date:* ${form.date || 'Earliest available'}`,
      `📝 *Issue Details:* ${form.message.trim() || 'General service'}`,
    ].join('\n');

    window.open(waLink(msg), '_blank', 'noopener');
    setSent(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="bg-white scroll-mt-20 py-14 sm:py-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        {/* Left Column: Details */}
        <div>
          <SectionHead
            eyebrow="Book Now"
            title="Book Your Car Service"
            testid="booking-heading"
          />

          <Reveal delay={0.1}>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Form bhariye — aapki request seedhe WhatsApp par hamare paas aayegi. Ya seedha call kijiye, hum turant madad karenge.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-[#F7F7F7] border border-zinc-200 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-zinc-700">
                <Clock size={16} className="text-[#F58220] shrink-0" />
                <span>
                  <strong className="text-zinc-900 font-semibold">Workshop Timings:</strong> {business.hours}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-700">
                <Calendar size={16} className="text-[#F58220] shrink-0" />
                <span>Same-day inspection & transparent estimates</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${business.phonePrimaryIntl}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone size={15} className="text-[#F58220]" />
                <span>Call: {business.phonePrimary}</span>
              </a>

              <a
                href={waLink('Namaste Tiwari Motors, I would like to book a service.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1fb857] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Form */}
        <Reveal delay={0.15}>
          <div className="bg-[#F7F7F7] border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-10 space-y-3" data-testid="booking-success-message">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 font-heading">
                  Request Sent on WhatsApp!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto">
                  Shukriya! Tiwari Motors team aapse turant contact karegi. Agar urgent hai toh aap seedha call bhi kar sakte hain.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-4 text-xs font-bold text-[#F58220] hover:underline"
                >
                  Naya request bhejein
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4" data-testid="booking-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1 font-heading">
                      Aapka Naam <span className="text-[#F58220]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set('name')}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full bg-white border ${
                        errors.name ? 'border-red-500' : 'border-zinc-300'
                      } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#F58220] transition-colors`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1 font-heading">
                      Mobile Number <span className="text-[#F58220]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.mobile}
                      onChange={set('mobile')}
                      placeholder="10-digit number"
                      className={`w-full bg-white border ${
                        errors.mobile ? 'border-red-500' : 'border-zinc-300'
                      } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#F58220] transition-colors`}
                    />
                    {errors.mobile && (
                      <span className="text-[11px] text-red-500 mt-1 block">
                        {errors.mobile}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Car */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1 font-heading">
                      Car Model / Make
                    </label>
                    <input
                      type="text"
                      value={form.car}
                      onChange={set('car')}
                      placeholder="e.g. Swift, Creta, Scorpio"
                      className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#F58220] transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1 font-heading">
                      Service Required <span className="text-[#F58220]">*</span>
                    </label>
                    <select
                      value={form.service}
                      onChange={set('service')}
                      className={`w-full bg-white border ${
                        errors.service ? 'border-red-500' : 'border-zinc-300'
                      } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#F58220] transition-colors`}
                    >
                      <option value="">-- Service Chuniye --</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="General Checkup / Other">General Checkup / Other</option>
                    </select>
                    {errors.service && (
                      <span className="text-[11px] text-red-500 mt-1 block">
                        {errors.service}
                      </span>
                    )}
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1 font-heading">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={set('date')}
                    className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#F58220] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1 font-heading">
                    Problem ya Requirement details
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="e.g. Engine light on, AC not cooling, 50k km regular servicing..."
                    className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#F58220] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-testid="booking-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F58220] hover:bg-[#D96E14] text-white text-sm font-bold shadow-md transition-all hover:shadow-lg cursor-pointer"
                >
                  <Send size={16} />
                  <span>Send Request on WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
