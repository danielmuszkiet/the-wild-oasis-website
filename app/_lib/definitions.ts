import { Database, Tables } from "./database.types";

type CabinRaw = Tables<"cabins">;
type Bookings = Tables<"bookings">;

export type TableKeys = keyof Database["public"]["Tables"];

export type Booking = Bookings & {
  cabins: Pick<CabinRaw, "name" | "image">;
};

export type Cabin = Pick<
  CabinRaw,
  "id" | "name" | "maxCapacity" | "regularPrice" | "discount" | "image"
>;

export type Settings = Tables<"settings">;

export type Country = {
  name: string;
  flag: string;
  independent: boolean;
};
