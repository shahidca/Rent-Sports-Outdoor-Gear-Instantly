import { Bell } from "lucide-react";

import { INotification } from "../types/notification";

interface Props {
  notification: INotification;
}

export default function NotificationCard({
  notification,
}: Props) {
  return (
    <div
      className={`rounded-xl border p-5 transition ${
        notification.isRead
          ? "bg-background"
          : "bg-primary/5"
      }`}
    >
      <div className="mb-2 flex items-center gap-2">

        <Bell size={18} />

        <h2 className="font-semibold">
          {notification.title}
        </h2>

      </div>

      <p className="text-muted-foreground">
        {notification.message}
      </p>

      <p className="mt-3 text-sm text-muted-foreground">
        {new Date(
          notification.createdAt
        ).toLocaleString()}
      </p>
    </div>
  );
}