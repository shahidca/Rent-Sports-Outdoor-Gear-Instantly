"use client";

import { Button } from "@/components/ui/button";

interface Props {
  page: number;
  setPage: React.Dispatch<
    React.SetStateAction<number>
  >;
}

export default function GearPagination({
  page,
  setPage,
}: Props) {
  return (
    <div className="flex items-center justify-between">

      <Button
        variant="outline"
        disabled={page === 1}
        onClick={() =>
          setPage((prev) => prev - 1)
        }
      >
        Previous
      </Button>

      <span className="text-sm font-medium">
        Page {page}
      </span>

      <Button
        variant="outline"
        onClick={() =>
          setPage((prev) => prev + 1)
        }
      >
        Next
      </Button>

    </div>
  );
}