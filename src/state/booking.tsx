import React, { createContext, useContext, useMemo, useState } from "react";

export type BookingDraft = {
  propertyId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nightlyPrice: number;
  nights: number;
  subtotal: number;
  serviceFeePct: number;
  serviceFee: number;
  total: number;
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
};

type BookingContextValue = {
  draft: BookingDraft | null;
  setDraft: (d: BookingDraft | null) => void;
  clear: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [draft, setDraft] = useState<BookingDraft | null>(null);
  const value = useMemo(
    () => ({
      draft,
      setDraft,
      clear: () => setDraft(null),
    }),
    [draft]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

