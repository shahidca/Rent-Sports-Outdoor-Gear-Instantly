
import RentalDetails from "@/features/rental/components/RentalDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function RentalDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <main className="space-y-6">
      <RentalDetails id={id} />
    </main>
  );
}