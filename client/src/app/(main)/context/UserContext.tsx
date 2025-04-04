"use client";

import { User } from "@/constants/auth";
import { handleSignIn } from "@/lib";
import { getCurrentUser } from "@/lib/services/user";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

type UserContextType = {
  user?: User;
  login: (_email: string, _password: string) => Promise<void>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = async (email: string, password: string) => {
    const data = await handleSignIn({ email, password });
    if (data?.token) {
      localStorage.setItem("token", data.token);
      setUser(data.user);
      push("/");
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      const data = await getCurrentUser(token);
      setUser(data?.user);
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
