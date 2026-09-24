import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { waLink } from '../config';
import { useOwner } from '../context/OwnerContext';

export const FloatingButtons: React.FC = () => {
  const { business } = useOwner();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5"
    >
      {/* WhatsApp Button with Ping Ring */}
      <a
        href={waLink('Namaste Tiwari Motors! Mujhe car service ke baare mein jaankari chahiye.')}
        target="_blank"
        rel="noreferrer"
        data-testid="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        className="relative w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1fb857] shadow-lg shadow-black/25 flex items-center justify-center transition-transform hover:scale-105"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
          aria-hidden="true"
        />
        <MessageCircle size={22} className="text-white relative" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${business.phonePrimaryIntl}`}
        data-testid="floating-call-btn"
        aria-label="Call Tiwari Motors"
        className="w-12 h-12 rounded-full bg-[#F58220] hover:bg-[#D96E14] shadow-lg shadow-black/25 flex items-center justify-center transition-transform hover:scale-105"
      >
        <Phone size={20} className="text-white" />
      </a>
    </motion.div>
  );
};
