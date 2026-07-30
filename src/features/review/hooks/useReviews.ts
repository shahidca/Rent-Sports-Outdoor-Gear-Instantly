"use client";

import { useQuery } from "@tanstack/react-query";

import { getMyReviews } from "../api/review.api";

export const useReviews = () => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: getMyReviews,
  });
};