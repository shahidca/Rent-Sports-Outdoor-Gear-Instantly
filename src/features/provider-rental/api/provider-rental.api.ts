import axiosInstance from "@/lib/axios";

import { IProviderRental } from "../types/rental";

interface ProviderRentalResponse {
  success: boolean;
  message: string;
  data: IProviderRental[];
}

export const getProviderRentals = async () => {
  const { data } =
    await axiosInstance.get<ProviderRentalResponse>(
      "/provider/rentals"
    );

  return data;
};

export const approveRental = async (
  id: string
) => {
  const { data } =
    await axiosInstance.patch(
      `/provider/rentals/${id}/approve`
    );

  return data;
};

export const rejectRental = async (
  id: string
) => {
  const { data } =
    await axiosInstance.patch(
      `/provider/rentals/${id}/reject`
    );

  return data;
};

export const pickupRental = async (
  id: string
) => {
  const { data } =
    await axiosInstance.patch(
      `/provider/rentals/${id}/pickup`
    );

  return data;
};

export const returnRental = async (
  id: string
) => {
  const { data } =
    await axiosInstance.patch(
      `/provider/rentals/${id}/return`
    );

  return data;
};