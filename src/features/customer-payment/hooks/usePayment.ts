"use client";

import { useQuery } from "@tanstack/react-query";

import { getPaymentById } from "../api/payment.api";

export const usePayment = (
  paymentId: string
) => {
  return useQuery({
    queryKey: [
      "customer-payment",
      paymentId,
    ],
    queryFn: () =>
      getPaymentById(paymentId),
    enabled: !!paymentId,
  });
};