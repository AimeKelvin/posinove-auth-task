"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, logoutUser, registerUser } from "./client";
import { useRouter } from "next/navigation";

type User = { id?: string; name: string; email: string } | null;

interface AuthContextType {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);

    if (data?.user) {
      setUser({ id: data.user.id, name: data.user.name, email: data.user.email });
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.accessToken);
    } else {
      throw new Error("Login failed: no user returned");
    }
  };

  const register = async (name: string, email: string, password: string) => {
    const data = await registerUser(name, email, password);

    if (data?.user) {
      setUser({ id: data.user.id, name: data.user.name, email: data.user.email });
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      throw new Error("Registration failed");
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    router.push("/"); // ✅ redirect to homepage
  };

  useEffect(() => {
    // Restore user from localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
