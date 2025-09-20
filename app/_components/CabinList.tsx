import { getCabins } from "../_lib/data";
import CabinCard from "./CabinCard";
import { connection } from "next/server";

async function CabinList() {
  await connection();

  const cabins = await getCabins();

  if (!cabins.length) return null;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
      {cabins.map((cabin) => {
        return <CabinCard cabin={cabin} key={cabin.id} />;
      })}
    </div>
  );
}

export default CabinList;
