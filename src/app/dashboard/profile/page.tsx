import ProfileCard from "@/features/profile/components/ProfileCard";
import EditProfileForm from "@/features/profile/components/EditProfileForm";
import ChangePasswordForm from "@/features/profile/components/ChangePasswordForm";

export default function ProfilePage() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        My Profile
      </h1>

      <ProfileCard />

      <EditProfileForm />

      <ChangePasswordForm />

    </div>
  );
}