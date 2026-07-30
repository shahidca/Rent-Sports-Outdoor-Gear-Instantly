"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { useDeleteGear } from "../hooks/useDeleteGear";

interface Props {
  gearId: string;
}

export default function DeleteGearDialog({
  gearId,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const { mutate, isPending } =
    useDeleteGear();

  const handleDelete = () => {
    mutate(gearId, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  if (!open) {
    return (
      <Button
        variant="destructive"
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-4 shadow">

      <p className="mb-4 font-medium">
        Are you sure you want to delete this gear?
      </p>

      <div className="flex gap-3">

        <Button
          variant="outline"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>

        <Button
          variant="destructive"
          disabled={isPending}
          onClick={handleDelete}
        >
          {isPending
            ? "Deleting..."
            : "Delete"}
        </Button>

      </div>

    </div>
  );
}