"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { createGear } from "../api/provider-gear.api";

export const useCreateGear = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createGear,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["provider-gear"],
      });
    },
  });
};