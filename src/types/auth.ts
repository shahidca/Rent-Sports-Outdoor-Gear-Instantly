import { IUser } from "./user";


export interface ILoginPayload {
  email: string;
  password: string;
}


export interface IRegisterPayload {
  name: string;
  email: string;
  password: string;

  phone?: string;
  address?: string;
  profileImage?: string;

  role: "CUSTOMER" | "PROVIDER";
}


export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}


// Login response
export type ILoginResponse =
  IApiResponse<{
    user: IUser;
  }>;


// Register response
export type IRegisterResponse =
  IApiResponse<{
    user: IUser;
  }>;


// Current user response (/auth/me)
export type ICurrentUserResponse =
  IApiResponse<IUser>;