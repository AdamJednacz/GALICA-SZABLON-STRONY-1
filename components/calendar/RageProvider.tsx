"use client"
import React, { useState, ReactNode } from 'react';

type DateRange = { from: Date | null; to: Date | null };

type RangeProviderProps = {
  children: ReactNode;
};

export const RangeContext = React.createContext<{
  range: DateRange;
  setRange: (range: DateRange) => void;
}>({
  range: { from: null, to: null },
  setRange: () => {},
});

export const RangeProvider: React.FC<RangeProviderProps> = ({ children }) => {
  const [range, setRange] = useState<DateRange>({ from: null, to: null });

  return (
    <RangeContext.Provider value={{ range, setRange }}>
      {children}
    </RangeContext.Provider>
  );
};
