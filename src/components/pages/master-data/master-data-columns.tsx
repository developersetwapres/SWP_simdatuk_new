"use client";

import { ColumnDef } from "@tanstack/react-table";

import { userColumns } from "./columns/user-columns";
import { roleColumns } from "./columns/role-columns";
import { gradeColumns } from "./columns/grade-columns";
import { institutionColumns } from "./columns/institution-columns";
import { employmentTypeColumns } from "./columns/employment-type-columns";

export function getMasterDataColumns(type: string): ColumnDef<any>[] {
  switch (type) {
    case "pengguna":
      return userColumns;

    case "role-pengguna":
      return roleColumns;

    case "golongan":
      return gradeColumns;

    case "instansi":
      return institutionColumns;

    case "jenis-pegawai":
      return employmentTypeColumns;

    default:
      return [];
  }
}
