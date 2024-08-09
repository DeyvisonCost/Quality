"use client";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { removeAccessToken } from "@/commons/storage/accessToken";
import Image from "next/image";
import { Navigation } from "./Navigation";

const Header: FC = () => {
  const [hasToken, setHasToken] = useState<boolean | null>(null);
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    setHasToken(token !== null);
  }, [token]);

  const handleLogout = () => {
    removeAccessToken();
    router.push("/login");
  };

  return (
    <header className="fixed w-full h-16 flex items-center bg-white text-black/80 border-b border-gray-200 font-medium">
      <Link href="/" className="p-4">
        <Image src="/img/logo.png" alt="Logo" width={60} height={80} />
      </Link>
      <Navigation hasToken={hasToken} />
      <div className="w-20">
        {hasToken ? (
          <button className="w-full p-4" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link className="w-full p-4 block text-center" href="/login">
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
