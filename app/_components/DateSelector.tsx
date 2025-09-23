"use client";

import { isWithinInterval, set } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Cabin, Settings } from "../_lib/definitions";
import { useState } from "react";

function isAlreadyBooked(range: { from: Date; to: Date }, datesArr: Date[]) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({
  settings,
  bookedDates,
  cabin,
}: {
  settings: Settings;
  bookedDates: Date[];
  cabin: Cabin;
}) {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;

  const { maxBookingLength, minBookingLength } = settings;

  function handelDateRangeSelection(selectedRange: DateRange | undefined) {
    if (!selectedRange) return;
    setRange({ from: selectedRange.from, to: selectedRange.to });
  }

  function resetRange() {
    setRange({ from: undefined, to: undefined });
  }

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        selected={range}
        className="m-auto flex w-full justify-center px-3 py-5 lg:py-0"
        mode="range"
        animate
        min={minBookingLength}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, 0)}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={{ before: new Date() }}
        classNames={{
          months: "flex flex-col md:flex-row md:gap-5 md:w-full justify-center",
        }}
        onSelect={(range) => handelDateRangeSelection(range)}
      />

      <div className="bg-accent-500 text-primary-800 md:gap:0 flex flex-col items-center justify-between gap-2 px-2 py-2 md:h-[72px] md:flex-row md:px-8 md:py-0">
        <div className="flex items-baseline gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-xl md:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="text-primary-700 font-semibold line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl md:text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-xl md:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="font-bold uppercase md:text-lg">Total</span>{" "}
                <span className="text-xl font-semibold md:text-2xl">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>
        {range.from || range.to ? (
          <button
            className="border-primary-800 w-full cursor-pointer border px-4 py-2 text-sm font-semibold md:w-auto"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
