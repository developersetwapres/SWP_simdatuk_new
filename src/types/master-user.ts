import { Pagination } from "./pagination";

export interface User {
  id: number;
  username: string;
  employee_id_number: string | null;
  employee_registration_number: string | null;
  role_name: string;
  status: number;
}

export interface UserResponse {
  code: number;
  message: string;
  data: User[];
  pagination: Pagination;
}
