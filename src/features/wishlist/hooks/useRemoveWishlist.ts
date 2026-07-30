"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { removeWishlist } from "../api/wishlist.api";

export const useRemoveWishlist = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: removeWishlist,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });
};