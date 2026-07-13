"use client";

import { ColumnDef } from "@tanstack/react-table";

import { User } from "@/types/master-user";
import { Badge } from "@/components/ui/badge";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    id: "nip",
    header: "NIP / NRP",
    cell: ({ row }) => {
      const employee = row.original;

      return `${employee.employee_id_number ?? "-"} / ${
        employee.employee_registration_number ?? "-"
      }`;
    },
  },
  {
    accessorKey: "role_name",
    header: "Role Pengguna",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<number>();

      return (
        <Badge variant={status === 1 ? "default" : "secondary"}>
          {status === 1 ? "Aktif" : "Tidak Aktif"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: () => {
      return <>-</>;
    },
  },
];
