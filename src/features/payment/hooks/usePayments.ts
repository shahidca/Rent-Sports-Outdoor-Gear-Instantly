"use client";

import { useQuery } from "@tanstack/react-query";

import { getMyPayments } from "../api/payment.api";

export const usePayments = () => {
  return useQuery({
    queryKey: ["payments"],
    queryFn: getMyPayments,
  });
};