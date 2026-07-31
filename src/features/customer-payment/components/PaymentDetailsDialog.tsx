"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { ICustomerPayment } from "../types/payment";

interface Props {
  payment: ICustomerPayment;
}

export default function PaymentDetailsDialog({
  payment,
}: Props) {
  return (
    <Dialog>

  <DialogTrigger>

    <Button
      size="sm"
      variant="outline"
    >
      Details
    </Button>

  </DialogTrigger>

  <DialogContent>

    <DialogHeader>

      <DialogTitle>
        Payment Details
      </DialogTitle>

    </DialogHeader>

    {/* ... */}

  </DialogContent>

</Dialog>
  );
}