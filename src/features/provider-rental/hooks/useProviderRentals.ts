"use client";

import { useQuery } from "@tanstack/react-query";

import { getProviderRentals } from "../api/provider-rental.api";

export const useProviderRentals = () => {
  return useQuery({
    queryKey: ["provider-rentals"],
    queryFn: getProviderRentals,
  });
};