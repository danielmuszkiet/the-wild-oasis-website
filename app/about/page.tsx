import { Metadata } from "next";
import Image from "next/image";

import welcome_image from "@/public/about-1.jpg";
import family_image from "@/public/about-2.jpg";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-1 items-center gap-y-10 text-lg md:grid-cols-5 md:gap-x-24 md:gap-y-32">
      <div className="relative h-80 w-full md:order-1 md:col-span-2 md:h-full">
        <Image
          src={welcome_image}
          alt="Family sitting around a fire pit in front of cabin"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 40vw"
          placeholder="blur"
        />
      </div>

      <div className="col-span-3 md:order-0">
        <h1 className="text-accent-400 mb-5 text-2xl font-medium md:mb-10 md:text-4xl">
          Welcome to The Wild Oasis
        </h1>
        <div className="space-y-5 md:space-y-7">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you&apos;ll find in the surrounding mountains. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="relative col-span-2 aspect-auto h-80 w-full md:order-1 md:h-full">
        <Image
          src={family_image}
          alt="Family that manages The Wild Oasis"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 40vw"
          placeholder="blur"
        />
      </div>

      <div className="col-span-3 md:order-3">
        <h1 className="text-accent-400 mb-5 text-2xl font-medium md:mb-10 md:text-4xl">
          Family-run since 1962
        </h1>
        <div className="space-y-5 md:space-y-7">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="bg-accent-500 text-primary-800 hover:bg-accent-600 hover:text-primary-900 inline-block px-5 py-4 text-lg leading-none font-semibold transition-all md:px-8 md:py-6 md:text-xl"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
