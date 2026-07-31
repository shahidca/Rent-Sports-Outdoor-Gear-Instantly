"use client";

import GearCard from "./GearCard";

import { useCustomerGear } from "../hooks/useCustomerGear";

interface Props {
  search: string;
  category: string;
  page: number;
}

export default function GearGrid({
  search,
  category,
  page,
}: Props) {
  const {
    data,
    isPending,
  } = useCustomerGear({
    search,
    category,
    page,
  });

  if (isPending) {
    return (
      <p className="py-10 text-center">
        Loading gear...
      </p>
    );
  }

  const gears = data?.data ?? [];

  if (!gears.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        No gear found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {gears.map((gear) => (
        <GearCard
          key={gear.id}
          gear={gear}
        />
      ))}

    </div>
  );
}