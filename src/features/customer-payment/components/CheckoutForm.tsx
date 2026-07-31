"use client";

import { FormEvent, useState } from "react";

import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { Button } from "@/components/ui/button";

import { confirmPayment } from "../api/payment.api";

interface Props {
  clientSecret: string;
  paymentIntentId: string;
}

export default function CheckoutForm({
  clientSecret,
  paymentIntentId,
}: Props) {
  const stripe = useStripe();

  const elements = useElements();

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: FormEvent
  ) => {
    e.preventDefault();

    if (!stripe || !elements)
      return;

    setLoading(true);

    const card =
      elements.getElement(
        CardElement
      );

    if (!card) {
      setLoading(false);
      return;
    }

    const result =
      await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card,
          },
        }
      );

    if (result.error) {
      alert(
        result.error.message
      );

      setLoading(false);
      return;
    }

    if (
      result.paymentIntent?.status ===
      "succeeded"
    ) {
      await confirmPayment(
        paymentIntentId
      );

      window.location.href =
        "/dashboard/customer/payments/success";
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="rounded-lg border p-4">

        <CardElement />

      </div>

      <Button
        className="w-full"
        disabled={
          loading ||
          !stripe
        }
      >
        {loading
          ? "Processing..."
          : "Pay Now"}
      </Button>
    </form>
  );
}