import { getCabins } from "../_lib/data";
import CabinCard from "./CabinCard";

async function CabinList({ filter }: { filter: string }) {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayCabins;

  switch (filter) {
    case "small":
      displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
      break;
    case "medium":
      displayCabins = cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
      );
      break;
    case "large":
      displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
      break;
    default:
      displayCabins = cabins;
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
      {displayCabins.map((cabin) => {
        return <CabinCard cabin={cabin} key={cabin.id} />;
      })}
    </div>
  );
}

export default CabinList;
