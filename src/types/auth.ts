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

export interface ILoginResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    user: IUser;
  };
}

export interface ICurrentUserResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUser;
}