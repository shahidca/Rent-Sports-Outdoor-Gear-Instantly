"use client";

import Link from "next/link";

import { useProviderGear } from "../hooks/useProviderGear";

export default function GearTable() {
  const {
    data,
    isPending,
  } = useProviderGear();

  if (isPending) {
    return <p>Loading gear...</p>;
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

        <thead>

          <tr className="border-b">

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Category
            </th>

            <th className="p-4 text-left">
              Price/Day
            </th>

            <th className="p-4 text-left">
              Quantity
            </th>

            <th className="p-4 text-left">
              Available
            </th>

            <th className="p-4 text-left">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {gears.map((gear) => (

            <tr
              key={gear.id}
              className="border-b"
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
                {gear.available
                  ? "Yes"
                  : "No"}
              </td>

              <td className="p-4">
                <Link
                  href={`/dashboard/provider/gear/${gear.id}/edit`}
                  className="text-primary hover:underline"
                >
                  Edit
                </Link>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}