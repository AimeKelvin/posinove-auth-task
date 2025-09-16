"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-gray-900 hover:text-gray-700 transition"
        >
          Kelvin auth app
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {user ? (
            <>
              <Link
                href="/profile"
                className="text-gray-800 hover:text-gray-600 font-medium transition"
              >
                Profile
              </Link>
              <Button
                onClick={logout}
                variant="outline"
                className="rounded-md px-4 py-1 hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-gray-800 hover:text-gray-600 font-medium transition"
              >
                Login
              </Link>
              <Button
                asChild
                className="bg-black text-white rounded-md px-5 py-2 hover:bg-gray-800 transition"
              >
                <Link href="/auth/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
