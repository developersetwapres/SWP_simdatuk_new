import axios from "axios";
import { auth } from "@/src/lib/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = auth.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(process.env.NEXT_PUBLIC_API_URL);

  return config;
});

export default api;
