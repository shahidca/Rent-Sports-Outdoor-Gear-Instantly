"use client";

import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../components/CheckoutForm";
import { createPayment } from "../api/payment.api";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface Props {
  rentalOrderId: string;
}

interface PaymentResponse {
  clientSecret: string;
  paymentIntentId: string;
}

export default function PaymentPage({
  rentalOrderId,
}: Props) {
  const [loading, setLoading] =
    useState(true);

  const [payment, setPayment] =
    useState<PaymentResponse | null>(
      null
    );

  useEffect(() => {
    const loadPayment =
      async () => {
        try {
          const response =
            await createPayment(
              rentalOrderId
            );

          setPayment(
            response.data
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    loadPayment();
  }, [rentalOrderId]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Creating payment...
      </div>
    );
  }

  if (!payment) {
    return (
      <div className="py-20 text-center text-red-500">
        Failed to create payment.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg rounded-xl border p-6">

      <h1 className="mb-6 text-2xl font-bold">
        Complete Payment
      </h1>

      <Elements
        stripe={stripePromise}
        options={{
          clientSecret:
            payment.clientSecret,
        }}
      >
        <CheckoutForm
          paymentIntentId={
            payment.paymentIntentId
          }
          clientSecret={
            payment.clientSecret
          }
        />
      </Elements>

    </div>
  );
}