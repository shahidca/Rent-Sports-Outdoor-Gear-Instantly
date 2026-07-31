"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { useGearDetails } from "../hooks/useGearDetails";

interface Props {
  id: string;
}

export default function GearDetails({
  id,
}: Props) {
  const {
    data,
    isPending,
  } = useGearDetails(id);

  if (isPending) {
    return (
      <p className="py-10 text-center">
        Loading...
      </p>
    );
  }

  const gear = data?.data;

  if (!gear) {
    return (
      <p className="py-10 text-center">
        Gear not found.
      </p>
    );
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-2">

      <div className="relative aspect-square overflow-hidden rounded-xl border">

        <Image
          src={gear.image}
          alt={gear.name}
          fill
          className="object-cover"
        />

      </div>

      <div className="space-y-5">

        <h1 className="text-4xl font-bold">
          {gear.name}
        </h1>

        <p className="text-muted-foreground">
          {gear.category}
        </p>

        <div className="text-xl font-semibold text-primary">
          ৳{gear.pricePerDay} / day
        </div>

        <div>

          Available :

          <span className="ml-2 font-semibold">

            {gear.available
              ? "Yes"
              : "No"}

          </span>

        </div>

        <div>

          Quantity :

          <span className="ml-2">

            {gear.quantity}

          </span>

        </div>

        <div>

          <h2 className="mb-2 text-xl font-semibold">
            Description
          </h2>

          <p className="text-muted-foreground">
            {gear.description}
          </p>

        </div>

        <Button
          size="lg"
          className="w-full md:w-auto"
        >
          Rent Now
        </Button>

      </div>

    </section>
  );
}