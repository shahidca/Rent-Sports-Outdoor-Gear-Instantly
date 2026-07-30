import axiosInstance from "@/lib/axios";

import { IGear } from "../types/gear";

export interface IGetGearResponse {
  success: boolean;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: IGear[];
}

export const getAllGear = async () => {
  const { data } =
    await axiosInstance.get<IGetGearResponse>(
      "/gear"
    );

  return data;
};

export const getGearById = async (
  id: string
) => {
  const { data } =
    await axiosInstance.get(
      `/gear/${id}`
    );

  return data;
};