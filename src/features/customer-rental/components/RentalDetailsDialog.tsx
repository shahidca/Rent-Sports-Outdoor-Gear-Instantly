"use client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useCreatePayment } from "@/features/customer-payment/hooks/useCreatePayment";

import { ICustomerRental } from "../types/rental";

interface Props {
  rental: ICustomerRental;
}

export default function RentalDetailsDialog({
  rental,
}: Props) {
  const router = useRouter();

  const payment =
    useCreatePayment();

  const handlePayment = () => {
    payment.mutate(rental.id, {
      onSuccess: () => {
        toast.success(
          "Payment initialized successfully."
        );

        router.push(
          `/dashboard/customer/payments/${rental.id}`
        );
      },

      onError: () => {
        toast.error(
          "Unable to create payment."
        );
      },
    });
  };

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

      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle>
            Rental Details
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-5">

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

            <p className="font-semibold">
              ৳{rental.totalPrice}
            </p>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Rental Status
            </p>

            <p className="font-medium">
              {rental.rentalStatus}
            </p>

          </div>

          <div>

            <p className="text-sm text-muted-foreground">
              Payment Status
            </p>

            <p className="font-medium">
              {rental.paymentStatus}
            </p>

          </div>

          {rental.rentalStatus ===
            "CONFIRMED" &&
            rental.paymentStatus !==
              "COMPLETED" && (

              <Button
                className="w-full"
                onClick={handlePayment}
                disabled={
                  payment.isPending
                }
              >
                {payment.isPending
                  ? "Creating Payment..."
                  : "Pay Now"}
              </Button>

            )}

        </div>

      </DialogContent>

    </Dialog>
  );
}