"use client";

import Link from "next/link";
import { Eye, MoreHorizontal, Pen } from "lucide-react";

import { Employee } from "@/types/employee";
import { EmployeeModule } from "@/constants/employee";

import { getEmployeeColumns } from "@/components/pages/data-pegawai/employee-columns";

import { Button } from "@/components/ui/button";
import { TableEmptyState } from "@/components/empty-states/table-empty-state";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  module: EmployeeModule;
  employees: Employee[];
}

export function EmployeeTable({ module, employees }: Props) {
  const columns = getEmployeeColumns(module);

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.header}>{column.header}</TableHead>
            ))}

            <TableHead className="w-16 text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {employees.length === 0 && (
            <TableEmptyState
              colSpan={columns.length + 1}
              title="Data tidak ditemukan"
              description="Coba ubah kata kunci pencarian."
            />
          )}

          {employees.map((employee) => (
            <TableRow key={employee.id}>
              {columns.map((column) => (
                <TableCell key={column.header}>
                  {column.cell(employee)}
                </TableCell>
              ))}

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    }
                  />

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      render={
                        <Link
                          href={`/dashboard/data-pegawai/detail/${module}/${employee.id}`}
                          className="flex items-center gap-2"
                        >
                          <Eye className="size-4" />
                          Detail
                        </Link>
                      }
                    />

                    <DropdownMenuItem
                      render={
                        <Link
                          href={`/dashboard/data-pegawai/edit/${module}/${employee.id}`}
                          className="flex items-center gap-2"
                        >
                          <Pen className="size-4" />
                          Edit
                        </Link>
                      }
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
