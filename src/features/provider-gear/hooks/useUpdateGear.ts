"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { updateGear } from "../api/provider-gear.api";

export const useUpdateGear = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      formData,
    }: {
      id: string;
      formData: FormData;
    }) =>
      updateGear(id, formData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["provider-gear"],
      });
    },
  });
};