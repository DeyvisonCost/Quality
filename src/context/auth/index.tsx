"use client";
import { useEffect, useState } from "react";
import { getAccessToken } from "@/commons/storage/accessToken";
import { createContext, ReactNode } from "react";
import { AuthProps } from "./types";

export const AppContext = createContext<AuthProps>('' as AuthProps);

export function AppWrapper({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const fetchedToken = getAccessToken();

  useEffect(() => {
    setToken(fetchedToken);
  }, [fetchedToken]);

  return (
    <AppContext.Provider value={{ token }}>
      {children}
    </AppContext.Provider>
  );
}
