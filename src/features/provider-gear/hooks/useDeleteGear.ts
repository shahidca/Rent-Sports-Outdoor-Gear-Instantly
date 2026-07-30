"use client";

import { toast } from "sonner";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { deleteGear } from "../api/provider-gear.api";

export const useDeleteGear = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteGear,

    onSuccess: () => {
      toast.success(
        "Gear deleted successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-gear"],
      });
    },

    onError: () => {
      toast.error(
        "Failed to delete gear."
      );
    },
  });
};