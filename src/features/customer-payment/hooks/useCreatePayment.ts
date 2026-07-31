"use client";

import { useMutation } from "@tanstack/react-query";
import { createPayment } from "../api/payment.api";

export const useCreatePayment = () => {
  return useMutation({
    mutationFn: createPayment,
  });
};