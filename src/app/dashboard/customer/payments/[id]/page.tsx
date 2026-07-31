import PaymentDetailsPage from "@/features/customer-payment/pages/PaymentDetailsPage";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { id } = await params;

  return (
    <PaymentDetailsPage
      paymentId={id}
    />
  );
}