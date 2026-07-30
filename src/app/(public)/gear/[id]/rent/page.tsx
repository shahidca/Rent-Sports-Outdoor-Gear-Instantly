
import RentalForm from "@/features/rental/components/RentalForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function RentPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <RentalForm gearId={id} />
    </main>
  );
}