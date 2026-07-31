"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ICustomerGear } from "../types/gear";

interface Props {
  gear: ICustomerGear;
}

export default function GearCard({
  gear,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-sm">

      <div className="relative h-56">

        <Image
          src={gear.image}
          alt={gear.name}
          fill
          className="object-cover"
        />

      </div>

      <div className="space-y-3 p-5">

        <h3 className="text-xl font-semibold">
          {gear.name}
        </h3>

        <p className="text-sm text-muted-foreground">
          {gear.category}
        </p>

        <p className="line-clamp-2 text-sm">
          {gear.description}
        </p>

        <div className="flex items-center justify-between">

          <span className="font-bold text-primary">
            ৳{gear.pricePerDay}/day
          </span>

          <span className="text-sm">
            ⭐ {gear.rating}
          </span>

        </div>

        <Link
          href={`/gear/${gear.id}`}
        >
          <Button className="w-full">
            View Details
          </Button>
        </Link>

      </div>

    </div>
  );
}