import { UserIcon } from "@heroicons/react/24/solid";
import { Cabin } from "@/app/_lib/definitions";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }: { cabin: Cabin }) {
  const { discount, id, image, maxCapacity, name, regularPrice } = cabin;

  return (
    <div className="border-primary-800 flex flex-col overflow-hidden border lg:flex-row">
      <div className="relative h-70 md:aspect-square lg:h-auto">
        <Image
          src={image}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          alt={`Image of cabin ${name}`}
          className="border-primary-800 flex-1 border-b object-cover lg:border-r lg:border-b-0"
        />
      </div>
      <div className="grow">
        <div className="bg-primary-950 p-3 pb-4 md:p-5">
          <h3 className="text-accent-500 mb-3 text-2xl font-semibold">
            Cabin {name}
          </h3>

          <div className="mb-2 flex items-center gap-3">
            <UserIcon className="text-primary-600 relative top-[-1px] h-5 w-5" />
            <p className="text-primary-200 text-lg leading-none">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-2">
            {discount > 0 ? (
              <>
                <span className="text-xl font-[350] sm:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="text-primary-600 font-semibold line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl font-[350] sm:text-2xl">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t-primary-800 border-t text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-primary-800 hover:bg-accent-600 hover:text-primary-900 bg-primary-900 md: text- inline-block w-full px-6 py-4 text-center whitespace-nowrap transition-all md:w-auto md:border-l"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
