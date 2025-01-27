"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex ">
      <Button
        activeFilter={activeFilter}
        filter={"all"}
        onHandleFilter={handleFilter}
      >
        All Cabins
      </Button>
      <Button
        activeFilter={activeFilter}
        filter={"small"}
        onHandleFilter={handleFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        activeFilter={activeFilter}
        filter={"medium"}
        onHandleFilter={handleFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        activeFilter={activeFilter}
        filter={"large"}
        onHandleFilter={handleFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, onHandleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 ${
        filter === activeFilter && "bg-primary-700 text-primary-50"
      } hover:bg-primary-700`}
      onClick={() => onHandleFilter(filter)}
    >
      {children}
    </button>
  );
}
