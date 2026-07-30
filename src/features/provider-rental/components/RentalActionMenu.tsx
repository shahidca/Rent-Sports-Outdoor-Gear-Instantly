"use client";

import { Button } from "@/components/ui/button";

import { IProviderRental } from "../types/rental";

import { useApproveRental } from "../hooks/useApproveRental";
import { useRejectRental } from "../hooks/useRejectRental";
import { usePickupRental } from "../hooks/usePickupRental";
import { useReturnRental } from "../hooks/useReturnRental";

interface Props {
  rental: IProviderRental;
}

export default function RentalActionMenu({
  rental,
}: Props) {
  const approve =
    useApproveRental();

  const reject =
    useRejectRental();

  const pickup =
    usePickupRental();

  const returned =
    useReturnRental();

  return (
    <div className="flex flex-wrap gap-2">

      {rental.status ===
        "PENDING" && (
        <>
          <Button
            size="sm"
            disabled={
              approve.isPending
            }
            onClick={() =>
              approve.mutate(
                rental.id
              )
            }
          >
            Approve
          </Button>

          <Button
            size="sm"
            variant="destructive"
            disabled={
              reject.isPending
            }
            onClick={() =>
              reject.mutate(
                rental.id
              )
            }
          >
            Reject
          </Button>
        </>
      )}

      {rental.status ===
        "APPROVED" && (
        <Button
          size="sm"
          disabled={
            pickup.isPending
          }
          onClick={() =>
            pickup.mutate(
              rental.id
            )
          }
        >
          Pick Up
        </Button>
      )}

      {rental.status ===
        "PICKED_UP" && (
        <Button
          size="sm"
          disabled={
            returned.isPending
          }
          onClick={() =>
            returned.mutate(
              rental.id
            )
          }
        >
          Return
        </Button>
      )}

      {rental.status ===
        "RETURNED" && (
        <span className="font-medium text-green-600">
          Completed
        </span>
      )}

      {rental.status ===
        "REJECTED" && (
        <span className="font-medium text-red-600">
          Rejected
        </span>
      )}

    </div>
  );
}