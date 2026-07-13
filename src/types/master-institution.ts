import { Pagination } from "./pagination";

export interface Institution {
  id: number;
  name: string;
}

export interface InstitutionResponse {
  code: number;
  message: string;
  data: Institution[];
  pagination: Pagination;
}
