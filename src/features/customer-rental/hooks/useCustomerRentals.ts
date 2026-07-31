"use client";

import { useQuery } from "@tanstack/react-query";
import { getCustomerRentals } from "../api/customer-rental.api";

// import { getCustomerRentals } from "../api/customer-rentals.api";

export const useCustomerRentals = () =>
  useQuery({
    queryKey: ["customer-rentals"],

    queryFn: getCustomerRentals,
  });