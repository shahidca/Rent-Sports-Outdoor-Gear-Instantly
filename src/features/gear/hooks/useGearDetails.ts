"use client";

import { useQuery } from "@tanstack/react-query";

import { getGearById } from "../api/gear.api";

export const useGearDetails = (
  id: string
) => {
  return useQuery({
    queryKey: ["gear", id],
    queryFn: () => getGearById(id),
    enabled: !!id,
  });
};