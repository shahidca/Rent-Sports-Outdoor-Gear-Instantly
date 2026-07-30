"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { login, getMe } from "@/services/auth.service";
import { ILoginPayload } from "@/types/auth";
import { getDashboardRoute } from "@/utils/getDashboardRoute";


interface ApiError {
  success: boolean;
  message: string;
}


export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();


  return useMutation({
    mutationFn: (payload: ILoginPayload) =>
      login(payload),


    onSuccess: async () => {
      try {

        const currentUser = await getMe();


        queryClient.setQueryData(
          ["me"],
          currentUser
        );


        toast.success(
          "Login successful"
        );


        router.push(
          getDashboardRoute(
            currentUser.data.role
          )
        );


      } catch {

        toast.error(
          "Unable to load user information"
        );

      }
    },


    onError: (
      error: AxiosError<ApiError>
    ) => {

      toast.error(
        error.response?.data?.message ??
        "Login failed"
      );

    },
  });
};