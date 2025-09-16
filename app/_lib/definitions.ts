import { Tables } from "./database.types";

export type Cabin = Tables<"cabins">;
type Bookings = Tables<"bookings">;

export type Booking = Bookings & {
  cabins: Pick<Cabin, "name" | "image">;
};
