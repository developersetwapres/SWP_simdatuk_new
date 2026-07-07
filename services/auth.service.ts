import api from "@/lib/axios";
import type { LoginRequest, LoginResponse } from "@/types/auth";

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>("/login", payload);

  return data;
};
