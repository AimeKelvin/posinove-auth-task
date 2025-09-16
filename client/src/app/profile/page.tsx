"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/auth/login"); // ✅ redirect if not logged in
    }
  }, [user, router]);

  if (!user) return null; // nothing while redirecting

  return (
    <div className="max-h-screen flex items-center justify-center py-20 px-4">
      <Card className="w-full max-w-md p-8 shadow-sm border border-gray-200 text-center">
        {/* Avatar */}
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-xl font-bold">
          {user.name.charAt(0).toUpperCase()}
        </div>

        {/* Info */}
        <h1 className="text-2xl font-bold text-gray-900 mt-4">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Placeholder for future profile settings */}
        <p className="text-sm text-gray-500">
          This is your profile page. Uri kubona only credentials.
        </p>
      </Card>
    </div>
  );
}
