"use client";

import { Button } from "@/components/ui/button";

import { IProviderRental } from "../types/rental";

import RentalDetailsDialog from "./RentalDetailsDialog";

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
  const approve = useApproveRental();

  const reject = useRejectRental();

  const pickup = usePickupRental();

  const returned = useReturnRental();

  return (
    <div className="flex flex-wrap items-center gap-2">

      {/* View Details */}

      <RentalDetailsDialog
        rental={rental}
      />

      {/* Pending */}

      {rental.status === "PENDING" && (
        <>
          <Button
            size="sm"
            disabled={approve.isPending}
            onClick={() =>
              approve.mutate(rental.id)
            }
          >
            {approve.isPending
              ? "Approving..."
              : "Approve"}
          </Button>

          <Button
            size="sm"
            variant="destructive"
            disabled={reject.isPending}
            onClick={() =>
              reject.mutate(rental.id)
            }
          >
            {reject.isPending
              ? "Rejecting..."
              : "Reject"}
          </Button>
        </>
      )}

      {/* Approved */}

      {rental.status === "APPROVED" && (
        <Button
          size="sm"
          disabled={pickup.isPending}
          onClick={() =>
            pickup.mutate(rental.id)
          }
        >
          {pickup.isPending
            ? "Updating..."
            : "Pick Up"}
        </Button>
      )}

      {/* Picked Up */}

      {rental.status === "PICKED_UP" && (
        <Button
          size="sm"
          disabled={returned.isPending}
          onClick={() =>
            returned.mutate(rental.id)
          }
        >
          {returned.isPending
            ? "Updating..."
            : "Return"}
        </Button>
      )}

      {/* Returned */}

      {rental.status === "RETURNED" && (
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          Completed
        </span>
      )}

      {/* Rejected */}

      {rental.status === "REJECTED" && (
        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
          Rejected
        </span>
      )}

    </div>
  );
}