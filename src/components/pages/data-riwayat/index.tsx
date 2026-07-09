"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MoreHorizontalIcon } from "lucide-react";
import { HISTORY_MODULES, HistoryModule } from "@/constants/history";
import { getHistory } from "@/services/history.service";
import { Button } from "@/components/ui/button";
import { formatPeriod } from "@/lib/date";
import { PageHeader } from "@/components/page-header";
import { useRouter } from "next/navigation";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";
import { TableEmptyState } from "@/components/empty-states/table-empty-state";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HistoryItem } from "@/types/history";

interface Props {
  module: HistoryModule;
}

export function DataRiwayat({ module }: Props) {
  const config = HISTORY_MODULES[module];

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const limit = 10;

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["history", module, page, search],
    queryFn: () =>
      getHistory(config.endpoint, {
        page,
        limit,
        search,
        type: config.type,
      }),
  });

  const getExtraValue = (item: HistoryItem) => {
    switch (module) {
      case "pelatihan-struktural":
      case "pelatihan-fungsional":
      case "pelatihan-teknis":
        if (!item.start_date && !item.end_date) return "-";

        return `${item.start_date ?? "-"} s.d ${item.end_date ?? "-"}`;

      case "penghargaan":
        return item.awarding_institution ?? "-";

      case "skp":
        return item.appraisal_period ?? "-";

      case "ppk":
        return item.performance_period ?? "-";

      default:
        return "-";
    }
  };

  const router = useRouter();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div>
          <Skeleton className="h-8 w-60" />
          <Skeleton className="mt-2 h-4 w-36" />
        </div>

        <Skeleton className="h-10 w-72" />

        <TableSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/30 p-6 text-center">
        Terjadi kesalahan saat memuat data.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
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

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>

              <TableHead>{config.table.name}</TableHead>

              <TableHead>{config.table.period}</TableHead>

              {config.table.extra && (
                <TableHead>{config.table.extra}</TableHead>
              )}

              <TableHead>Jumlah Pegawai</TableHead>

              <TableHead className="w-16 text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.data.length === 0 && (
              <TableEmptyState
                colSpan={config.table.extra ? 6 : 5}
                title="Data tidak ditemukan"
                description="Coba ubah kata kunci pencarian atau tambahkan data baru."
              />
            )}

            {data?.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.created_at}</TableCell>

                <TableCell className="font-medium">{item.name}</TableCell>

                <TableCell>
                  {formatPeriod(item.period_month, item.period_year)}
                </TableCell>

                {config.table.extra && (
                  <TableCell>{getExtraValue(item)}</TableCell>
                )}
                <TableCell>{item.total}</TableCell>

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
                      <DropdownMenuItem
                        onClick={() =>
                          router.push(
                            `/dashboard/data-riwayat/${module}/${item.id}`,
                          )
                        }
                      >
                        Detail
                      </DropdownMenuItem>
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

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Halaman {data?.pagination.current_page} dari{" "}
          {data?.pagination.total_pages}
        </p>

        <div className="flex gap-2">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Sebelumnya
          </Button>

          <Button
            variant="outline"
            disabled={page >= (data?.pagination.total_pages ?? 1)}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Selanjutnya
          </Button>
        </div>
      </div>
    </div>
  );
}
