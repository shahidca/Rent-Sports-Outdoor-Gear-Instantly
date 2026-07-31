"use client";

import { useQuery } from "@tanstack/react-query";

import { getCustomerGear } from "../api/customer-gear.api";

interface Props {
  search: string;
  category: string;
  page: number;
}

export const useCustomerGear = ({
  search,
  category,
  page,
}: Props) => {
  return useQuery({
    queryKey: [
      "customer-gear",
      search,
      category,
      page,
    ],

    queryFn: () =>
      getCustomerGear({
        search,
        category,
        page,
      }),
  });
};