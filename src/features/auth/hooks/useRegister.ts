"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { register } from "@/services/auth.service";

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      toast.success(
        "Registration successful. Please login."
      );

      router.push("/auth/login");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Registration failed"
      );
    },
  });
};