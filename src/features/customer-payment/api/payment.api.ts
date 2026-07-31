import axiosInstance from "@/lib/axios";

export const getMyPayments =
  async () => {
    const { data } =
      await axiosInstance.get(
        "/payments"
      );

    return data;
  };

export const getPaymentById =
  async (id: string) => {
    const { data } =
      await axiosInstance.get(
        `/payments/${id}`
      );

    return data;
  };

export const createPayment =
  async (
    rentalOrderId: string
  ) => {
    const { data } =
      await axiosInstance.post(
        "/payments/create",
        {
          rentalOrderId,
        }
      );

    return data;
  };

export const confirmPayment =
  async (
    paymentIntentId: string
  ) => {
    const { data } =
      await axiosInstance.post(
        "/payments/confirm",
        {
          paymentIntentId,
        }
      );

    return data;
  };