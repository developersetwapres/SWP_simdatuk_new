"use client";

import { useQuery } from "@tanstack/react-query";

import { HISTORY_MODULES, HistoryModule } from "@/constants/history";
import { getHistoryDetail } from "@/services/history.service";

import { PageHeader } from "@/components/page-header";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

import { HistoryInformationCard } from "./information-card";
import { HistoryEmployeesTable } from "./employees-table";

interface Props {
  module: HistoryModule;
  id: number;
}

export function HistoryDetail({ module, id }: Props) {
  const config = HISTORY_MODULES[module];

  const { data, isLoading, error } = useQuery({
    queryKey: ["history-detail", module, id],
    queryFn: () => getHistoryDetail(config.endpoint, id),
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-72" />
          <Skeleton className="mt-2 h-4 w-48" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-28 rounded-xl" />
          ))}
        </div>

        <TableSkeleton />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-destructive/30 p-8 text-center">
        Gagal memuat data riwayat.
      </div>
    );
  }

  const history = data.data;

  return (
    <div className="space-y-6">
      <PageHeader title={history.name} description={`Detail ${config.title}`} />

      <HistoryInformationCard module={module} history={history} />

      <HistoryEmployeesTable module={module} users={history.users} />
    </div>
  );
}
