import { Badge } from "@/components/ui/badge";

interface Props {
  status:
    | "PENDING"
    | "PAID";
}

export default function PaymentStatusBadge({
  status,
}: Props) {
  return status === "PAID" ? (
    <Badge>
      Paid
    </Badge>
  ) : (
    <Badge variant="secondary">
      Pending
    </Badge>
  );
}