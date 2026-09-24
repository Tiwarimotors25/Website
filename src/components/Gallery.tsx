import React, { useState, useEffect } from 'react';
import { X, ZoomIn, Plus, Trash2, ImagePlus } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { GARAGE_PHOTO_SRC, LOGO_SRC } from '../config';

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: string;
  isUserUploaded?: boolean;
}

const DEFAULT_GALLERY: GalleryPhoto[] = [
  {
    id: 'g-1',
    src: GARAGE_PHOTO_SRC,
    title: 'Tiwari Motors Smart Garage – Entrance & Yard',
    category: 'Facility',
  },
  {
    id: 'g-2',
    src: LOGO_SRC,
    title: 'Tiwari Motors Smart Garage – Official Brand Identity',
    category: 'Brand Logo',
  },
  {
    id: 'g-3',
    src: '/assets/images/car_diagnostics_scan_1790239233882.jpg',
    title: 'Computerized OBD-II Diagnostics & Scanning',
    category: 'Electronics',
  },
  {
    id: 'g-4',
    src: '/assets/images/car_foam_wash_1790239251473.jpg',
    title: 'High Pressure Foam Washing & Detailing',
    category: 'Car Wash',
  },
  {
    id: 'g-5',
    src: '/assets/images/garage_service_bay_1790239219424.jpg',
    title: 'Multi-Brand Service Bay & Hydraulic Lifts',
    category: 'Workshop Bay',
  },
  {
    id: 'g-6',
    src: '/assets/images/car_accessories_display_1790239267979.jpg',
    title: 'Premium Car Accessories & Fittings',
    category: 'Accessories',
  },
];

export const Gallery: React.FC = () => {
  const [active, setActive] = useState<GalleryPhoto | null>(null);
  const [userPhotos, setUserPhotos] = useState<GalleryPhoto[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New photo form state
  const [newPhotoSrc, setNewPhotoSrc] = useState('');
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCategory, setNewPhotoCategory] = useState('Workshop');
  const [photoError, setPhotoError] = useState('');

  // Load user photos from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tiwari_motors_custom_gallery');
      if (saved) {
        setUserPhotos(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setPhotoError('Please select a valid image file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setPhotoError('Image size should be less than 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setNewPhotoSrc(reader.result as string);
      setPhotoError('');
    };
    reader.readAsDataURL(file);
  };

  const handleSavePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoSrc) {
      setPhotoError('Please select a photo to upload.');
      return;
    }
    if (!newPhotoTitle.trim()) {
      setPhotoError('Please enter a photo title.');
      return;
    }

    const newItem: GalleryPhoto = {
      id: `user-${Date.now()}`,
      src: newPhotoSrc,
      title: newPhotoTitle.trim(),
      category: newPhotoCategory,
      isUserUploaded: true,
    };

    const updated = [newItem, ...userPhotos];
    setUserPhotos(updated);
    try {
      localStorage.setItem('tiwari_motors_custom_gallery', JSON.stringify(updated));
    } catch {
      // Ignore
    }

    setNewPhotoSrc('');
    setNewPhotoTitle('');
    setPhotoError('');
    setIsAddModalOpen(false);
  };

  const handleDeletePhoto = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = userPhotos.filter((p) => p.id !== id);
    setUserPhotos(updated);
    try {
      localStorage.setItem('tiwari_motors_custom_gallery', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const allItems = [...userPhotos, ...DEFAULT_GALLERY];

  return (
    <section id="gallery" className="bg-[#F7F7F7] scroll-mt-20 py-14 sm:py-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHead
            eyebrow="Gallery"
            title="Our Garage & Work"
            subtitle="Ek jhalk — hamare workshop aur kaam ki."
            testid="gallery-heading"
          />

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F58220] hover:bg-[#D96E14] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <Plus size={14} />
              <span>Add Photo</span>
            </button>
            <span className="text-xs text-zinc-500 bg-zinc-200/70 px-2.5 py-1.5 rounded-lg">
              Click photo to enlarge
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {allItems.map((item, i) => (
            <Reveal key={item.id} delay={Math.min(i * 0.05, 0.25)}>
              <div
                onClick={() => setActive(item)}
                className="group relative rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer aspect-[4/3]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3 sm:p-4 text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F58220]">
                      {item.category}
                    </span>
                    <p className="text-xs sm:text-sm font-bold font-heading line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                  <div className="p-1.5 rounded-md bg-white/20 backdrop-blur-xs">
                    <ZoomIn size={14} />
                  </div>
                </div>

                {item.isUserUploaded && (
                  <button
                    type="button"
                    onClick={(e) => handleDeletePhoto(item.id, e)}
                    className="absolute top-2 right-2 p-1.5 bg-black/70 hover:bg-red-600 text-white rounded-md transition-colors z-20"
                    title="Remove photo"
                  >
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Add Photo Modal */}
      {isAddModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#F58220]">
                  <ImagePlus size={18} />
                </div>
                <h3 className="text-base font-bold text-zinc-900 font-heading">
                  Add Garage Photo
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {photoError && (
              <div className="mb-3 p-2 rounded bg-red-50 text-red-700 text-xs border border-red-200">
                {photoError}
              </div>
            )}

            <form onSubmit={handleSavePhoto} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Choose Photo from Device
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-zinc-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-orange-50 file:text-[#F58220] hover:file:bg-orange-100 cursor-pointer"
                />
              </div>

              {newPhotoSrc && (
                <div className="relative rounded-lg overflow-hidden h-32 bg-zinc-100 border border-zinc-200">
                  <img
                    src={newPhotoSrc}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Photo Title <span className="text-[#F58220]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newPhotoTitle}
                  onChange={(e) => setNewPhotoTitle(e.target.value)}
                  placeholder="e.g. Engine Repair, New Car Delivery"
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-[#F58220]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Category
                </label>
                <select
                  value={newPhotoCategory}
                  onChange={(e) => setNewPhotoCategory(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-[#F58220]"
                >
                  <option value="Garage Facility">Garage Facility</option>
                  <option value="Workshop Bays">Workshop Bays</option>
                  <option value="Diagnostics & Scanning">Diagnostics & Scanning</option>
                  <option value="Car Wash">Car Wash</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Customer Vehicle">Customer Vehicle</option>
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-3 py-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#F58220] hover:bg-[#D96E14] text-white text-xs font-bold shadow-sm"
                >
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1c1c1c] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={active.src}
                alt={active.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#F58220] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 bg-[#181818] border-t border-zinc-800 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F58220]">
                  {active.category}
                </span>
                <p className="text-sm sm:text-base font-bold text-white font-heading mt-0.5">
                  {active.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="px-3.5 py-1.5 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
