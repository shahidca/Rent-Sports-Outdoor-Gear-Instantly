import axiosInstance from "@/lib/axios";

export const createPayment = async (
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

export const confirmPayment = async (
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

export const getMyPayments =
  async () => {
    const { data } =
      await axiosInstance.get(
        "/payments"
      );

    return data;
  };