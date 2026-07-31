import PaymentPage from "@/features/customer-payment/pages/PaymentPage";

interface Props {
  params: Promise<{
    rentalOrderId: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { rentalOrderId } =
    await params;

  return (
    <PaymentPage
      rentalOrderId={
        rentalOrderId
      }
    />
  );
}