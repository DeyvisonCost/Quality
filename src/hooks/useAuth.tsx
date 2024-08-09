import { AppContext } from "@/context/auth";
import { useContext } from "react";

export function useAuth() {
  return useContext(AppContext);
}