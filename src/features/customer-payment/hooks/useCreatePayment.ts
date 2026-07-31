"use client";

import {
  useMutation,
} from "@tanstack/react-query";

import { toast } from "sonner";

import { createPayment } from "../api/payment.api";

export const useCreatePayment =
  () =>
    useMutation({
      mutationFn: createPayment,

      onSuccess: (data) => {
        toast.success(
          "Payment created successfully."
        );

        console.log(data);
      },

      onError: () => {
        toast.error(
          "Payment failed."
        );
      },
    });