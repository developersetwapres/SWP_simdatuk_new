"use client";

import { useQuery } from "@tanstack/react-query";
import { MoreHorizontalIcon } from "lucide-react";

import { HISTORY_MODULES, HistoryModule } from "@/constants/history";
import { getHistory } from "@/services/history.service";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
}

export function DataRiwayat({ module }: Props) {
  const config = HISTORY_MODULES[module];

  const { data, isLoading, error } = useQuery({
    queryKey: ["history", module],
    queryFn: () =>
      getHistory(config.endpoint, {
        page: 1,
        limit: 10,
        search: "",
        type: config.type,
      }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Terjadi kesalahan.</div>;
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">{config.title}</h1>
        <p className="text-muted-foreground text-sm">
          Total Data : {data?.pagination.total ?? 0}
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
            <TableHead>Periode</TableHead>
            <TableHead>Total Pegawai</TableHead>
            <TableHead>Dibuat</TableHead>
            <TableHead className="w-16 text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.data.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center text-muted-foreground"
              >
                Tidak ada data.
              </TableCell>
            </TableRow>
          )}

          {data?.data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>

              <TableCell>
                {item.period_month ?? "-"} / {item.period_year ?? "-"}
              </TableCell>

              <TableCell>{item.total}</TableCell>

              <TableCell>{item.created_at}</TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontalIcon />
                      </Button>
                    }
                  />

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Detail</DropdownMenuItem>

                    <DropdownMenuItem>Edit</DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem variant="destructive">
                      Hapus
                    </DropdownMenuItem>
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
