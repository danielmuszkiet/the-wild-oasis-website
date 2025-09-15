import { UserIcon } from "@heroicons/react/24/solid";
import { Cabin } from "@/app/_lib/definitions";

function CabinCard({ cabin }: { cabin: Cabin }) {
  const { discount, id, image, maxCapacity, name, regularPrice } = cabin;

  return (
    <div className="border-primary-800 flex flex-col border md:flex-row">
      <img
        src={image}
        alt={`Image of cabin ${name}`}
        className="border-primary-800 flex-1 border-b md:border-r"
      />
      <div className="grow">
        <div className="bg-primary-950 p-3 pb-4 md:p-5">
          <h3 className="text-accent-500 mb-3 text-xl font-semibold md:text-2xl">
            Cabin {name}
          </h3>

          <div className="mb-2 flex items-center gap-3">
            <UserIcon className="text-primary-600 relative top-[-1px] h-5 w-5" />
            <p className="text-primary-200 leading-none sm:text-lg">
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
          <a
            href={`/cabins/${id}`}
            className="border-primary-800 hover:bg-accent-600 hover:text-primary-900 inline-block px-6 py-4 whitespace-nowrap transition-all sm:border-l"
          >
            Details & reservation &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
