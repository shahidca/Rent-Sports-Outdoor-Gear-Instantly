"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";
import { cancelRental } from "../api/customer-rental.api";


export const useCancelRental = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: cancelRental,

    onSuccess: () => {
      toast.success(
        "Rental cancelled successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["customer-rentals"],
      });
    },

    onError: () => {
      toast.error(
        "Failed to cancel rental."
      );
    },
  });
};