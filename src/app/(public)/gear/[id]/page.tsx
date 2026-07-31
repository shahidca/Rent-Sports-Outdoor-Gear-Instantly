import GearDetails from "@/features/customer-gear/components/GearDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function GearDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <GearDetails
      id={id}
    />
  );
}