"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/auth/login"); // ✅ redirect if not logged in
    }
  }, [user, router]);

  if (!user) {
    return null; // while redirecting, render nothing
  }

  return (
    <div className="max-h-screen flex items-center justify-center px-10 py-10">
      <Card className="w-full max-w-lg p-8 shadow-sm border border-gray-200 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome, {user.name} 👋
        </h1>
        <p className="text-gray-600">
          This is your dashboard. Its a protected page.
        </p>
      </Card>
    </div>
  );
}
