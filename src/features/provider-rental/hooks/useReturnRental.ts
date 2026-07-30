"use client";

import { toast } from "sonner";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { returnRental } from "../api/provider-rental.api";

export const useReturnRental = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: returnRental,

    onSuccess: () => {
      toast.success(
        "Rental completed."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-rentals"],
      });
    },

    onError: () => {
      toast.error(
        "Failed to complete rental."
      );
    },
  });
};