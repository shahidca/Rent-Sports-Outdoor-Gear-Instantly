"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { login, getMe } from "@/services/auth.service";
import { getDashboardRoute } from "@/utils/getDashboardRoute";
import { ILoginPayload } from "@/types/auth";

interface ApiError {
  success: boolean;
  statusCode: number;
  message: string;
}

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ILoginPayload) => login(payload),

    onSuccess: async () => {
      try {
        // Clear previous user cache
        await queryClient.invalidateQueries({
          queryKey: ["me"],
        });

        // Get current logged in user
        const response = await getMe();

        // Save user in React Query cache
        queryClient.setQueryData(["me"], response);

        toast.success("Login successful");

        router.push(
          getDashboardRoute(response.data.role)
        );
      } catch {
        toast.error("Failed to load user information.");
      }
    },

    onError: (error: AxiosError<ApiError>) => {
      toast.error(
        error.response?.data?.message ?? "Login failed"
      );
    },
  });
};