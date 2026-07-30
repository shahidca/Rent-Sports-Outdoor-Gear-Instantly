import Link from "next/link";

import { IGear } from "../types/gear";

import { Button } from "@/components/ui/button";

interface Props {
  gear: IGear;
}

export default function GearCard({
  gear,
}: Props) {
  return (
    <div className="rounded-xl border p-4 shadow-sm">

      <div className="aspect-square rounded-lg bg-muted" />

      <h3 className="mt-4 text-lg font-semibold">
        {gear.name}
      </h3>

      <p className="text-sm text-muted-foreground">
        {gear.brand}
      </p>

      <p className="mt-2 font-bold">
        ৳{gear.pricePerDay}/day
      </p>

      <Link href={`/gear/${gear.id}`}>
        <Button className="mt-4 w-full">
          View Details
        </Button>
      </Link>
    </div>
  );
}