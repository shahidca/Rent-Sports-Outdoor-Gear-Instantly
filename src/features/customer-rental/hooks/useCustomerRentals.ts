"use client";

import { useQuery } from "@tanstack/react-query";

// import { getCustomerRentals } from "../api/customer-rentals.api";
import { ICustomerRental } from "../types/rental";
import { getCustomerRentals } from "../api/customer-rental.api";


interface CustomerRentalsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: ICustomerRental[];
}

export const useCustomerRentals = () =>
  useQuery<CustomerRentalsResponse>({
    queryKey: ["customer-rentals"],
    queryFn: getCustomerRentals,
  });