"use client";

import { useAuth } from "@/lib/auth-context";

export default function Dashboard() {
  const { user } = useAuth();
  return (
   <p className="text-center mt-20">This page is accessible to everyone, even if you are not logged in.</p>
  );
}
