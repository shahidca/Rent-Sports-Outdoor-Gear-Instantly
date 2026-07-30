"use client";

import { toast } from "sonner";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { pickupRental } from "../api/provider-rental.api";

export const usePickupRental = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: pickupRental,

    onSuccess: () => {
      toast.success(
        "Gear marked as picked up."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-rentals"],
      });
    },

    onError: () => {
      toast.error(
        "Failed to update rental."
      );
    },
  });
};