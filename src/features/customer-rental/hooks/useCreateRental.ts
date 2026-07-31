"use client";

import { useRouter } from "next/navigation";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import { createRental } from "../api/customer-rental.api";

export const useCreateRental = () => {
  const router = useRouter();

  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createRental,

    onSuccess: () => {
      toast.success(
        "Rental request submitted successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["customer-rentals"],
      });

      router.push(
        "/dashboard/customer/rentals"
      );
    },

    onError: () => {
      toast.error(
        "Failed to submit rental request."
      );
    },
  });
};