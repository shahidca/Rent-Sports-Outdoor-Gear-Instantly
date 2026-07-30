"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { deleteGear } from "../api/provider-gear.api";

export const useDeleteGear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGear,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["provider-gear"],
      });
    },
  });
};