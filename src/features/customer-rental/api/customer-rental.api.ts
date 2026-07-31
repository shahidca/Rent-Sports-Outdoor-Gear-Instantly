import axiosInstance from "@/lib/axios";

import { ICreateRentalPayload } from "../types/rental";

export const createRental = async (
  payload: ICreateRentalPayload
) => {
  const { data } =
    await axiosInstance.post(
      "/rentals",
      payload
    );

  return data;
};