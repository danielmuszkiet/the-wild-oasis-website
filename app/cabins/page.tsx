import { Metadata } from "next";
import CabinCard from "../_components/CabinCard";

export const metadata: Metadata = {
  title: "Cabins",
};

export default function Page() {
  const cabins = [
    {
      id: 0,
      name: "Cabin 01",
      maxCapacity: 3,
      regularPrice: 200,
      discount: 30,
      image:
        "https://tzvtgzwgbekmhhsbuusn.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg",
    },
    {
      id: 1,
      name: "Cabin 02",
      maxCapacity: 4,
      regularPrice: 300,
      discount: 10,
      image:
        "https://tzvtgzwgbekmhhsbuusn.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg",
    },
  ];

  return (
    <div>
      <h1 className="text-accent-400 mb-5 text-2xl font-medium md:text-4xl">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 mb-10 text-lg">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      {cabins.length > 0 && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => {
            return <CabinCard cabin={cabin} key={cabin.id} />;
          })}
        </div>
      )}
    </div>
  );
}
