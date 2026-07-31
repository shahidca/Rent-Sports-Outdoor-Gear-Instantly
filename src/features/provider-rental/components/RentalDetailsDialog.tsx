"use client";

import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import { IProviderRental } from "../types/rental";
import RentalStatusBadge from "./RentalStatusBadge";

interface Props {
  rental: IProviderRental;
}

export default function RentalDetailsDialog({
  rental,
}: Props) {
  return (
    <AlertDialog>

      <AlertDialogTrigger>

        <Button
          variant="outline"
          size="sm"
        >
          View
        </Button>

      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-2xl">

        <AlertDialogHeader>

          <AlertDialogTitle>
            Rental Details
          </AlertDialogTitle>

        </AlertDialogHeader>

        <div className="space-y-6">

          <div>

            <h3 className="mb-2 font-semibold">
              Customer Information
            </h3>

            <p>
              <strong>Name:</strong>{" "}
              {rental.customerName}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {rental.customerEmail}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {rental.customerPhone ?? "-"}
            </p>

          </div>

          <div>

            <h3 className="mb-2 font-semibold">
              Gear Information
            </h3>

            <p>
              <strong>Gear:</strong>{" "}
              {rental.gearName}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {rental.gearCategory ?? "-"}
            </p>

            <p>
              <strong>Quantity:</strong>{" "}
              {rental.quantity}
            </p>

          </div>

          <div>

            <h3 className="mb-2 font-semibold">
              Rental Period
            </h3>

            <p>
              <strong>Start:</strong>{" "}
              {rental.startDate}
            </p>

            <p>
              <strong>End:</strong>{" "}
              {rental.endDate}
            </p>

          </div>

          <div>

            <p>
              <strong>Total Price:</strong>{" "}
              ৳{rental.totalPrice}
            </p>

            <div className="mt-2">

              <RentalStatusBadge
                status={rental.status}
              />

            </div>

          </div>

          <div>

            <h3 className="mb-2 font-semibold">
              Notes
            </h3>

            <p>
              {rental.notes || "No notes"}
            </p>

          </div>

        </div>

        <AlertDialogFooter>

          <AlertDialogCancel>
            Close
          </AlertDialogCancel>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  );
}