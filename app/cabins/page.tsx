import { Metadata } from "next";
import { Suspense } from "react";

import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "../_components/Filter";

// Not relevant because this page is dynamically rendered due to searchParams
// export const revalidate = 10;

export const metadata: Metadata = {
  title: "Cabins",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const filter = (await searchParams).capacity ?? "all";

  return (
    <div>
      <h1 className="text-accent-400 mb-5 text-2xl font-medium md:text-4xl">
        Our Luxury Cabins
      </h1>

      <p className="text-primary-200 mb-8 text-lg md:mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="mb-8 flex justify-end">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
