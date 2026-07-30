"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import RentalFilters from "./RentalFilters";
import RentalStatusBadge from "./RentalStatusBadge";
import RentalActionMenu from "./RentalActionMenu";

import { useProviderRentals } from "../hooks/useProviderRentals";

export default function RentalTable() {
  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [page, setPage] =
    useState(1);

  const {
    data,
    isPending,
  } = useProviderRentals({
    search,
    status,
    page,
  });

  if (isPending) {
    return (
      <p className="py-10 text-center">
        Loading rentals...
      </p>
    );
  }

  const rentals = data?.data ?? [];

  return (
    <div className="space-y-6">

      <RentalFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      {!rentals.length ? (
        <div className="rounded-xl border p-10 text-center">
          No rental requests found.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border">

          <table className="w-full">

            <thead className="bg-muted">

              <tr>

                <th className="p-4 text-left">
                  Customer
                </th>

                <th className="p-4 text-left">
                  Gear
                </th>

                <th className="p-4 text-left">
                  Start
                </th>

                <th className="p-4 text-left">
                  End
                </th>

                <th className="p-4 text-left">
                  Total
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {rentals.map((rental) => (

                <tr
                  key={rental.id}
                  className="border-t"
                >

                  <td className="p-4">

                    <div>

                      <p className="font-medium">
                        {rental.customerName}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {rental.customerEmail}
                      </p>

                    </div>

                  </td>

                  <td className="p-4">
                    {rental.gearName}
                  </td>

                  <td className="p-4">
                    {rental.startDate}
                  </td>

                  <td className="p-4">
                    {rental.endDate}
                  </td>

                  <td className="p-4">
                    ৳{rental.totalPrice}
                  </td>

                  <td className="p-4">
                    <RentalStatusBadge
                      status={rental.status}
                    />
                  </td>

                  <td className="p-4">

                    <RentalActionMenu
                      rental={rental}
                    />

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

      <div className="flex items-center justify-between">

        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() =>
            setPage((prev) => prev - 1)
          }
        >
          Previous
        </Button>

        <span className="text-sm font-medium">
          Page {page}
        </span>

        <Button
          variant="outline"
          disabled={rentals.length === 0}
          onClick={() =>
            setPage((prev) => prev + 1)
          }
        >
          Next
        </Button>

      </div>

    </div>
  );
}