import api from "@/lib/axios";
import { UserResponse } from "@/types/master-user";
import { RoleResponse } from "@/types/master-role";
import { GradeResponse } from "@/types/master-grade";
import { InstitutionResponse } from "@/types/master-institution";
import { EmploymentTypeResponse } from "@/types/master-employment-type";

type PaginationParams = {
  page?: number;
  limit?: number;
  search?: string;
};

type EmploymentTypeParams = PaginationParams & {
  type?: number;
};

/* -------------------------------------------------------------------------- */
/*                                Data Pengguna                               */
/* -------------------------------------------------------------------------- */

export async function getUsers(params: PaginationParams) {
  const { data } = await api.get<UserResponse>("/users", {
    params,
  });

  return data;
}

/* -------------------------------------------------------------------------- */
/*                             Data Role Pengguna                             */
/* -------------------------------------------------------------------------- */

export async function getRoles(params?: PaginationParams) {
  const { data } = await api.get<RoleResponse>("/roles", {
    params,
  });

  return data;
}

/* -------------------------------------------------------------------------- */
/*                               Data Golongan                                */
/* -------------------------------------------------------------------------- */

export async function getGrades(params: PaginationParams) {
  const { data } = await api.get<GradeResponse>("/grades", {
    params,
  });

  return data;
}

/* -------------------------------------------------------------------------- */
/*                               Data Instansi                                */
/* -------------------------------------------------------------------------- */

export async function getInstitutions(params: PaginationParams) {
  const { data } = await api.get<InstitutionResponse>("/institutions", {
    params,
  });

  return data;
}

/* -------------------------------------------------------------------------- */
/*                           Data Jenis Pegawai                               */
/* -------------------------------------------------------------------------- */

export async function getEmploymentTypes(params: EmploymentTypeParams) {
  const { data } = await api.get<EmploymentTypeResponse>("/employment-types", {
    params,
  });

  return data;
}
