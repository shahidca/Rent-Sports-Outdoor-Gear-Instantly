"use client";
import Link from "next/link";
import { useMyRentals } from "../hooks/useMyRentals";
import RentalStatusBadge from "./RentalStatusBadge";

export default function RentalTable() {
      const {
            data,
            isPending,
      } = useMyRentals();

      if (isPending) {
            return <p>Loading rentals...</p>;
      }

      const rentals = data?.data ?? [];

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

                        <thead>

                              <tr className="border-b">

                                    <th className="p-4 text-left">
                                          Gear
                                    </th>

                                    <th className="p-4 text-left">
                                          Rental Period
                                    </th>

                                    <th className="p-4 text-left">
                                          Quantity
                                    </th>

                                    <th className="p-4 text-left">
                                          Total
                                    </th>

                                    <th className="p-4 text-left">
                                          Status
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
                                          className="border-b"
                                    >

                                          <td className="p-4">
                                                {rental.gearName}
                                          </td>

                                          <td className="p-4">
                                                {rental.startDate} - {rental.endDate}
                                          </td>

                                          <td className="p-4">
                                                {rental.quantity}
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
                                                <Link
                                                      href={`/dashboard/rentals/${rental.id}`}
                                                      className="text-primary hover:underline"
                                                >
                                                      View Details
                                                </Link>
                                          </td>

                                    </tr>

                              ))}

                        </tbody>

                  </table>

            </div>
      );
}