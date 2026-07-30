import { TUserRole } from "@/types/user";


export const getDashboardRoute = (
  role: TUserRole
) => {

  switch(role) {

    case "CUSTOMER":
      return "/dashboard/customer";


    case "PROVIDER":
      return "/dashboard/provider";


    case "ADMIN":
      return "/dashboard/admin";


    default:
      return "/auth/login";

  }

};