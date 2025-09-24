"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

type ReservationContextValue = {
  range: DateRange | undefined;
  setRange: Dispatch<SetStateAction<DateRange | undefined>>;
  resetRange: () => void;
};

export const ReservationContext = createContext<ReservationContextValue | null>(
  null,
);
