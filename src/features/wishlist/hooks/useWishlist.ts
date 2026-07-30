"use client";

import { useQuery } from "@tanstack/react-query";

import { getWishlist } from "../api/wishlist.api";

export const useWishlist = () => {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });
};