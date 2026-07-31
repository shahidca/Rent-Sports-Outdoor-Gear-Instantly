"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { ICustomerRental } from "../types/rental";

interface Props {
  rental: ICustomerRental;
}

export default function RentalDetailsDialog({
  rental,
}: Props) {
  return (
    <Dialog>

      <DialogTrigger>

        <Button
          size="sm"
          variant="outline"
        >
          View
        </Button>

      </DialogTrigger>

      <DialogContent>

        <DialogHeader>

          <DialogTitle>
            Rental Details
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-4">

          <div>

            <p className="text-sm text-muted-foreground">
              Gear
            </p>

            <p className="font-medium">
              {rental.gearName}
            </p>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Rental Period
            </p>

            <p>
              {rental.startDate} → {rental.endDate}
            </p>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Total Price
            </p>

            <p>
              ৳{rental.totalPrice}
            </p>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Rental Status
            </p>

            <p>
              {rental.rentalStatus}
            </p>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Payment Status
            </p>

            <p>
              {rental.paymentStatus}
            </p>

          </div>

        </div>

      </DialogContent>

    </Dialog>
  );
}