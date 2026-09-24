import React, { useState } from 'react';
import { X, Save, RotateCcw, Sliders, CheckCircle2, Copy, Check, Code2, FileCode, ArrowRight } from 'lucide-react';
import { useOwner } from '../context/OwnerContext';
import { PROJECT_SOURCE_CODE } from '../projectBundle';

export const OwnerEditModal: React.FC = () => {
  const {
    business,
    updateBusiness,
    resetBusiness,
    isEditModalOpen,
    setIsEditModalOpen,
  } = useOwner();

  const [activeTab, setActiveTab] = useState<'ai-studio' | 'content'>('ai-studio');
  const [selectedFile, setSelectedFile] = useState<string>('src/config.ts');
  const [successMsg, setSuccessMsg] = useState('');
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedFile, setCopiedFile] = useState(false);

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

  // Single JSON master string of the entire project
  const masterJson = JSON.stringify(PROJECT_SOURCE_CODE, null, 2);

  const copyEntireProject = () => {
    navigator.clipboard.writeText(masterJson);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const copySingleFile = () => {
    const code = PROJECT_SOURCE_CODE[selectedFile as keyof typeof PROJECT_SOURCE_CODE] || '';
    navigator.clipboard.writeText(code);
    setCopiedFile(true);
    setTimeout(() => setCopiedFile(false), 2000);
  };

  // Direct client-side JSON file download
  const downloadClientJson = () => {
    const blob = new Blob([masterJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tiwari-motors-project-data.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
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

  const fileList = Object.keys(PROJECT_SOURCE_CODE);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={() => setIsEditModalOpen(false)}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 p-5 sm:p-6 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-zinc-200 mb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-[#F58220]">
              <Code2 size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 font-heading">
                Tiwari Motors Project Transfer
              </h3>
              <p className="text-[11px] text-zinc-500">
                Naye Gmail (tiwarmotors25@gmail.com) par AI Studio code transfer karein
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsEditModalOpen(false)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Action Tabs */}
        <div className="flex bg-zinc-100 p-1 rounded-xl mb-4 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('ai-studio')}
            className={`flex-1 py-2 px-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'ai-studio'
                ? 'bg-white text-[#F58220] shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Code2 size={14} className="text-[#F58220]" />
            <span>Naye AI Studio Me Transfer (100% Guaranteed)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('content')}
            className={`flex-1 py-2 px-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'content'
                ? 'bg-white text-[#111111] shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <Sliders size={13} />
            <span>Edit Garage Details</span>
          </button>
        </div>

        {activeTab === 'ai-studio' ? (
          <div className="space-y-4">
            {/* Direct 1-Click Solution (No Server Dependency) */}
            <div className="p-4 bg-orange-50/90 border border-orange-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-sm text-zinc-900 flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-[#F58220]" />
                  <span>Naye Account Me Transfer Karne Ka Sabse Aasan Tarika:</span>
                </h4>
                <span className="text-[10px] font-bold bg-[#F58220] text-white px-2 py-0.5 rounded-full">
                  14 Project Files Ready
                </span>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed">
                Kyunki AI Studio ka browser iFrame zip download ko block kar deta hai, isiliye humne <strong>poora project code</strong> ek click me copy karne ka direct tareeka bana diya hai:
              </p>

              <div className="grid sm:grid-cols-2 gap-2 pt-1">
                {/* Copy Entire Code Button */}
                <button
                  type="button"
                  onClick={copyEntireProject}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#F58220] hover:bg-[#D96E14] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs cursor-pointer transition-all"
                >
                  {copiedAll ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedAll ? 'Poora Project Code Copied!' : 'Copy Entire Project Code'}</span>
                </button>

                {/* Client Side JSON Download */}
                <button
                  type="button"
                  onClick={downloadClientJson}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-800 rounded-xl text-xs sm:text-sm font-bold shadow-xs cursor-pointer transition-all"
                >
                  <FileCode size={16} className="text-[#F58220]" />
                  <span>Download Project JSON File</span>
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 italic">
                *Yeh seedhe aapke browser memory se copy hota hai, isme koi server error (500) nahi aayegi.
              </p>
            </div>

            {/* Step-by-Step for New AI Studio */}
            <div className="space-y-2.5 text-xs text-zinc-700 bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
              <p className="font-bold text-zinc-900 text-xs uppercase tracking-wider font-heading flex items-center gap-1.5">
                <span>Naye AI Studio (tiwarmotors25@gmail.com) Me Kya Karna Hai:</span>
              </p>
              <ol className="space-y-2.5 list-decimal list-inside text-xs leading-relaxed text-zinc-600">
                <li>
                  Upar orange button dabakar <strong>"Copy Entire Project Code"</strong> par click karein.
                </li>
                <li>
                  Naya tab khol kar <strong>tiwarmotors25@gmail.com</strong> se Google AI Studio me Login karein.
                </li>
                <li>
                  AI Studio me naya project/chat khol kar yeh prompt likhein aur copied code paste kar dein:
                  <div className="mt-1.5 p-3 bg-white rounded-xl border border-zinc-300 font-mono text-[11px] text-zinc-800 space-y-1">
                    <p className="font-bold text-[#F58220]">
                      "Yeh raha Tiwari Motors Smart Garage ka complete source code bundle JSON. Is code ke mutabiq saari files create karke applet run karo:"
                    </p>
                    <p className="text-zinc-400 text-[10px]">
                      [Ctrl + V dabakar paste kar dein]
                    </p>
                  </div>
                </li>
                <li>
                  Naya AI Studio turant saare components (Hero, Gallery, Services, Contact, Booking) create kar dega aur aapka project naye Gmail me 100% active ho jayega!
                </li>
              </ol>
            </div>

            {/* File Viewer / Individual Copy */}
            <div className="p-3.5 bg-white border border-zinc-200 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileCode size={14} className="text-zinc-500" />
                  <span className="text-xs font-bold text-zinc-800">
                    Individual File Code Dekhein ya Copy Karein:
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copySingleFile}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-md text-[11px] font-bold cursor-pointer"
                >
                  {copiedFile ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                  <span>{copiedFile ? 'Copied' : 'Copy File'}</span>
                </button>
              </div>

              <select
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-2 text-xs font-mono text-zinc-800 mb-2 focus:outline-none focus:border-[#F58220]"
              >
                {fileList.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>

              <div className="max-h-36 overflow-y-auto p-2.5 bg-zinc-900 text-zinc-200 rounded-lg font-mono text-[10px] leading-relaxed select-all">
                <pre>{PROJECT_SOURCE_CODE[selectedFile as keyof typeof PROJECT_SOURCE_CODE] || ''}</pre>
              </div>
            </div>
          </div>
        ) : (
          /* Editable Form */
          <form onSubmit={handleSave} className="space-y-3.5">
            {successMsg && (
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold text-zinc-700 mb-1">
                  Primary Phone (WhatsApp)
                </label>
                <input
                  type="text"
                  required
                  value={form.phonePrimary}
                  onChange={(e) => setForm({ ...form, phonePrimary: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-1.5 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-700 mb-1">
                  Secondary Phone
                </label>
                <input
                  type="text"
                  value={form.phoneSecondary}
                  onChange={(e) => setForm({ ...form, phoneSecondary: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-1.5 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-700 mb-1">
                Workshop Timings
              </label>
              <input
                type="text"
                required
                value={form.hours}
                onChange={(e) => setForm({ ...form, hours: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-1.5 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-700 mb-1">
                Tagline
              </label>
              <input
                type="text"
                value={form.tagline}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-1.5 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-700 mb-1">
                Address
              </label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-1.5 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-700 mb-1">
                Announcement Banner (Optional)
              </label>
              <input
                type="text"
                value={form.noticeBanner}
                onChange={(e) => setForm({ ...form, noticeBanner: e.target.value })}
                placeholder="e.g. Navratri Special: Free Car AC Checkup!"
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-1.5 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#F58220]"
              />
            </div>

            <div className="pt-3 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500 hover:text-red-600 transition-colors cursor-pointer"
              >
                <RotateCcw size={12} />
                <span>Reset Defaults</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F58220] hover:bg-[#D96E14] text-white text-xs font-bold shadow-xs cursor-pointer transition-all"
                >
                  <Save size={14} />
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
