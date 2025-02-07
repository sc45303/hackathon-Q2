"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const isloggedIn = localStorage.getItem("isLoggedIn");
    if (!isloggedIn) {
      router.push("/admin/dashboard");
    }
  }, [router]);
  return <>| {children}</>;
}
