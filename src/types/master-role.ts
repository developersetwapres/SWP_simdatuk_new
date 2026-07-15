import { Pagination } from "./pagination";

export interface Role {
  id: number;
  name: string;
}

export interface RoleResponse {
  code: number;
  message: string;
  data: Role[];
  pagination: Pagination;
}
