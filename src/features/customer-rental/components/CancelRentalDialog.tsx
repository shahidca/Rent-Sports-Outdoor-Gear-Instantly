"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

import { useCancelRental } from "../hooks/useCancelRental";

interface Props {
  rentalId: string;
}

export default function CancelRentalDialog({
  rentalId,
}: Props) {
  const mutation =
    useCancelRental();

  return (
    <AlertDialog>

      <AlertDialogTrigger>

        <Button
          size="sm"
          variant="destructive"
        >
          Cancel
        </Button>

      </AlertDialogTrigger>

      <AlertDialogContent>

        <AlertDialogHeader>

          <AlertDialogTitle>
            Cancel this rental?
          </AlertDialogTitle>

        </AlertDialogHeader>

        <AlertDialogFooter>

          <AlertDialogCancel>
            No
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={() =>
              mutation.mutate(
                rentalId
              )
            }
          >
            Yes, Cancel
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  );
}