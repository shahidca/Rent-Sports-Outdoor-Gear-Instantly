import axiosInstance from "@/lib/axios";

import { ICustomerGear } from "../types/gear";

interface GearResponse {
  success: boolean;
  message: string;
  data: ICustomerGear;
}

export const getGearDetails = async (
  id: string
) => {
  const { data } =
    await axiosInstance.get<GearResponse>(
      `/gear/${id}`
    );

  return data;
};