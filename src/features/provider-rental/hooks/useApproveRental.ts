"use client";

import { toast } from "sonner";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { approveRental } from "../api/provider-rental.api";

export const useApproveRental = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: approveRental,

    onSuccess: () => {
      toast.success(
        "Rental approved successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-rentals"],
      });
    },

    onError: () => {
      toast.error(
        "Failed to approve rental."
      );
    },
  });
};