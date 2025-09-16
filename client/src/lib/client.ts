import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------- Auth Functions ----------

export const registerUser = async (name: string, email: string, password: string) => {
  const res = await apiClient.post("/auth/register", { name, email, password });
  return res.data;
};

export const loginUser = async (email: string, password: string) => {
  const res = await apiClient.post("/auth/login", { email, password });
  // Store accessToken in localStorage
  if (res.data?.accessToken) {
    localStorage.setItem("token", res.data.accessToken);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");
  const res = await apiClient.get("/users/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getDashboard = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");
  const res = await apiClient.get("/users/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
