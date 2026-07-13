"use client";

import { useMemo } from "react";

import { DataTable } from "@/components/data-table";

import { getMasterDataColumns } from "./master-data-columns";

type Props = {
  type: string;
  data: any[];
  loading: boolean;

  page: number;
  onPageChange: (page: number) => void;

  search: string;
  onSearchChange: (value: string) => void;

  pagination?: {
    total: number;
    current_page: number;
    total_pages: number;
    per_page: number;
  };
};

export function MasterDataTable({
  type,
  data,
  loading,
  page,
  onPageChange,
  search,
  onSearchChange,
  pagination,
}: Props) {
  const columns = useMemo(() => getMasterDataColumns(type), [type]);

  return (
    <DataTable
      columns={columns}
      data={data}
      loading={loading}
      search={search}
      onSearchChange={onSearchChange}
      pagination={pagination}
      page={page}
      onPageChange={onPageChange}
    />
  );
}
