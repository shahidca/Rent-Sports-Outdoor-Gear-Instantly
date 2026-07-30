"use client";

import { useQuery } from "@tanstack/react-query";

import { getProviderDashboard } from "../api/provider.api";

export const useProviderDashboard = () => {
  return useQuery({
    queryKey: ["provider-dashboard"],
    queryFn: getProviderDashboard,
  });
};