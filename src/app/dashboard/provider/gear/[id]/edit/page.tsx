
import GearEditForm from "@/features/provider-gear/components/GearEditForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditGearPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Edit Gear
      </h1>

      <GearEditForm id={id} />

    </div>
  );
}