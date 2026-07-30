import axiosInstance from "@/lib/axios";

import {
  ICreateRental,
  IRentalResponse,
} from "../types/rental";

export const createRental = async (
  payload: ICreateRental
) => {
  const { data } =
    await axiosInstance.post<IRentalResponse>(
      "/rentals",
      payload
    );

  return data;
};

import { IRental } from "../types/rental";

interface IRentalListResponse {
  success: boolean;
  message: string;
  data: IRental[];
}

export const getMyRentals = async () => {
  const { data } =
    await axiosInstance.get<IRentalListResponse>(
      "/customer/rentals"
    );

  return data;
};