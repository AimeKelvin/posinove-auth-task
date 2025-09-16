"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      setError(null);
      await register(name, email, password);
      router.push("/auth/login"); // ✅ redirect to login page
    } catch (err: unknown) {
      console.error("❌ Registration error:", err);

      if (err instanceof Error) {
        const axiosErr = err as { response?: { data?: { message?: string } } };
        if (axiosErr.response?.data?.message) {
          setError(axiosErr.response.data.message);
        } else {
          setError(err.message);
        }
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-sm p-8 shadow-sm border border-gray-200">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          <p className="text-sm text-gray-600 mt-1">
            Join us and get started today
          </p>
        </div>

        {error && (
          <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 p-2 rounded-md text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 rounded-md py-2"
          >
            Sign Up
          </Button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-black font-medium hover:underline"
          >
            Log in
          </a>
        </p>
      </Card>
    </div>
  );
}
