"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { createReview } from "../api/review.api";

export const useCreateReview = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      rentalId,
      rating,
      comment,
    }: {
      rentalId: string;
      rating: number;
      comment: string;
    }) =>
      createReview(
        rentalId,
        rating,
        comment
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });
    },
  });
};