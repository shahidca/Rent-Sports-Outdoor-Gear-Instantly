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

export interface IUpdateProfile {
  name: string;
  phone?: string;
  address?: string;
}

export const updateProfile = async (
  payload: IUpdateProfile
) => {
  const { data } = await axiosInstance.patch(
    "/customer/profile",
    payload
  );

  return data;
};

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
}

export const changePassword = async (
  payload: IChangePassword
) => {
  const { data } = await axiosInstance.patch(
    "/auth/change-password",
    payload
  );

  return data;
};