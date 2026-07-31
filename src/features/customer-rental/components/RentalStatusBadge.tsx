import { Badge } from "@/components/ui/badge";

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
  switch (status) {
    case "PENDING":
      return (
        <Badge variant="secondary">
          Pending
        </Badge>
      );

    case "APPROVED":
      return (
        <Badge>
          Approved
        </Badge>
      );

    case "REJECTED":
      return (
        <Badge variant="destructive">
          Rejected
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

    default:
      return (
        <Badge>
          {status}
        </Badge>
      );
  }
}