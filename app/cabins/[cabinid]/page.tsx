import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data";
import { Metadata } from "next";
import { Suspense } from "react";

export const revalidate = 10;

type Props = {
  params: Promise<{ cabinid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cabinid } = await params;
  const { name } = await getCabin(Number(cabinid));

  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  return cabins.map((cabin) => ({
    cabinid: String(cabin.id),
  }));
}

export default async function Page({ params }: Props) {
  const { cabinid } = await params;
  const cabin = await getCabin(Number(cabinid));

  return (
    <div className="mx-auto max-w-6xl lg:mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-accent-400 mb-10 text-center text-4xl font-semibold md:text-5xl lg:mb-15">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
