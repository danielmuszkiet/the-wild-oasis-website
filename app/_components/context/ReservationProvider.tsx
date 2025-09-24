"use client";

import { useState } from "react";
import { ReservationContext } from "./ReservationsContext";
import { DateRange } from "react-day-picker";

const initalState = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState<DateRange | undefined>(initalState);

  const resetRange = () => {
    setRange({ from: undefined, to: undefined });
  };

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export default ReservationProvider;
