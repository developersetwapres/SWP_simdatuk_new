"use client";

import {
  BookOpenIcon,
  BriefcaseBusinessIcon,
  SparklesIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface EmployeeFormHeaderProps {
  title: string;
  description?: string;
  employeeType: string;
  totalSections: number;
}

export function EmployeeFormHeader({
  title,
  description,
  employeeType,
  totalSections,
}: EmployeeFormHeaderProps) {
  return (
    <div className="rounded-xl border overflow-hidden bg-card">
      <div className="border-b bg-[linear-gradient(120deg,#f8fafc,#ecfeff,#fff7ed)] p-5 sm:p-6 dark:bg-none">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <Badge
              variant="outline"
              className="border-teal-200 bg-white/70 text-teal-700"
            >
              <SparklesIcon className="mr-1 h-4 w-4" />
              Form Tambah Pegawai
            </Badge>

            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h1>

              <p className="text-sm leading-6 text-muted-foreground">
                {description ??
                  "Lengkapi seluruh informasi pegawai melalui beberapa section yang telah disediakan."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
            <Badge className="bg-teal-600 text-white hover:bg-teal-600">
              <BriefcaseBusinessIcon className="mr-1 h-4 w-4" />
              {employeeType}
            </Badge>

            <Badge variant="secondary">
              <BookOpenIcon className="mr-1 h-4 w-4" />
              {totalSections} Section
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
