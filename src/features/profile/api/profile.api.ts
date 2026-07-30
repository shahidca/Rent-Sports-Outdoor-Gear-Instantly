import axiosInstance from "@/lib/axios";

import { IUserProfile } from "../types/profile";

interface IProfileResponse {
  success: boolean;
  message: string;
  data: IUserProfile;
}

export const getProfile = async () => {
  const { data } =
    await axiosInstance.get<IProfileResponse>(
      "/auth/me"
    );

  return data;
};