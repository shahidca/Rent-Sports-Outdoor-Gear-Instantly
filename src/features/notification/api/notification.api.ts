import axiosInstance from "@/lib/axios";

import { INotification } from "../types/notification";

interface NotificationResponse {
  success: boolean;
  message: string;
  data: INotification[];
}

export const getNotifications = async () => {
  const { data } =
    await axiosInstance.get<NotificationResponse>(
      "/customer/notifications"
    );

  return data;
};

export const markNotificationAsRead = async (
  id: string
) => {
  const { data } =
    await axiosInstance.patch(
      `/customer/notifications/${id}/read`
    );

  return data;
};

export const deleteNotification = async (
  id: string
) => {
  const { data } =
    await axiosInstance.delete(
      `/customer/notifications/${id}`
    );

  return data;
};