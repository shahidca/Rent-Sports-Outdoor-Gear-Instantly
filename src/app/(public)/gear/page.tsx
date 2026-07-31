"use client";

import { useState } from "react";

import GearGrid from "@/features/customer-gear/components/GearGrid";
import GearFilters from "@/features/customer-gear/components/GearFilters";
import GearPagination from "@/features/customer-gear/components/GearPagination";


export default function BrowseGearPage() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [page, setPage] = useState(1);

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-10">

      <div>

        <h1 className="text-4xl font-bold">
          Browse Gear
        </h1>

        <p className="mt-2 text-muted-foreground">
          Discover sports and outdoor equipment for your next adventure.
        </p>

      </div>

      <GearFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <GearGrid
        search={search}
        category={category}
        page={page}
      />

      <GearPagination
        page={page}
        setPage={setPage}
      />

    </section>
  );
}