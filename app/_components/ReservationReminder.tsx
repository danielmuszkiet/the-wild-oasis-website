"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "@/app/_components/context/useReservation";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range?.from || !range?.to) return null;

  return (
    <div className="bg-accent-500 text-primary-800 fixed bottom-5 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-center gap-5 rounded-3xl px-5 py-3 font-semibold shadow-xl shadow-slate-900 md:w-2xl md:rounded-full md:px-8 md:py-5">
      <p className="text-center text-sm select-none md:text-base">
        <span>👋</span> Don&apos;t forget to reserve your dates from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        onClick={resetRange}
        className="hover:bg-accent-600 cursor-pointer rounded-full p-1 transition-all"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
