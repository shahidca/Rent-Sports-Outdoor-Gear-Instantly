import axiosInstance from "@/lib/axios";

import { IProviderGear } from "../types/gear";

interface ProviderGearResponse {
  success: boolean;
  message: string;
  data: IProviderGear[];
}

export const getProviderGear = async () => {
  const { data } =
    await axiosInstance.get<ProviderGearResponse>(
      "/provider/gear"
    );

  return data;
};

export const createGear = async (
  payload: FormData
) => {
  const { data } =
    await axiosInstance.post(
      "/provider/gear",
      payload,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

  return data;
};

export const updateGear = async (
  id: string,
  payload: FormData
) => {
  const { data } =
    await axiosInstance.patch(
      `/provider/gear/${id}`,
      payload,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

  return data;
};

export const deleteGear = async (
  id: string
) => {
  const { data } =
    await axiosInstance.delete(
      `/provider/gear/${id}`
    );

  return data;
};

interface ProviderGearDetailsResponse {
  success: boolean;
  message: string;
  data: IProviderGear;
}

export const getProviderGearById = async (
  id: string
) => {
  const { data } =
    await axiosInstance.get<ProviderGearDetailsResponse>(
      `/provider/gear/${id}`
    );

  return data;
};