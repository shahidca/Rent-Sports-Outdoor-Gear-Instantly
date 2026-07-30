"use client";

import { useQuery } from "@tanstack/react-query";

import { getProviderRentals } from "../api/provider-rental.api";

interface Props {
  search: string;
  status: string;
  page: number;
}

export const useProviderRentals = ({
  search,
  status,
  page,
}: Props) => {
  return useQuery({
    queryKey: [
      "provider-rentals",
      search,
      status,
      page,
    ],
    queryFn: () =>
      getProviderRentals({
        search,
        status,
        page,
      }),
  });
};