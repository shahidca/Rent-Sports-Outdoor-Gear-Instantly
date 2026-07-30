"use client";

import { useQuery } from "@tanstack/react-query";

import { getProviderGear } from "../api/provider-gear.api";

export const useProviderGear = () => {
  return useQuery({
    queryKey: ["provider-gear"],
    queryFn: getProviderGear,
  });
};