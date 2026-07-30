"use client";

import GearCard from "./GearCard";
import GearSkeleton from "./GearSkeleton";

import { useGear } from "../hooks/useGear";

export default function GearGrid() {
  const {
    data,
    isPending,
    isError,
  } = useGear();

  if (isPending) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <GearSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold">
          Failed to load gear.
        </h2>

        <p className="mt-2 text-muted-foreground">
          Please try again later.
        </p>
      </div>
    );
  }

  const gears = data?.data ?? [];

  if (gears.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">
          No Gear Found
        </h2>

        <p className="mt-2 text-muted-foreground">
          There are no available gear items right now.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {gears.map((gear) => (
        <GearCard
          key={gear.id}
          gear={gear}
        />
      ))}
    </div>
  );
}