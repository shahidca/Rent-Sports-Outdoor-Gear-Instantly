"use client";

import Link from "next/link";

import DeleteGearDialog from "./DeleteGearDialog";
import { useProviderGear } from "../hooks/useProviderGear";

export default function GearTable() {
  const {
    data,
    isPending,
  } = useProviderGear();

  if (isPending) {
    return (
      <p className="text-center py-10">
        Loading gear...
      </p>
    );
  }

  const gears = data?.data ?? [];

  if (!gears.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        No gear available.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border">

      <table className="w-full">

        <thead className="bg-muted">

          <tr>

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Category
            </th>

            <th className="p-4 text-left">
              Price / Day
            </th>

            <th className="p-4 text-left">
              Quantity
            </th>

            <th className="p-4 text-left">
              Available
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {gears.map((gear) => (

            <tr
              key={gear.id}
              className="border-t"
            >

              <td className="p-4">
                {gear.name}
              </td>

              <td className="p-4">
                {gear.category}
              </td>

              <td className="p-4">
                ৳{gear.pricePerDay}
              </td>

              <td className="p-4">
                {gear.quantity}
              </td>

              <td className="p-4">
                {gear.available ? (
                  <span className="rounded bg-green-100 px-2 py-1 text-sm text-green-700">
                    Available
                  </span>
                ) : (
                  <span className="rounded bg-red-100 px-2 py-1 text-sm text-red-700">
                    Unavailable
                  </span>
                )}
              </td>

              <td className="p-4">

                <div className="flex items-center gap-3">

                  <Link
                    href={`/dashboard/provider/gear/${gear.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <DeleteGearDialog
                    gearId={gear.id}
                  />

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}