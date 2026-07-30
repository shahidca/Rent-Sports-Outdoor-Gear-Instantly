"use client";

import { useQuery } from "@tanstack/react-query";

import { getProviderGearById } from "../api/provider-gear.api";

export const useProviderGearDetails = (
  id: string
) => {
  return useQuery({
    queryKey: ["provider-gear", id],
    queryFn: () =>
      getProviderGearById(id),
    enabled: !!id,
  });
};