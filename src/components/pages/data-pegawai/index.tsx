"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { EMPLOYEE_MODULES, type EmployeeModule } from "@/constants/employee";
import { getEmployees } from "@/services/employee.service";

import { PageHeader } from "@/components/page-header";
import { EmployeeTable } from "@/components/pages/data-pegawai/employee-table";

interface Props {
  type: EmployeeModule;
}

export function DataPegawai({ type }: Props) {
  const config = EMPLOYEE_MODULES[type];

  console.log(type);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const limit = 10;

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["employees", type, page, search],

    queryFn: () =>
      getEmployees({
        type: config.type,
        page,
        limit,
        search,
      }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Terjadi kesalahan.</div>;
  }

  return (
    <div className="space-y-6">
      <PageHeader
        type={type}
        title={config.title}
        total={data?.pagination.total}
        search={search}
        searchPlaceholder={`Cari ${config.title.toLowerCase()}...`}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />

      {isFetching && (
        <p className="text-sm text-muted-foreground">Memuat data...</p>
      )}

      <EmployeeTable module={type} employees={data?.data ?? []} />

      {/* pagination nanti kita pindahkan seperti DataRiwayat */}
    </div>
  );
}
