

import GearDetails from "@/features/gear/components/GearDetails";

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
    <main className="mx-auto max-w-7xl px-4 py-10">
      <GearDetails id={id} />
    </main>
  );
}