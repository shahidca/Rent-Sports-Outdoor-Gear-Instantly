import axiosInstance from "@/lib/axios";
import {
  ICurrentUserResponse,
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
} from "@/types/auth";

export const login = async (
  payload: ILoginPayload
) => {
  const { data } =
    await axiosInstance.post<ILoginResponse>(
      "/auth/login",
      payload
    );

  return data;
};

export const register = async (
  payload: IRegisterPayload
) => {
  const { data } =
    await axiosInstance.post(
      "/auth/register",
      payload
    );

  return data;
};

export const getMe = async () => {
  const { data } =
    await axiosInstance.get<ICurrentUserResponse>(
      "/auth/me"
    );

  return data;
};

export const logout = async () => {
  const { data } =
    await axiosInstance.post(
      "/auth/logout"
    );

  return data;
};