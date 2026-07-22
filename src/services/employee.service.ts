import { EMPLOYEE_MODULES } from "@/constants/employee";
import api from "@/lib/axios";
import {
  EmployeeFilter,
  EmployeeResponse,
  LookupResponse,
} from "@/types/employee";

/* -------------------------------------------------------------------------- */
/*                               Data Pegawai                                 */
/* -------------------------------------------------------------------------- */

export const getEmployees = async (
  params?: EmployeeFilter,
): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>("/employees", {
    params,
  });

  return data;
};

export const createEmployee = async (payload: FormData) => {
  const { data } = await api.post("/employees", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const detailEmployee = async (id: string | number) => {
  const { data } = await api.get("/employees/" + id);

  return data;
};

export const updateEmployee = async (
  id: string | number,
  payload: FormData,
) => {
  const { data } = await api.post(`/employees/${id}`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

/* -------------------------------------------------------------------------- */
/*                               Master / Lookup                              */
/* -------------------------------------------------------------------------- */

export const getPositions = async (
  params?: EmployeeFilter,
): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>("/positions", {
    params,
  });

  return data;
};

export const getEchelons = async (
  params?: EmployeeFilter,
): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>("/echelons", {
    params,
  });

  return data;
};
export const getGrades = async (
  params?: EmployeeFilter,
): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>("/grades", {
    params,
  });

  return data;
};

export const getInstitutions = async (
  params?: EmployeeFilter,
): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>("/institutions", {
    params,
  });

  return data;
};

export const getResidences = async (
  params?: EmployeeFilter,
): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>("/residences", {
    params,
  });

  return data;
};

export const getEmploymentTypes = async (
  params?: EmployeeFilter,
): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>("/employment-types", {
    params,
  });

  return data;
};

export const getWorkUnits = async (
  params?: EmployeeFilter,
): Promise<EmployeeResponse> => {
  const { data } = await api.get<EmployeeResponse>("/groups", {
    params,
  });

  return data;
};
