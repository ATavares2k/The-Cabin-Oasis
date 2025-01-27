import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-service";

export default async function CabinList({ filter }) {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;

  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((cabins) => cabins.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabins) => cabins.maxCapacity >= 4 && cabins.maxCapacity <= 7
    );
  if (filter === "large")
    displayedCabins = cabins.filter((cabins) => cabins.maxCapacity >= 8);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.length > 0 &&
        displayedCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
    </div>
  );
}
