import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Booking } from './components/Booking';
import { Emergency } from './components/Emergency';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { OwnerEditModal } from './components/OwnerEditModal';
import { ClassicWebsite } from './components/ClassicWebsite';
import { OwnerProvider } from './context/OwnerContext';
import { scrollToSection } from './config';
import { Sparkles, Layers } from 'lucide-react';

function MainLayout() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [designVersion, setDesignVersion] = useState<'replicated' | 'classic'>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('design') === '1' || window.location.hash === '#classic') {
        return 'classic';
      }
      return (localStorage.getItem('tiwari_motors_design_version') as 'replicated' | 'classic') || 'replicated';
    } catch {
      return 'replicated';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tiwari_motors_design_version', designVersion);
    } catch {
      // Ignore
    }
  }, [designVersion]);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection('booking');
  };

  if (designVersion === 'classic') {
    return (
      <ClassicWebsite onSwitchDesign={() => setDesignVersion('replicated')} />
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#F58220]/20 selection:text-[#F58220]">
      {/* Design Switcher Bar (Easy 1-Click Toggle between First Design & Current Replicate) */}
      <div className="bg-[#0c0c0c] text-zinc-300 text-xs py-1.5 px-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 z-50 relative">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">
            Live Preview: <strong className="text-[#F58220]">Design 2 (Smart Garage Replicate)</strong>
          </span>
        </div>
        <button
          type="button"
          onClick={() => setDesignVersion('classic')}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-all cursor-pointer"
        >
          <Layers size={13} className="text-[#F58220]" />
          <span>Dekhein Pehle Wali Website (Design 1)</span>
        </button>
      </div>

      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Page Sections */}
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <Services onSelectService={handleSelectService} />
        <WhyUs />
        <HowItWorks />
        <Gallery />
        <Reviews />
        <Booking selectedService={selectedService} />
        <Emergency />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Floating Action Buttons */}
      <FloatingButtons />

      {/* Owner Control & Edit Panel */}
      <OwnerEditModal />
    </div>
  );
}

export default function App() {
  return (
    <OwnerProvider>
      <MainLayout />
    </OwnerProvider>
  );
}
