import ReservationCard from "@/app/_components/ReservationCard";

function page() {
  const bookings = [
    {
      id: "bkg_001",
      guestId: "guest_101",
      startDate: "2025-09-20",
      endDate: "2025-09-23",
      numNights: "3",
      totalPrice: "450",
      numGuests: "2",
      status: "confirmed",
      created_at: "2025-09-01T10:15:00Z",
      cabins: {
        name: "Mountain View Cabin",
        image:
          "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      },
    },
    {
      id: "bkg_002",
      guestId: "guest_204",
      startDate: "2024-09-12",
      endDate: "2024-10-10",
      numNights: "5",
      totalPrice: "900",
      numGuests: "4",
      status: "pending",
      created_at: "2025-09-12T14:30:00Z",
      cabins: {
        name: "Lakeside Retreat",
        image:
          "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      id: "bkg_003",
      guestId: "guest_350",
      startDate: "2025-12-24",
      endDate: "2025-12-27",
      numNights: "3",
      totalPrice: "750",
      numGuests: "3",
      status: "cancelled",
      created_at: "2025-09-14T08:45:00Z",
      cabins: {
        name: "Cozy Winter Lodge",
        image:
          "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ];

  return (
    <div>
      <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
        Your reservations
      </h2>
      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a
            className="text-accent-500 hover:text-accent-600 underline"
            href="/cabins"
          >
            luxury cabins &rarr;
          </a>
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
