import axiosInstance from "@/lib/axios";

import {
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
  ICurrentUserResponse,
} from "@/types/auth";


export const login = async (
  payload: ILoginPayload
) => {
  const response =
    await axiosInstance.post<ILoginResponse>(
      "/auth/login",
      payload
    );

  return response.data;
};



export const register = async (
  payload: IRegisterPayload
) => {
  const response =
    await axiosInstance.post<IRegisterResponse>(
      "/auth/register",
      payload
    );

  return response.data;
};



export const getMe = async () => {
  const response =
    await axiosInstance.get<ICurrentUserResponse>(
      "/auth/me"
    );

  return response.data;
};



export const logout = async () => {
  const response =
    await axiosInstance.post(
      "/auth/logout"
    );

  return response.data;
};