export interface Employee {
  id: number;
  photo_profile: string | null;
  name: string;
  employee_id_number: string;
  employee_registration_number: string;
  position_name: string;
  echelon_name: string;
  echelon_effective_date: string;
  grade_name: string;
  grade_effective_date: string;
  employment_type: string;
  description: string | null;
}

export interface EmployeeResponse {
  code: number;
  message: string;
  data: Employee[];
}

export interface EmployeeFilter {
  page?: number;
  type?: number;
  limit?: number;
  search?: string;
  position_id?: number;
  grade_id?: number;
  echelon_id?: number;
  employment_type_id?: number;
}
