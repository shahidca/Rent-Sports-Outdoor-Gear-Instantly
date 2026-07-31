"use client";

import { useQuery } from "@tanstack/react-query";

import { getMyPayments } from "../api/payment.api";

export const useMyPayments = () => {
  return useQuery({
    queryKey: ["customer-payments"],
    queryFn: getMyPayments,
  });
};