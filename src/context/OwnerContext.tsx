import React, { createContext, useContext, useState, useEffect } from 'react';
import { BUSINESS as DEFAULT_BUSINESS } from '../config';

export interface BusinessConfig {
  name: string;
  hindiName: string;
  tagline: string;
  phonePrimary: string;
  phoneSecondary: string;
  phonePrimaryIntl: string;
  phoneSecondaryIntl: string;
  whatsappNumber: string;
  email: string;
  address: string;
  hours: string;
  googleReviewUrl: string;
  noticeBanner?: string;
}

interface OwnerContextType {
  business: BusinessConfig;
  updateBusiness: (updates: Partial<BusinessConfig>) => void;
  resetBusiness: () => void;
  isOwnerMode: boolean;
  setIsOwnerMode: (active: boolean) => void;
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'tiwari_motors_owner_config';

const OwnerContext = createContext<OwnerContextType | undefined>(undefined);

export const OwnerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [business, setBusiness] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_BUSINESS, ...JSON.parse(saved) };
      }
    } catch {
      // Ignore
    }
    return DEFAULT_BUSINESS;
  });

  const [isOwnerMode, setIsOwnerMode] = useState<boolean>(() => {
    return localStorage.getItem('tiwari_motors_owner_unlocked') === 'true';
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(business));
    } catch {
      // Ignore
    }
  }, [business]);

  useEffect(() => {
    localStorage.setItem('tiwari_motors_owner_unlocked', isOwnerMode ? 'true' : 'false');
  }, [isOwnerMode]);

  const updateBusiness = (updates: Partial<BusinessConfig>) => {
    setBusiness((prev) => {
      const updated = { ...prev, ...updates };
      if (updates.phonePrimary) {
        updated.phonePrimaryIntl = updates.phonePrimary.startsWith('+91')
          ? updates.phonePrimary
          : `+91${updates.phonePrimary.replace(/\D/g, '')}`;
        updated.whatsappNumber = updates.phonePrimary.replace(/\D/g, '');
      }
      if (updates.phoneSecondary) {
        updated.phoneSecondaryIntl = updates.phoneSecondary.startsWith('+91')
          ? updates.phoneSecondary
          : `+91${updates.phoneSecondary.replace(/\D/g, '')}`;
      }
      return updated;
    });
  };

  const resetBusiness = () => {
    setBusiness(DEFAULT_BUSINESS);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <OwnerContext.Provider
      value={{
        business,
        updateBusiness,
        resetBusiness,
        isOwnerMode,
        setIsOwnerMode,
        isEditModalOpen,
        setIsEditModalOpen,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
};

export const useOwner = () => {
  const context = useContext(OwnerContext);
  if (!context) {
    throw new Error('useOwner must be used within an OwnerProvider');
  }
  return context;
};
