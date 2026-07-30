"use client";

import {
  createContext,
  useContext,
  ReactNode,
} from "react";

import { useAuth } from "@/hooks/useAuth";

import { IUser } from "@/types/user";


interface AuthContextType {

  user: IUser | null;

  isLoading: boolean;

  isAuthenticated: boolean;

}



const AuthContext =
  createContext<AuthContextType | undefined>(
    undefined
  );



export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {


  const {
    data,
    isLoading,
  } = useAuth();



  const user =
    data?.data ?? null;



  return (

    <AuthContext.Provider
      value={{
        user,

        isLoading,

        isAuthenticated:
          !!user,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}



export const useAuthContext = () => {

  const context =
    useContext(AuthContext);


  if (!context) {

    throw new Error(
      "useAuthContext must be used inside AuthProvider"
    );

  }


  return context;

};