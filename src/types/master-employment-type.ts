import { Pagination } from "./pagination";

export interface EmploymentType {
  id: number;
  name: string;
  status: number;
  type: number;
}

export interface EmploymentTypeResponse {
  code: number;
  message: string;
  data: EmploymentType[];
  pagination: Pagination;
}
