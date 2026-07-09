"use client";

import { MoreHorizontal, Eye } from "lucide-react";
import { HistoryModule } from "@/constants/history";
import { getHistoryColumns } from "@/components/pages/data-riwayat/detail/colums";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  module: HistoryModule;
  users: any[];
}

export function HistoryEmployeesTable({ module, users }: Props) {
  const columns = getHistoryColumns(module);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daftar Pegawai</CardTitle>

        <CardDescription>Total {users.length} Pegawai</CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14">No</TableHead>

              {columns.map((column) => (
                <TableHead key={column.key}>{column.title}</TableHead>
              ))}

              <TableHead className="w-20 text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 2}
                  className="h-24 text-center text-muted-foreground"
                >
                  Tidak ada data pegawai.
                </TableCell>
              </TableRow>
            )}

            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{index + 1}</TableCell>

                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {column.render(user, index)}
                  </TableCell>
                ))}

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      }
                    />

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        Detail Pegawai
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
