import api from "@/lib/axios";
import type {
  LoginRequest,
  LoginResponse,
  ProfileResponse,
} from "@/types/auth";

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>("/login", payload);

  return data;
};

export const profile = async (): Promise<ProfileResponse> => {
  const { data } = await api.get<ProfileResponse>("/profile");

  return data;
};
