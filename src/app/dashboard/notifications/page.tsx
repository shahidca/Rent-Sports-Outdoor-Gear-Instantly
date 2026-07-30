import NotificationList from "@/features/notification/components/NotificationList";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Notifications
      </h1>

      <NotificationList />

    </div>
  );
}