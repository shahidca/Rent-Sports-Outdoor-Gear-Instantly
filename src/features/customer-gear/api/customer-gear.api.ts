import axiosInstance from "@/lib/axios";

import { ICustomerGear } from "../types/gear";

interface GearResponse {
  success: boolean;
  message: string;
  data: ICustomerGear[];
}

interface GearQuery {
  search?: string;
  category?: string;
  page?: number;
}

export const getCustomerGear = async ({
  search = "",
  category = "",
  page = 1,
}: GearQuery) => {
  const { data } =
    await axiosInstance.get<GearResponse>(
      "/gear",
      {
        params: {
          search,
          category,
          page,
        },
      }
    );

  return data;
};