export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginUser {
  id: number;
  username: string;
  email: string;
  photo_profile: string | null;
  employee_id_number: string;
  employee_registration_number: string;
  role: {
    id: number;
    name: string;
  };
  permissions: unknown[];
}

export interface LoginResponse {
  code: number;
  message: string;
  token: string;
  user: LoginUser;
}

export interface Profile {
  id: number;
  name: string;
  employee_id: string | null;
  registration_number: string | null;
  photo_profile: string | null;
  username: string;
  email: string;
  role_name: string;
}

export interface ProfileResponse {
  code: number;
  message: string;
  data: Profile;
}
