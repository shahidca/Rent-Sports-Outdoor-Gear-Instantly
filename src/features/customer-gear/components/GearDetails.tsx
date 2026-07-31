"use client";

import Image from "next/image";

import { useGearDetails } from "../hooks/useGearDetails";

import RentalBookingForm from "@/features/customer-rental/components/RentalBookingForm";

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
    <section className="mx-auto max-w-7xl px-4 py-10">

      <div className="grid gap-10 lg:grid-cols-2">

        {/* Gear Image */}

        <div className="relative aspect-square overflow-hidden rounded-xl border">

          <Image
            src={gear.image}
            alt={gear.name}
            fill
            className="object-cover"
          />

        </div>

        {/* Gear Information */}

        <div className="space-y-6">

          <div>

            <h1 className="text-4xl font-bold">
              {gear.name}
            </h1>

            <p className="mt-2 text-muted-foreground">
              {gear.category}
            </p>

          </div>

          <div>

            <span className="text-3xl font-bold text-primary">
              ৳{gear.pricePerDay}
            </span>

            <span className="ml-2 text-muted-foreground">
              / day
            </span>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-lg border p-4">

              <p className="text-sm text-muted-foreground">
                Availability
              </p>

              <p className="mt-1 font-semibold">
                {gear.available
                  ? "Available"
                  : "Unavailable"}
              </p>

            </div>

            <div className="rounded-lg border p-4">

              <p className="text-sm text-muted-foreground">
                Quantity
              </p>

              <p className="mt-1 font-semibold">
                {gear.quantity}
              </p>

            </div>

          </div>

          <div>

            <h2 className="mb-2 text-xl font-semibold">
              Description
            </h2>

            <p className="leading-7 text-muted-foreground">
              {gear.description}
            </p>

          </div>

          {/* Booking Form */}

          <RentalBookingForm
            gearId={gear.id}
            pricePerDay={gear.pricePerDay}
          />

        </div>

      </div>

    </section>
  );
}