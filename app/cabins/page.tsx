import { Metadata } from "next";
import { Suspense } from "react";

import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";

export const metadata: Metadata = {
  title: "Cabins",
};

export const revalidate = 30;

export default function Page() {
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
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
