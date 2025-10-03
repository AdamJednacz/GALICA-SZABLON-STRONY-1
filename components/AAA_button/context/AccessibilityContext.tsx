"use client"
import React, { createContext, useContext, useState } from 'react';

interface AccessibilityContextType {
  animationsOff: boolean;
  setAnimationsOff: (value: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [animationsOff, setAnimationsOff] = useState(false);

  return (
    <AccessibilityContext.Provider value={{ animationsOff, setAnimationsOff }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};