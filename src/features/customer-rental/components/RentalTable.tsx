"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import CancelRentalDialog from "./CancelRentalDialog";
import PaymentStatusBadge from "./PaymentStatusBadge";
import RentalDetailsDialog from "./RentalDetailsDialog";
import RentalStatusBadge from "./RentalStatusBadge";

import { useCustomerRentals } from "../hooks/useCustomerRentals";
import { ICustomerRental } from "../types/rental";

export default function RentalTable() {
  const {
    data,
    isPending,
  } = useCustomerRentals();

  if (isPending) {
    return (
      <p className="py-10 text-center">
        Loading rentals...
      </p>
    );
  }

  const rentals: ICustomerRental[] =
    data?.data ?? [];

  if (!rentals.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        No rentals found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border">

      <table className="w-full">

        <thead className="bg-muted">

          <tr>

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
              Rental
            </th>

            <th className="p-4 text-left">
              Payment
            </th>

            <th className="p-4 text-left">
              Action
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

                <div className="flex items-center gap-3">

                  <img
                    src={rental.gearImage}
                    alt={rental.gearName}
                    className="h-14 w-14 rounded-lg object-cover"
                  />

                  <span className="font-medium">
                    {rental.gearName}
                  </span>

                </div>

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
                  status={rental.rentalStatus}
                />

              </td>

              <td className="p-4">

                <PaymentStatusBadge
                  status={rental.paymentStatus}
                />

              </td>

              <td className="p-4">

                <div className="flex flex-wrap gap-2">

                  <RentalDetailsDialog
                    rental={rental}
                  />

                  {rental.rentalStatus ===
                    "PLACED" && (
                    <CancelRentalDialog
                      rentalId={rental.id}
                    />
                  )}

                  {rental.rentalStatus ===
                    "CONFIRMED" &&
                    rental.paymentStatus !==
                      "COMPLETED" && (
                    <Link
                      href={`/dashboard/customer/payments/${rental.id}`}
                    >
                      <Button size="sm">
                        Pay Now
                      </Button>
                    </Link>
                  )}

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}