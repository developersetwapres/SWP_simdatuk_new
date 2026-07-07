import api from "@/src/lib/axios";
import type { LoginRequest, LoginResponse } from "@/src/types/auth";

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>("/login", payload);

  return data;
};

export interface ProfileResponse {
  code: number;
  message: string;
  data: {
    id: number;
    name: string;
    employee_id: string | null;
    registration_number: string | null;
    photo_profile: string | null;
    username: string;
    email: string;
    role_name: string;
  };
}

export const profile = async (): Promise<ProfileResponse> => {
  const { data } = await api.get<ProfileResponse>("/profile");

  return data;
};
