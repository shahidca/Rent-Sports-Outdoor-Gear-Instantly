import axiosInstance from "@/lib/axios";

import { IProviderDashboard } from "../types/provider";

interface ProviderDashboardResponse {
  success: boolean;
  message: string;
  data: IProviderDashboard;
}

export const getProviderDashboard =
  async () => {
    const { data } =
      await axiosInstance.get<ProviderDashboardResponse>(
        "/provider/dashboard"
      );

    return data;
  };