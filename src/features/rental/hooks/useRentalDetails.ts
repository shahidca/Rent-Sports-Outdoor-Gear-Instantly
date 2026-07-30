"use client";

import { useQuery } from "@tanstack/react-query";

import { getRentalById } from "../api/rental.api";

export const useRentalDetails = (
  id: string
) => {
  return useQuery({
    queryKey: ["rental", id],
    queryFn: () => getRentalById(id),
    enabled: !!id,
  });
};