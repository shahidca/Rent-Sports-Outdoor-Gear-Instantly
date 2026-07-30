"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";
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
            isError,
      } = useGearDetails(id);

      if (isPending) {
            return (
                  <p className="text-center">
                        Loading...
                  </p>
            );
      }

      if (isError) {
            return (
                  <p className="text-center">
                        Failed to load gear.
                  </p>
            );
      }

      const gear = data?.data;

      if (!gear) {
            return (
                  <p className="text-center">
                        Gear not found.
                  </p>
            );
      }

      return (
            <div className="grid gap-10 md:grid-cols-2">

                  <div className="relative aspect-square overflow-hidden rounded-xl border">

                        <Image
                              src={gear.image}
                              alt={gear.name}
                              fill
                              className="object-cover"
                        />

                  </div>

                  <div>

                        <h1 className="text-4xl font-bold">
                              {gear.name}
                        </h1>

                        <p className="mt-4 text-muted-foreground">
                              {gear.description}
                        </p>

                        <div className="mt-6 space-y-2">

                              <p>
                                    <strong>Brand:</strong> {gear.brand}
                              </p>

                              <p>
                                    <strong>Price:</strong> ৳{gear.pricePerDay}/day
                              </p>

                              <p>
                                    <strong>Available:</strong>{" "}
                                    {gear.availableQuantity}
                              </p>

                              <p>
                                    <strong>Rating:</strong>{" "}
                                    {gear.averageRating}
                              </p>

                        </div>

                        <Link href={`/gear/${gear.id}/rent`}>
                              <Button
                                    className="mt-8"
                                    size="lg"
                              >
                                    Rent Now
                              </Button>
                        </Link>

                  </div>

            </div>
      );
}