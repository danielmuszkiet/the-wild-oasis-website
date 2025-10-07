"use client";

import { Cabin } from "../_lib/definitions";
import { useReservation } from "./context/useReservation";
import Image from "next/image";
import { User } from "next-auth";

function ReservationForm({ cabin, user }: { cabin: Cabin; user: User }) {
  const { range } = useReservation();
  const { maxCapacity } = cabin;

  return (
    <div className="flex flex-col">
      <div className="bg-primary-800 text-primary-300 flex items-center justify-between px-5 py-2 md:px-10">
        <p>Logged in as</p>
        <div className="flex items-center gap-4">
          {user.image && (
            <div className="relative aspect-square h-7">
              <Image
                referrerPolicy="no-referrer"
                className="h-8 rounded-full"
                fill
                src={user.image}
                alt={user.name!}
              />
            </div>
          )}
          <p>{user.name}</p>
        </div>
      </div>

      <form className="bg-primary-900 flex flex-1 flex-col justify-between px-5 py-8 md:px-10">
        <div>
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end gap-4 md:gap-6 lg:gap-8">
          <p className="text-primary-300 text-base">Start by selecting dates</p>

          <button className="bg-accent-500 text-primary-800 hover:bg-accent-600 cursor-pointer px-3 py-4 font-semibold transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 lg:px-8">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
