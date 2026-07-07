export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
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
  user: User;
}
