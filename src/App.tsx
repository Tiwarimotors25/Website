import React, { useState } from 'react';
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
import { OwnerProvider } from './context/OwnerContext';
import { scrollToSection } from './config';

function MainLayout() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#F58220]/20 selection:text-[#F58220]">
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
