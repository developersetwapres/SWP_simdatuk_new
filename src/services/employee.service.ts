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

/* -------------------------------------------------------------------------- */
/*                               Master / Lookup                              */
/* -------------------------------------------------------------------------- */

export async function getPositions(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/positions", {
    params,
  });

  return data;
}

export async function getWorkUnits(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/groups", {
    params,
  });

  return data;
}

export async function getInstitutions(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/institutions", {
    params,
  });

  return data;
}

export async function getGrades(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/grades", {
    params,
  });

  return data;
}

export async function getEmploymentTypes(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/employment-types", {
    params,
  });

  return data;
}

export async function getReligions(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/religions", {
    params,
  });

  return data;
}

export async function getEducationLevels(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/education-levels", {
    params,
  });

  return data;
}

export async function getMaritalStatuses(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/marital-statuses", {
    params,
  });

  return data;
}

export async function getProvinces(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/provinces", {
    params,
  });

  return data;
}

export async function getCities(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/cities", {
    params,
  });

  return data;
}

export async function getDistricts(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/districts", {
    params,
  });

  return data;
}

export async function getVillages(params?: Record<string, unknown>) {
  const { data } = await api.get<LookupResponse>("/villages", {
    params,
  });

  return data;
}
