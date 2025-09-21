"use client";

import clsx from "clsx";
import { useSearchParams, useRouter } from "next/navigation";

const filterOptions = [
  { filter: "all", text: "All Cabins" },
  { filter: "small", text: "1–3 guests" },
  { filter: "medium", text: "4–7 guests" },
  { filter: "large", text: "8–12 guests" },
];

function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border-primary-800 flex items-center border leading-5">
      {filterOptions.map((option) => {
        const isSelected = filter === option.filter;
        return (
          <button
            key={option.filter}
            className={clsx(
              "hover:bg-primary-700 cursor-pointer px-4 py-2 md:py-3",
              isSelected && "bg-primary-700 text-primary-50",
            )}
            onClick={() => handleFilter(option.filter)}
          >
            {option.text}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
