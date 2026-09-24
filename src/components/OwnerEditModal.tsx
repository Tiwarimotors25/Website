import React, { useState } from 'react';
import { X, Save, Lock, Unlock, RotateCcw, Sliders, CheckCircle2 } from 'lucide-react';
import { useOwner } from '../context/OwnerContext';

export const OwnerEditModal: React.FC = () => {
  const {
    business,
    updateBusiness,
    resetBusiness,
    isOwnerMode,
    setIsOwnerMode,
    isEditModalOpen,
    setIsEditModalOpen,
  } = useOwner();

  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const [form, setForm] = useState({
    name: business.name,
    hindiName: business.hindiName,
    tagline: business.tagline,
    phonePrimary: business.phonePrimary,
    phoneSecondary: business.phoneSecondary,
    hours: business.hours,
    address: business.address,
    email: business.email,
    noticeBanner: business.noticeBanner || '',
  });

  if (!isEditModalOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '1234' || pinInput === '0000') {
      setIsOwnerMode(true);
      setPinError('');
    } else {
      setPinError('Galat PIN! Default PIN "1234" hai.');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateBusiness(form);
    setSuccessMsg('Changes successfully save ho gaye hain!');
    setTimeout(() => {
      setSuccessMsg('');
      setIsEditModalOpen(false);
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm('Kya aap default settings restore karna chahte hain?')) {
      resetBusiness();
      setIsEditModalOpen(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={() => setIsEditModalOpen(false)}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F58220]">
              <Sliders size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 font-heading">
                Owner Control Panel
              </h3>
              <p className="text-xs text-zinc-500">
                Apne garage ka content aur phone numbers edit karein
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsEditModalOpen(false)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* PIN Authentication if locked */}
        {!isOwnerMode ? (
          <form onSubmit={handleUnlock} className="space-y-4 py-4 text-center">
            <div className="w-14 h-14 rounded-full bg-orange-50 text-[#F58220] mx-auto flex items-center justify-center mb-2">
              <Lock size={26} />
            </div>
            <h4 className="font-heading font-bold text-base text-zinc-900">
              Owner Mode Unlock Karein
            </h4>
            <p className="text-xs text-zinc-600 max-w-xs mx-auto">
              Keval garage owner ke liye. Default PIN: <strong>1234</strong>
            </p>

            <div className="max-w-xs mx-auto space-y-2">
              <input
                type="password"
                maxLength={6}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="PIN daaliye (e.g. 1234)"
                className="w-full text-center text-lg tracking-widest bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 font-bold focus:outline-none focus:border-[#F58220]"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-red-500 font-medium">{pinError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full max-w-xs mx-auto inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F58220] hover:bg-[#D96E14] text-white text-sm font-bold shadow-md cursor-pointer"
            >
              <Unlock size={16} />
              <span>Unlock Admin Controls</span>
            </button>
          </form>
        ) : (
          /* Editable Form */
          <form onSubmit={handleSave} className="space-y-4">
            {successMsg && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Primary Phone (WhatsApp)
                </label>
                <input
                  type="text"
                  required
                  value={form.phonePrimary}
                  onChange={(e) => setForm({ ...form, phonePrimary: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Secondary Phone
                </label>
                <input
                  type="text"
                  value={form.phoneSecondary}
                  onChange={(e) => setForm({ ...form, phoneSecondary: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Workshop Timings
              </label>
              <input
                type="text"
                required
                value={form.hours}
                onChange={(e) => setForm({ ...form, hours: e.target.value })}
                placeholder="e.g. 10:00 AM – 6:30 PM (All 7 Days)"
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Tagline / Slogan
              </label>
              <input
                type="text"
                value={form.tagline}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Address
              </label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Special Announcement Banner (Optional)
              </label>
              <input
                type="text"
                value={form.noticeBanner}
                onChange={(e) => setForm({ ...form, noticeBanner: e.target.value })}
                placeholder="e.g. Navratri Special: Free Car AC Checkup!"
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
              />
              <span className="text-[11px] text-zinc-500 mt-0.5 block">
                Khali chhodne par banner nahi dikhega.
              </span>
            </div>

            <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-red-600 transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
                <span>Reset Defaults</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#F58220] hover:bg-[#D96E14] text-white text-xs font-bold shadow-md cursor-pointer transition-all"
                >
                  <Save size={15} />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
