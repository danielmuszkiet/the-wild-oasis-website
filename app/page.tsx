import Image from "next/image";
import Link from "next/link";

import backgroundImage from "@/public/bg.png";

export default function Page() {
  return (
    <div className="mt-24">
      <Image
        src={backgroundImage}
        alt="Mountains and forests with two cabins"
        fill
        placeholder="blur"
        className="object-cover object-top"
        quality={80}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-primary-50 mb-10 text-5xl font-normal tracking-tight text-shadow-md md:text-8xl">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 text-primary-800 hover:bg-accent-600 hover:text-primary-900 px-5 py-4 text-lg font-semibold transition-all md:px-8 md:py-6 md:text-xl"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
