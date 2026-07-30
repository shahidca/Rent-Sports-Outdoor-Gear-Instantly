"use client";

import { Input } from "@/components/ui/input";

interface Props {
  search: string;
  setSearch: (
    value: string
  ) => void;

  status: string;
  setStatus: (
    value: string
  ) => void;
}

export default function RentalFilters({
  search,
  setSearch,
  status,
  setStatus,
}: Props) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row">

      <Input
        value={search}
        placeholder="Search customer or gear..."
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="h-10 rounded-md border bg-background px-3"
      >
        <option value="">
          All Status
        </option>

        <option value="PENDING">
          Pending
        </option>

        <option value="APPROVED">
          Approved
        </option>

        <option value="REJECTED">
          Rejected
        </option>

        <option value="PICKED_UP">
          Picked Up
        </option>

        <option value="RETURNED">
          Returned
        </option>

      </select>

    </div>
  );
}