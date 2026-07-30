interface Props {
  status:
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "PICKED_UP"
    | "RETURNED";
}

export default function RentalStatusBadge({
  status,
}: Props) {
  const styles = {
    PENDING: "bg-yellow-100 text-yellow-700",
    APPROVED: "bg-blue-100 text-blue-700",
    REJECTED: "bg-red-100 text-red-700",
    PICKED_UP: "bg-purple-100 text-purple-700",
    RETURNED: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}