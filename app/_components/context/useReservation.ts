import { use } from "react";
import { ReservationContext } from "./ReservationsContext";

export function useReservation() {
  const context = use(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationContext");
  }
  return context;
}
