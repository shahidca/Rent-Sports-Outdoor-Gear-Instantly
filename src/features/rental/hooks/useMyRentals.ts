"use client";

import { useQuery } from "@tanstack/react-query";

import { getMyRentals } from "../api/rental.api";

export const useMyRentals = () => {
  return useQuery({
    queryKey: ["my-rentals"],
    queryFn: getMyRentals,
  });
};