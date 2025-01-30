"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const initialSate = { from: undefined, to: undefined };

export function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialSate);
  const resetRange = () => setRange(initialSate);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("COntext was used outside the provider");
  return context;
}
