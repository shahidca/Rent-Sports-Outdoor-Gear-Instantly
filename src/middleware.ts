import { NextRequest, NextResponse } from "next/server";

import {
  getDashboardRoute,
} from "@/utils/getDashboardRoute";


export function middleware(
  request: NextRequest
) {

  const token =
    request.cookies.get(
      "accessToken"
    )?.value;


  const pathname =
    request.nextUrl.pathname;



  // Protected dashboard routes

  const isDashboardRoute =
    pathname.startsWith("/dashboard");



  if (isDashboardRoute && !token) {

    return NextResponse.redirect(
      new URL(
        "/auth/login",
        request.url
      )
    );

  }



  return NextResponse.next();

}



export const config = {

  matcher: [

    "/dashboard/:path*",

  ],

};