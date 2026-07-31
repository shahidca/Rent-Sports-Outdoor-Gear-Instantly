"use client";

import { Input } from "@/components/ui/input";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;
}

export default function GearFilters({
  search,
  setSearch,
  category,
  setCategory,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row">

      <Input
        placeholder="Search gear..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="h-10 rounded-md border bg-background px-3"
      >
        <option value="">
          All Categories
        </option>

        <option value="Camping">
          Camping
        </option>

        <option value="Cycling">
          Cycling
        </option>

        <option value="Hiking">
          Hiking
        </option>

        <option value="Water Sports">
          Water Sports
        </option>

      </select>

    </div>
  );
}