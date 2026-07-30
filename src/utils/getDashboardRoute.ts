import { TUserRole } from "@/types/user";

export const getDashboardRoute = (
  role: TUserRole
) => {
  switch (role) {
    case "ADMIN":
      return "/dashboard/admin";

    case "PROVIDER":
      return "/dashboard/provider";

    default:
      return "/dashboard/customer";
  }
};