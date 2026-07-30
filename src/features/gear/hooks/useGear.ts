"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllGear } from "../api/gear.api";

export const useGear = () => {
  return useQuery({
    queryKey: ["gear"],
    queryFn: getAllGear,
  });
};