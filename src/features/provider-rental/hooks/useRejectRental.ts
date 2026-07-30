"use client";

import { toast } from "sonner";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { rejectRental } from "../api/provider-rental.api";

export const useRejectRental = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: rejectRental,

    onSuccess: () => {
      toast.success(
        "Rental rejected."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-rentals"],
      });
    },

    onError: () => {
      toast.error(
        "Failed to reject rental."
      );
    },
  });
};