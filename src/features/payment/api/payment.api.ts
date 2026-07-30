import axiosInstance from "@/lib/axios";

import { IPayment } from "../types/payment";

interface IPaymentResponse {
  success: boolean;
  message: string;
  data: IPayment[];
}

export const getMyPayments = async () => {
  const { data } =
    await axiosInstance.get<IPaymentResponse>(
      "/customer/payments"
    );

  return data;
};