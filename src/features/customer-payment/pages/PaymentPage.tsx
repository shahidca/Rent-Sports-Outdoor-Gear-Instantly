"use client";

import { useEffect, useState } from "react";

import CheckoutForm from "../components/CheckoutForm";
import { createPayment } from "../api/payment.api";

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

      <h2 className="mb-6 text-2xl font-bold">
        Complete Payment
      </h2>

      <CheckoutForm
        clientSecret={
          payment.clientSecret
        }
        paymentIntentId={
          payment.paymentIntentId
        }
      />

    </div>
  );
}