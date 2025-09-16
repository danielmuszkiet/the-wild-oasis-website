export type Cabin = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
};

export type Booking = {
  booking: {
    id: string;
    guestId: string;
    startDate: string;
    endDate: string;
    numNights: string;
    totalPrice: string;
    numGuests: string;
    status: string;
    created_at: string;
    cabins: { name: string; image: string };
  };
};
