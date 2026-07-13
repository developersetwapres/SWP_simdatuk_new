"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  getEmploymentTypes,
  getGrades,
  getInstitutions,
  getRoles,
  getUsers,
} from "@/services/master-data.service";

import { MasterDataTable } from "./master-data-table";

type Props = {
  type: string;
};

export function MasterData({ type }: Props) {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");

  const query = useQuery({
    queryKey: ["master-data", type, page, limit, search],
    queryFn: async () => {
      switch (type) {
        case "pengguna":
          return getUsers({
            page,
            limit,
            search,
          });

        case "role-pengguna":
          return getRoles({
            page,
            limit,
            search,
          });

        case "golongan":
          return getGrades({
            page,
            limit,
            search,
          });

        case "instansi":
          return getInstitutions({
            page,
            limit,
            search,
          });

        case "jenis-pegawai":
          return getEmploymentTypes({
            page,
            limit,
            search,
          });

        default:
          throw new Error("Tipe master data tidak ditemukan");
      }
    },
  });

  const pagination = useMemo(() => query.data?.pagination, [query.data]);

  return (
    <MasterDataTable
      type={type}
      data={query.data?.data ?? []}
      pagination={pagination}
      loading={query.isLoading}
      page={page}
      onPageChange={setPage}
      search={search}
      onSearchChange={setSearch}
    />
  );
}
