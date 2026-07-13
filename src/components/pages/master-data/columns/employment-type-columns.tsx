"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { EmploymentType } from "@/types/master-employment-type";

const employeeTypeMap: Record<number, string> = {
  1: "ASN",
  2: "Non ASN",
  3: "Outsourcing",
};

export const employmentTypeColumns: ColumnDef<EmploymentType>[] = [
  {
    accessorKey: "type",
    header: "Pegawai",
    cell: ({ getValue }) => {
      const type = getValue<number>();

      return employeeTypeMap[type] ?? "-";
    },
  },
  {
    accessorKey: "name",
    header: "Jenis Pegawai",
  },
  {
    accessorKey: "status",
    header: "Tampilkan",
    cell: ({ getValue }) => {
      const status = getValue<number>();

      return (
        <Badge variant={status === 1 ? "default" : "secondary"}>
          {status === 1 ? "Ya" : "Tidak"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: () => <>-</>,
  },
];
