"use client";

import { ReactNode } from "react";

import { Input } from "@/components/ui/input";

interface PageHeaderProps {
  title: string;
  description?: string;

  total?: number;

  search?: string;
  onSearch?: (value: string) => void;
  searchPlaceholder?: string;

  action?: ReactNode;
}

export function PageHeader({
  title,
  total,
  description,

  search,
  onSearch,
  searchPlaceholder = "Cari data...",

  action,
}: PageHeaderProps) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>

        {description && (
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        )}

        {total !== undefined && (
          <p className="text-muted-foreground text-sm">Total Data : {total}</p>
        )}
      </div>

      {(onSearch || action) && (
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {onSearch ? (
            <Input
              value={search}
              placeholder={searchPlaceholder}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full md:max-w-sm"
            />
          ) : (
            <div />
          )}

          {action}
        </div>
      )}
    </div>
  );
}
