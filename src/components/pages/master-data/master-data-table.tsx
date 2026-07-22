"use client";

import { useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getMasterDataColumns } from "./master-data-columns";

type Props = {
  type: string;
  data: any[];
  loading: boolean;

  page: number;
  onPageChange: (page: number) => void;

  search: string;
  onSearchChange: (value: string) => void;

  pagination?: {
    total: number;
    current_page: number;
    total_pages: number;
    per_page: number;
  };
};

type DataTableMasterDataProps = {
  columns: ColumnDef<any>[];
  data: any[];
  loading: boolean;
  page: number;
  onPageChange: (page: number) => void;
  search: string;
  onSearchChange: (value: string) => void;
  pagination?: Props["pagination"];
};

function getValueByPath(obj: Record<string, any> | undefined, path?: string) {
  if (!obj || !path) return undefined;

  return path.split(".").reduce((current, key) => current?.[key], obj);
}

function DataTableMasterData({
  columns,
  data,
  loading,
  page,
  onPageChange,
  search,
  onSearchChange,
  pagination,
}: DataTableMasterDataProps) {
  const renderCell = (column: ColumnDef<any>, item: Record<string, any>) => {
    if (typeof column.cell === "function") {
      const context = {
        row: { original: item },
        getValue: (key: string) => getValueByPath(item, key),
      };

      return column.cell(context as any);
    }

    const accessorKey = (column as { accessorKey?: string }).accessorKey;

    if (typeof accessorKey === "string") {
      return getValueByPath(item, accessorKey);
    }

    return null;
  };

  const renderHeader = (column: ColumnDef<any>) => {
    if (typeof column.header === "string") {
      return column.header;
    }

    if (typeof column.header === "function") {
      return column.id ?? "Kolom";
    }

    return column.id ?? "Kolom";
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {loading ? "Memuat data..." : `Menampilkan ${data.length} data`}
        </p>

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Cari data"
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => {
                const accessorKey = (column as { accessorKey?: string })
                  .accessorKey;

                return (
                  <TableHead
                    key={column.id ?? `${accessorKey ?? "column"}-${index}`}
                  >
                    {renderHeader(column)}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="py-10 text-center"
                >
                  Memuat data...
                </TableCell>
              </TableRow>
            ) : data.length > 0 ? (
              data.map((item, index) => (
                <TableRow key={item.id ?? `${index}-${JSON.stringify(item)}`}>
                  {columns.map((column, columnIndex) => {
                    const accessorKey = (column as { accessorKey?: string })
                      .accessorKey;

                    return (
                      <TableCell
                        key={
                          column.id ??
                          `${accessorKey ?? "cell"}-${index}-${columnIndex}`
                        }
                      >
                        {renderCell(column, item)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="py-10 text-center"
                >
                  Belum ada data.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {pagination && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Halaman {pagination.current_page} dari {pagination.total_pages}
          </p>

          <div className="flex gap-2">
            <Button
              variant="outline"
              disabled={page <= 1}
              onClick={() => onPageChange(page - 1)}
            >
              Sebelumnya
            </Button>
            <Button
              variant="outline"
              disabled={page >= (pagination.total_pages ?? 1)}
              onClick={() => onPageChange(page + 1)}
            >
              Selanjutnya
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function MasterDataTable({
  type,
  data,
  loading,
  page,
  onPageChange,
  search,
  onSearchChange,
  pagination,
}: Props) {
  const columns = useMemo(() => getMasterDataColumns(type), [type]);

  return (
    <DataTableMasterData
      columns={columns}
      data={data}
      loading={loading}
      search={search}
      onSearchChange={onSearchChange}
      pagination={pagination}
      page={page}
      onPageChange={onPageChange}
    />
  );
}
