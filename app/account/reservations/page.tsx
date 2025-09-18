import ReservationCard from "@/app/_components/ReservationCard";
import { Booking } from "@/app/_lib/definitions";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reservations",
};

function page() {
  const bookings: Booking[] = [];

  return (
    <div>
      <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
        Your reservations
      </h2>
      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link
            className="text-accent-500 hover:text-accent-600 underline"
            href="/cabins"
          >
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul>
          {bookings.map((booking) => {
            return <ReservationCard key={booking.id} booking={booking} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default page;
