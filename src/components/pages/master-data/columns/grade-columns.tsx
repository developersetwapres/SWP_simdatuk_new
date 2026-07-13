"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Grade } from "@/types/master-grade";

export const gradeColumns: ColumnDef<Grade>[] = [
  {
    accessorKey: "type",
    header: "Jenis Pegawai",
  },
  {
    accessorKey: "name",
    header: "Pangkat",
  },
  {
    accessorKey: "code",
    header: "Golongan / Ruang",
  },
  {
    id: "actions",
    header: "Aksi",
    cell: () => <>-</>,
  },
];
