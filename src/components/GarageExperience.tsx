import React, { useState, useEffect } from 'react';
import { X, ZoomIn, Plus, Trash2, ImagePlus, Check } from 'lucide-react';
import realEntranceImg from '../assets/images/tiwari_garage_entrance_1790239824140.jpg';
import workshopImg from '../assets/images/garage_service_bay_1790239219424.jpg';
import diagImg from '../assets/images/car_diagnostics_scan_1790239233882.jpg';
import washImg from '../assets/images/car_foam_wash_1790239251473.jpg';
import accImg from '../assets/images/car_accessories_display_1790239267979.jpg';
import heroImg from '../assets/images/hero_garage_service_1790239201662.jpg';

interface GalleryItemData {
  id?: string;
  src: string;
  title: string;
  category: string;
  caption: string;
  isUserUploaded?: boolean;
}

const DEFAULT_ITEMS: GalleryItemData[] = [
  {
    id: 'default-1',
    src: realEntranceImg,
    title: 'Tiwari Motors Smart Garage – Entrance & Workshop',
    category: 'Garage Facility',
    caption: 'Main entrance with official signboard, customer courtyard, and workshop bays at Hussenpur Khurd Chowk, Ambedkar Nagar.',
  },
  {
    id: 'default-2',
    src: diagImg,
    title: 'Computerized OBD-II Diagnostics',
    category: 'Scanning & Electronics',
    caption: 'Real-time sensor data scanning and error code diagnostics for supported vehicles.',
  },
  {
    id: 'default-3',
    src: washImg,
    title: 'High-Pressure Foam Wash Bay',
    category: 'Exterior Cleaning',
    caption: 'Thorough exterior foam bath, glass cleaning, underbody spray, and vehicle detailing.',
  },
  {
    id: 'default-4',
    src: workshopImg,
    title: 'Service Bays & Hydraulic Lifts',
    category: 'Workshop Bays',
    caption: 'Organized service bays equipped for multi-brand car repairs, suspension work, and engine servicing.',
  },
  {
    id: 'default-5',
    src: accImg,
    title: 'Car Accessories & Upgrades',
    category: 'Car Accessories',
    caption: 'Quality floor mats, wheel caps, covers, key jackets, and daily vehicle essentials.',
  },
  {
    id: 'default-6',
    src: heroImg,
    title: 'Active Vehicle Maintenance',
    category: 'Mechanical Service',
    caption: 'Full multi-brand inspection, fluid replacements, and mechanical repairs.',
  },
];

export const GarageExperience: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItemData | null>(null);
  const [userPhotos, setUserPhotos] = useState<GalleryItemData[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New photo form state
  const [newPhotoSrc, setNewPhotoSrc] = useState('');
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCategory, setNewPhotoCategory] = useState('Workshop');
  const [newPhotoCaption, setNewPhotoCaption] = useState('');
  const [photoError, setPhotoError] = useState('');

  // Load user photos from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tiwari_motors_custom_gallery');
      if (saved) {
        setUserPhotos(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setPhotoError('Please select a valid image file (JPEG, PNG, WebP).');
      return;
    }

    // Limit size to ~5MB for localStorage
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
      setPhotoError('Please choose or upload a photo.');
      return;
    }
    if (!newPhotoTitle.trim()) {
      setPhotoError('Please provide a title for the photo.');
      return;
    }

    const newItem: GalleryItemData = {
      id: `user-${Date.now()}`,
      src: newPhotoSrc,
      title: newPhotoTitle.trim(),
      category: newPhotoCategory,
      caption: newPhotoCaption.trim() || 'Garage photo at Tiwari Motors.',
      isUserUploaded: true,
    };

    const updated = [newItem, ...userPhotos];
    setUserPhotos(updated);
    try {
      localStorage.setItem('tiwari_motors_custom_gallery', JSON.stringify(updated));
    } catch {
      // Storage limit fallback
    }

    // Reset form
    setNewPhotoSrc('');
    setNewPhotoTitle('');
    setNewPhotoCaption('');
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

  // Combine default items and user uploaded items
  const allGalleryItems = [...userPhotos, ...DEFAULT_ITEMS];

  return (
    <section id="gallery" className="py-12 lg:py-18 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
              Visual Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight font-heading mt-0.5">
              “Inside Tiwari Motors”
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600 max-w-xl">
              Take a closer look at our workshop facility, equipment, diagnostic stations, and car care services.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            {/* Direct Add Photo Button */}
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F58220] hover:bg-[#e07113] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Photo</span>
            </button>

            <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1.5 rounded-lg">
              Click photo to enlarge
            </span>
          </div>
        </div>

        {/* Asymmetric Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4">
          {/* Main Large Item (first item: user's garage photo or first item) */}
          <div
            onClick={() => setActiveImage(allGalleryItems[0])}
            className="md:col-span-7 relative group rounded-xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-200 h-64 sm:h-72 md:h-[360px]"
          >
            <img
              src={allGalleryItems[0].src}
              alt={allGalleryItems[0].title}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 brightness-95 group-hover:brightness-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {allGalleryItems[0].isUserUploaded && (
              <button
                type="button"
                onClick={(e) => handleDeletePhoto(allGalleryItems[0].id!, e)}
                className="absolute top-3 right-3 p-1.5 bg-black/70 hover:bg-red-600 text-white rounded-md transition-colors z-20 cursor-pointer"
                title="Remove photo"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}

            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#F58220] bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                  {allGalleryItems[0].category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white font-heading mt-1">
                  {allGalleryItems[0].title}
                </h3>
                <p className="text-xs text-neutral-300 hidden sm:block mt-0.5">
                  {allGalleryItems[0].caption}
                </p>
              </div>
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-xs text-white group-hover:bg-[#F58220] transition-colors shrink-0">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Items (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3.5 sm:gap-4">
            {allGalleryItems.slice(1, 3).map((item) => (
              <div
                key={item.id || item.title}
                onClick={() => setActiveImage(item)}
                className="relative group rounded-xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-200 h-44 sm:h-auto md:h-[172px]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {item.isUserUploaded && (
                  <button
                    type="button"
                    onClick={(e) => handleDeletePhoto(item.id!, e)}
                    className="absolute top-2 right-2 p-1.5 bg-black/70 hover:bg-red-600 text-white rounded-md transition-colors z-20 cursor-pointer"
                    title="Remove photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-[#F58220]">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white font-heading">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-1.5 bg-white/20 rounded-md backdrop-blur-xs text-white group-hover:bg-[#F58220] transition-colors">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining Items (4 cols each on desktop) */}
          {allGalleryItems.slice(3).map((item) => (
            <div
              key={item.id || item.title}
              onClick={() => setActiveImage(item)}
              className="md:col-span-4 relative group rounded-xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-200 h-44 sm:h-48"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {item.isUserUploaded && (
                <button
                  type="button"
                  onClick={(e) => handleDeletePhoto(item.id!, e)}
                  className="absolute top-2 right-2 p-1.5 bg-black/70 hover:bg-red-600 text-white rounded-md transition-colors z-20 cursor-pointer"
                  title="Remove photo"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}

              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase text-[#F58220]">
                    {item.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-heading">
                    {item.title}
                  </h3>
                </div>
                <div className="p-1.5 bg-white/20 rounded-md backdrop-blur-xs text-white group-hover:bg-[#F58220] transition-colors">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Photo Modal */}
      {isAddModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-xl overflow-hidden shadow-2xl border border-neutral-200 p-4 sm:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-3.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-orange-100 flex items-center justify-center text-[#F58220]">
                  <ImagePlus className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 font-heading">
                  Add Garage Photo
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {photoError && (
              <div className="mb-3 p-2 rounded bg-red-50 text-red-700 text-xs border border-red-200">
                {photoError}
              </div>
            )}

            <form onSubmit={handleSavePhoto} className="space-y-3">
              {/* File Input */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Choose Photo from Phone / Laptop <span className="text-[#F58220]">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-neutral-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-orange-50 file:text-[#F58220] hover:file:bg-orange-100 cursor-pointer"
                />
              </div>

              {/* Preview */}
              {newPhotoSrc && (
                <div className="relative rounded-lg overflow-hidden h-32 bg-neutral-100 border border-neutral-200">
                  <img
                    src={newPhotoSrc}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Photo Title <span className="text-[#F58220]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newPhotoTitle}
                  onChange={(e) => setNewPhotoTitle(e.target.value)}
                  placeholder="e.g. Engine Overhaul Bay, AC Gas Machine"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-[#F58220]"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Category
                </label>
                <select
                  value={newPhotoCategory}
                  onChange={(e) => setNewPhotoCategory(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-[#F58220]"
                >
                  <option value="Garage Facility">Garage Facility</option>
                  <option value="Workshop Bays">Workshop Bays</option>
                  <option value="Scanning & Electronics">Scanning & Electronics</option>
                  <option value="Exterior Cleaning">Exterior Cleaning</option>
                  <option value="Car Accessories">Car Accessories</option>
                  <option value="Customer Vehicle">Customer Vehicle</option>
                </select>
              </div>

              {/* Caption */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Caption / Short Description
                </label>
                <input
                  type="text"
                  value={newPhotoCaption}
                  onChange={(e) => setNewPhotoCaption(e.target.value)}
                  placeholder="e.g. Multi-brand servicing in progress."
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-[#F58220]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-3 py-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#F58220] hover:bg-[#e07113] text-white text-xs font-bold shadow-2xs"
                >
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1c1c1c] rounded-xl overflow-hidden border border-neutral-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#F58220] transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-3 sm:p-4 bg-[#181818] border-t border-neutral-800 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-semibold text-[#F58220] uppercase">
                  {activeImage.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {activeImage.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="shrink-0 px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-md transition-colors cursor-pointer"
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
