import { Badge } from "@/components/ui/badge";

interface Props {
  status:
    | "PLACED"
    | "CONFIRMED"
    | "PAID"
    | "PICKED_UP"
    | "RETURNED"
    | "CANCELLED";
}

export default function RentalStatusBadge({
  status,
}: Props) {
  switch (status) {
    case "PLACED":
      return (
        <Badge variant="secondary">
          Placed
        </Badge>
      );

    case "CONFIRMED":
      return (
        <Badge>
          Confirmed
        </Badge>
      );

    case "PAID":
      return (
        <Badge>
          Paid
        </Badge>
      );

    case "PICKED_UP":
      return (
        <Badge>
          Picked Up
        </Badge>
      );

    case "RETURNED":
      return (
        <Badge>
          Returned
        </Badge>
      );

    case "CANCELLED":
      return (
        <Badge variant="destructive">
          Cancelled
        </Badge>
      );

    default:
      return (
        <Badge>
          {status}
        </Badge>
      );
  }
}