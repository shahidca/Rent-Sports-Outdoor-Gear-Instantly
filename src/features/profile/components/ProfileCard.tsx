"use client";

import Image from "next/image";

import { useProfile } from "../hooks/useProfile";

export default function ProfileCard() {
  const {
    data,
    isPending,
  } = useProfile();

  if (isPending) {
    return <p>Loading...</p>;
  }

  const user = data?.data;

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="rounded-xl border bg-card p-6">

      <div className="flex items-center gap-6">

        <Image
          src={
            user.profileImage ||
            "/images/avatar.png"
          }
          alt={user.name}
          width={120}
          height={120}
          className="rounded-full object-cover"
        />

        <div>

          <h2 className="text-2xl font-bold">
            {user.name}
          </h2>

          <p>{user.email}</p>

          <p>{user.phone}</p>

          <p>{user.address}</p>

          <p>{user.role}</p>

        </div>

      </div>

    </div>
  );
}