"use client";


import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { toast } from "sonner";


import {
  register,
} from "@/services/auth.service";


import {
  IRegisterPayload,
} from "@/types/auth";



interface ApiError {
  success: boolean;
  message: string;
}



export const useRegister = () => {

  const router = useRouter();


  return useMutation({

    mutationFn: (
      payload: IRegisterPayload
    ) =>
      register(payload),



    onSuccess: () => {

      toast.success(
        "Registration successful"
      );


      router.push(
        "/auth/login"
      );

    },



    onError: (
      error: AxiosError<ApiError>
    ) => {

      toast.error(
        error.response?.data?.message ??
        "Registration failed"
      );

    },

  });

};