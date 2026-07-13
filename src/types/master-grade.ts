import { Pagination } from "./pagination";

export interface Grade {
  id: number;
  name: string;
  code: string;
  type: string;
}

export interface GradeResponse {
  code: number;
  message: string;
  data: Grade[];
  pagination: Pagination;
}
