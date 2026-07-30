"use client";

import { useMutation } from "@tanstack/react-query";

import { createRental } from "../api/rental.api";

export const useCreateRental = () => {
  return useMutation({
    mutationFn: createRental,
  });
};