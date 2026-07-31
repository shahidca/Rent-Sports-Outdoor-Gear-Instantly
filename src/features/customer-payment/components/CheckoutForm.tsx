"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { confirmPayment } from "../api/payment.api";

interface Props {
  clientSecret: string;
  paymentIntentId: string;
}

export default function CheckoutForm({
  paymentIntentId,
}: Props) {
  const stripe = useStripe();

  const elements = useElements();

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const result =
      await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

    if (result.error) {
      toast.error(
        result.error.message ??
        "Payment failed."
      );

      setLoading(false);

      return;
    }

    try {
      await confirmPayment(
        paymentIntentId
      );

      toast.success(
        "Payment completed successfully."
      );

      router.push(
        "/dashboard/customer/payment/success"
      );
    } catch {
      toast.error(
        "Payment verification failed."
      );
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <PaymentElement />

      <Button
        type="submit"
        className="w-full"
        disabled={
          !stripe ||
          !elements ||
          loading
        }
      >
        {loading
          ? "Processing..."
          : "Pay Now"}
      </Button>
    </form>
  );
}