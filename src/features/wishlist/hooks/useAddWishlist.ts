"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { addWishlist } from "../api/wishlist.api";

export const useAddWishlist = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: addWishlist,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });
};