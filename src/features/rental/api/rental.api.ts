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