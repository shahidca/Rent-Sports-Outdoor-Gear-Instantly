"use client";

import { useMutation } from "@tanstack/react-query";

import { changePassword } from "../api/profile.api";

export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,
  });
};