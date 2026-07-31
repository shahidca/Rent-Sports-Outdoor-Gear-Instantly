import { Badge } from "@/components/ui/badge";

interface Props {
  status:
    | "PENDING"
    | "COMPLETED"
    | "FAILED";
}

export default function PaymentStatusBadge({
  status,
}: Props) {
  switch (status) {
    case "PENDING":
      return (
        <Badge variant="secondary">
          Pending
        </Badge>
      );

    case "COMPLETED":
      return (
        <Badge>
          Completed
        </Badge>
      );

    case "FAILED":
      return (
        <Badge variant="destructive">
          Failed
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