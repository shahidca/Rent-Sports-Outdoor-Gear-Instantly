"use client";

import { useQuery } from "@tanstack/react-query";

import { getGearDetails } from "../api/customer-gear-details.api";

export const useGearDetails = (
  id: string
) => {
  return useQuery({
    queryKey: [
      "gear-details",
      id,
    ],

    queryFn: () =>
      getGearDetails(id),

    enabled: !!id,
  });
};