import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "@/app/_components/TextExpander";
import Image from "next/image";
import type { CabinRaw } from "../_lib/definitions";

function Cabin({ cabin }: { cabin: CabinRaw }) {
  const { maxCapacity, image, description, name } = cabin;
  return (
    <div className="border-primary-800 mb-12 grid gap-10 border px-5 py-5 md:mb-14 md:px-10 md:py-10 lg:mb-24 lg:grid-cols-[3fr_4fr] lg:gap-20 lg:py-3">
      <div className="relative h-80 md:h-100 lg:h-auto lg:-translate-x-4 lg:scale-[1.15]">
        <Image
          priority
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 70vw"
        />
      </div>

      <div>
        <h3 className="text-accent-100 bg-primary-950 mb-5 pb-1 text-5xl font-black md:text-6xl lg:w-[150%] lg:translate-x-[-254px] lg:p-6 lg:text-7xl">
          Cabin {name}
        </h3>
        <p className="text-primary-300 mb-10 text-lg">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 lg:mb-7">
          <li className="flex items-center gap-3">
            <UsersIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="text-primary-600 h-5 w-5" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
