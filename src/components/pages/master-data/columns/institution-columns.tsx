"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Institution } from "@/types/master-institution";

export const institutionColumns: ColumnDef<Institution>[] = [
  {
    accessorKey: "name",
    header: "Nama Instansi",
  },
  {
    id: "actions",
    header: "Aksi",
    cell: () => <>-</>,
  },
];
