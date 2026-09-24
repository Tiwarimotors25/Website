import React, { useState, useEffect, useMemo } from 'react';
import { X, ZoomIn, Plus, Trash2, ImagePlus, ArrowRight, ArrowLeft, Layers, Camera } from 'lucide-react';
import { SectionHead } from './Reveal';
import { GARAGE_PHOTO_SRC, LOGO_SRC } from '../config';

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: string;
  isUserUploaded?: boolean;
}

interface CategoryFolder {
  name: string;
  hindiTitle: string;
  coverImage: string;
  description: string;
  iconText: string;
}

const DEFAULT_GALLERY: GalleryPhoto[] = [
  {
    id: 'g-1',
    src: GARAGE_PHOTO_SRC,
    title: 'Tiwari Motors Smart Garage – Entrance & Workshop Yard',
    category: 'Garage & Facility',
  },
  {
    id: 'g-2',
    src: LOGO_SRC,
    title: 'Tiwari Motors Smart Garage – Official Brand Identity',
    category: 'Garage & Facility',
  },
  {
    id: 'g-3',
    src: '/images/gallery/garage_service_bay_1790239219424.jpg',
    title: 'Multi-Brand Service Bay & Hydraulic Lifts',
    category: 'Workshop & Repairs',
  },
  {
    id: 'g-4',
    src: '/images/gallery/hero_garage_service_1790239201662.jpg',
    title: 'Engine & Suspension Repair Work in Action',
    category: 'Workshop & Repairs',
  },
  {
    id: 'g-5',
    src: '/images/gallery/car_diagnostics_scan_1790239233882.jpg',
    title: 'Computerized OBD-II Diagnostics & Error Scanning',
    category: 'Computer Scanning',
  },
  {
    id: 'g-6',
    src: '/images/gallery/car_foam_wash_1790239251473.jpg',
    title: 'High Pressure Foam Washing & Deep Cleaning',
    category: 'Car Wash & Detailing',
  },
  {
    id: 'g-7',
    src: '/images/gallery/car_accessories_display_1790239267979.jpg',
    title: 'Premium Car Accessories, Mats & Upgrades',
    category: 'Car Accessories',
  },
];

const CATEGORY_META: Record<string, { hindi: string; desc: string; icon: string }> = {
  'Garage & Facility': {
    hindi: 'वर्कशॉप और प्रवेश द्वार',
    desc: 'Main garage front, parking yard and office',
    icon: '🏢',
  },
  'Workshop & Repairs': {
    hindi: 'सर्विस बे और रिपेयरिंग',
    desc: 'Hydraulic lifts, engine, brakes and suspension bay',
    icon: '🔧',
  },
  'Computer Scanning': {
    hindi: 'कंप्यूटराइज्ड स्कैनिंग',
    desc: 'OBD-II scanner, error code checks and sensor data',
    icon: '💻',
  },
  'Car Wash & Detailing': {
    hindi: 'फोम वॉश और सफाई',
    desc: 'High pressure foam wash, vacuum and interior cleaning',
    icon: '🫧',
  },
  'Car Accessories': {
    hindi: 'कार एक्सेसरीज व फिटिंग',
    desc: 'Seat covers, matting, speakers, lights & fittings',
    icon: '🚗',
  },
};

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [userPhotos, setUserPhotos] = useState<GalleryPhoto[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Selected folder for drill-down (null = show folders view)
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  // Form state
  const [newPhotoSrc, setNewPhotoSrc] = useState('');
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCategory, setNewPhotoCategory] = useState('Workshop & Repairs');
  const [photoError, setPhotoError] = useState('');

  // Load user photos
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activePhoto) setActivePhoto(null);
        else if (selectedFolder) setSelectedFolder(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activePhoto, selectedFolder]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setPhotoError('Kripya valid image chunein (JPG, PNG).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setPhotoError('Image size 5MB se kam hona chahiye.');
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
      setPhotoError('Kripya photo select karein.');
      return;
    }
    if (!newPhotoTitle.trim()) {
      setPhotoError('Kripya photo ka title likhein.');
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

    // Auto navigate to that category so user sees it right away
    setSelectedFolder(newPhotoCategory);

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

  const allItems = useMemo(() => [...userPhotos, ...DEFAULT_GALLERY], [userPhotos]);

  // Group items by category to build folder cards
  const folders = useMemo<CategoryFolder[]>(() => {
    const map = new Map<string, GalleryPhoto[]>();

    // Preset order
    const presetCategories = [
      'Workshop & Repairs',
      'Computer Scanning',
      'Car Wash & Detailing',
      'Car Accessories',
      'Garage & Facility',
    ];

    presetCategories.forEach((c) => map.set(c, []));

    allItems.forEach((item) => {
      const cat = item.category || 'Workshop & Repairs';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(item);
    });

    const result: CategoryFolder[] = [];
    map.forEach((photos, name) => {
      if (photos.length > 0) {
        const meta = CATEGORY_META[name] || {
          hindi: name,
          desc: `${photos.length} photos available`,
          icon: '📁',
        };
        result.push({
          name,
          hindiTitle: meta.hindi,
          coverImage: photos[0].src,
          description: meta.desc,
          iconText: meta.icon,
        });
      }
    });

    return result;
  }, [allItems]);

  // Photos inside the actively clicked folder
  const currentFolderPhotos = useMemo(() => {
    if (!selectedFolder) return [];
    return allItems.filter((i) => i.category === selectedFolder);
  }, [allItems, selectedFolder]);

  return (
    <section id="gallery" className="bg-[#F8F9FA] scroll-mt-20 py-10 sm:py-14 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Add Photo */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <SectionHead
            eyebrow="Visual Showcase"
            title="Our Garage & Work"
            subtitle="Category par tap karke workshop ke andar ki photos dekhein."
            testid="gallery-heading"
          />

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F58220] hover:bg-[#D96E14] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <Plus size={14} />
              <span>Add Photo</span>
            </button>
            <span className="text-[11px] font-semibold text-zinc-500 bg-white border border-zinc-200 px-2.5 py-1 rounded-md">
              Total {allItems.length} Photos
            </span>
          </div>
        </div>

        {/* View 1: Categorized Folders (Super clean, no clutter, no huge endless page) */}
        {!selectedFolder ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {folders.map((folder) => {
                const count = allItems.filter((p) => p.category === folder.name).length;
                return (
                  <div
                    key={folder.name}
                    onClick={() => setSelectedFolder(folder.name)}
                    className="group relative rounded-xl overflow-hidden bg-white border border-zinc-200/90 shadow-2xs hover:shadow-md hover:border-[#F58220]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Compact Image Cover */}
                    <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-zinc-900">
                      <img
                        src={folder.coverImage}
                        alt={folder.name}
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = GARAGE_PHOTO_SRC;
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Top category badge */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold">
                        <span>{folder.iconText}</span>
                        <span>{folder.name}</span>
                      </div>

                      {/* Photo count */}
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#F58220] text-white text-[11px] font-bold shadow-xs">
                        {count} Photos
                      </div>

                      {/* Bottom title on image */}
                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <p className="text-[11px] font-medium text-orange-200">
                          {folder.hindiTitle}
                        </p>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-white line-clamp-1">
                          {folder.name}
                        </h4>
                      </div>
                    </div>

                    {/* Bottom action strip */}
                    <div className="p-3 bg-white flex items-center justify-between border-t border-zinc-100">
                      <p className="text-[11px] text-zinc-500 line-clamp-1">
                        {folder.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F58220] group-hover:translate-x-0.5 transition-transform shrink-0">
                        <span>Photos Dekhein</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* View 2: Inside Folder View (Clean sub-album) */
          <div className="animate-in fade-in duration-200">
            {/* Folder Header Bar */}
            <div className="bg-white rounded-xl p-3 sm:p-4 border border-zinc-200 shadow-2xs mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedFolder(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-colors cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Wapas Sabhi Categories</span>
                </button>
                <div className="h-4 w-[1px] bg-zinc-300 hidden sm:block" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 font-heading">
                    {selectedFolder}
                  </h3>
                  <p className="text-[11px] text-zinc-500">
                    {currentFolderPhotos.length} photos available in this album
                  </p>
                </div>
              </div>

              <span className="text-[11px] text-zinc-500 italic hidden md:inline">
                Kisi bhi photo par click karke full screen zoom dekhein
              </span>
            </div>

            {/* Folder photos grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
              {currentFolderPhotos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActivePhoto(item)}
                  className="group relative rounded-xl overflow-hidden border border-zinc-200 bg-white shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer aspect-[4/3]"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = GARAGE_PHOTO_SRC;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2.5 text-white">
                    <div className="flex justify-end">
                      <div className="p-1 rounded bg-white/20 backdrop-blur-xs text-white">
                        <ZoomIn size={13} />
                      </div>
                    </div>
                    <p className="text-xs font-bold font-heading line-clamp-2">
                      {item.title}
                    </p>
                  </div>

                  {item.isUserUploaded && (
                    <button
                      type="button"
                      onClick={(e) => handleDeletePhoto(item.id, e)}
                      className="absolute top-2 right-2 p-1.5 bg-black/75 hover:bg-red-600 text-white rounded-md transition-colors z-20"
                      title="Delete Photo"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
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
            className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-3.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#F58220]">
                  <ImagePlus size={18} />
                </div>
                <h3 className="text-base font-bold text-zinc-900 font-heading">
                  Nayi Photo Upload Karein
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

            <form onSubmit={handleSavePhoto} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Photo Select Karein
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-zinc-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-orange-50 file:text-[#F58220] hover:file:bg-orange-100 cursor-pointer"
                />
              </div>

              {newPhotoSrc && (
                <div className="relative rounded-lg overflow-hidden h-28 bg-zinc-100 border border-zinc-200">
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
                  placeholder="e.g. Scorpio Service, New Bay, Scanner"
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-1.5 text-xs text-zinc-900 focus:outline-none focus:border-[#F58220]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Kaun Si Category (Folder) Me Daalna Hai?
                </label>
                <select
                  value={newPhotoCategory}
                  onChange={(e) => setNewPhotoCategory(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-1.5 text-xs text-zinc-900 focus:outline-none focus:border-[#F58220]"
                >
                  <option value="Workshop & Repairs">Workshop & Repairs</option>
                  <option value="Computer Scanning">Computer Scanning</option>
                  <option value="Car Wash & Detailing">Car Wash & Detailing</option>
                  <option value="Car Accessories">Car Accessories</option>
                  <option value="Garage & Facility">Garage & Facility</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#F58220] hover:bg-[#D96E14] text-white text-xs font-bold shadow-xs"
                >
                  Photo Save Karein
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1c1c1c] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#F58220] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-3 bg-[#181818] border-t border-zinc-800 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F58220]">
                  {activePhoto.category}
                </span>
                <p className="text-sm font-bold text-white font-heading mt-0.5">
                  {activePhoto.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="px-3 py-1.5 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors cursor-pointer"
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
