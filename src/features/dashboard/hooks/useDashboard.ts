"use client";

import { useQuery } from "@tanstack/react-query";

import { getDashboardOverview } from "../api/dashboard.api";

export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardOverview,
  });
};