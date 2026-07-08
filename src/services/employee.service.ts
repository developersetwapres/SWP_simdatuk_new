import api from "@/lib/axios";
import { EmployeeFilter, EmployeeResponse } from "@/types/employee";

export const getEmployees = async (
  params?: EmployeeFilter,
): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>("/employees", {
    params,
  });

  return data;
};
