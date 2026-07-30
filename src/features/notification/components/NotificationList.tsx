"use client";

import NotificationCard from "./NotificationCard";
import { useNotifications } from "../hooks/useNotifications";

export default function NotificationList() {
  const {
    data,
    isPending,
  } = useNotifications();

  if (isPending) {
    return <p>Loading notifications...</p>;
  }

  const notifications = data?.data ?? [];

  if (!notifications.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        No notifications found.
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {notifications.map((notification) => (

        <NotificationCard
          key={notification.id}
          notification={notification}
        />

      ))}

    </div>
  );
}