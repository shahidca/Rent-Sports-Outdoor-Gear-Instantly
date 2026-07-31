"use client";

import { useQuery } from "@tanstack/react-query";

import { getGearReviews } from "../api/review.api";

export const useGearReviews = (
  gearId: string
) => {
  return useQuery({
    queryKey: [
      "gear-reviews",
      gearId,
    ],

    queryFn: () =>
      getGearReviews(gearId),

    enabled: !!gearId,
  });
};