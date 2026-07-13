"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Role } from "@/types/master-role";

export const roleColumns: ColumnDef<Role>[] = [
  {
    accessorKey: "name",
    header: "Role Pengguna",
  },
  {
    id: "actions",
    header: "Aksi",
    cell: () => {
      return <>-</>;
    },
  },
];
