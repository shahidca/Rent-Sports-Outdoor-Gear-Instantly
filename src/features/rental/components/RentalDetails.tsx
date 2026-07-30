"use client";

import { useRentalDetails } from "../hooks/useRentalDetails";

import RentalStatusBadge from "./RentalStatusBadge";

interface Props {
  id: string;
}

export default function RentalDetails({
  id,
}: Props) {
  const {
    data,
    isPending,
  } = useRentalDetails(id);

  if (isPending) {
    return <p>Loading...</p>;
  }

  const rental = data?.data;

  if (!rental) {
    return <p>Rental not found.</p>;
  }

  return (
    <div className="rounded-xl border bg-card p-6">

      <h1 className="mb-6 text-3xl font-bold">
        Rental Details
      </h1>

      <div className="grid gap-4 md:grid-cols-2">

        <div>
          <strong>Gear</strong>
          <p>{rental.gearName}</p>
        </div>

        <div>
          <strong>Quantity</strong>
          <p>{rental.quantity}</p>
        </div>

        <div>
          <strong>Start Date</strong>
          <p>{rental.startDate}</p>
        </div>

        <div>
          <strong>End Date</strong>
          <p>{rental.endDate}</p>
        </div>

        <div>
          <strong>Total Price</strong>
          <p>৳{rental.totalPrice}</p>
        </div>

        <div>
          <strong>Payment Status</strong>
          <p>{rental.paymentStatus}</p>
        </div>

        <div>
          <strong>Rental Status</strong>

          <RentalStatusBadge
            status={rental.rentalStatus}
          />
        </div>

      </div>

    </div>
  );
}