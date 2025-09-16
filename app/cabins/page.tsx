import { Metadata } from "next";
import CabinCard from "../_components/CabinCard";
import { Cabin } from "../_lib/definitions";

export const metadata: Metadata = {
  title: "Cabins",
};

export default function Page() {
  const cabins: Cabin[] = [];

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
