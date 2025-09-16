import { formatDistanceFromNow } from "@/app/_lib/utils";
import { format, isPast, isToday } from "date-fns";

import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import DeleteReservation from "./DeleteReservation";

import type { Booking } from "../_lib/definitions";

function ReservationCard({ booking }: Booking) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;
  return (
    <div className="border-primary-800 mb-4 flex flex-col border md:flex-row">
      <div className="relative aspect-square h-50">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="border-primary-800 border-b object-cover md:border-r"
        />
      </div>

      <div className="flex flex-grow flex-col px-2 py-3 md:px-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold md:text-xl">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-7 items-center rounded-sm bg-yellow-800 px-3 text-xs font-bold text-yellow-200 uppercase">
              past
            </span>
          ) : (
            <span className="flex h-7 items-center rounded-sm bg-green-800 px-3 text-xs font-bold text-green-200 uppercase">
              upcoming
            </span>
          )}
        </div>

        <p className="text-sm md:text-base">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </div>

      <div className="border-primary-800 flex h-[50px] border-t md:h-auto md:w-[100px] md:flex-col md:border-t-0 md:border-l">
        <a
          href={`/account/reservations/edit/${id}`}
          className="group text-primary-300 hover:bg-accent-600 hover:text-primary-900 bg-primary-900 flex flex-grow items-center justify-center gap-1 px-3 text-xs font-bold uppercase transition-colors"
        >
          <PencilSquareIcon className="text-primary-600 group-hover:text-primary-800 h-5 w-5 transition-colors" />
          <span className="mt-1">Edit</span>
        </a>

        <DeleteReservation bookingId={id} />
      </div>
    </div>
  );
}

export default ReservationCard;
