"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FilePlus2Icon,
  SaveIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface EmployeeFormFooterProps {
  currentSection: number;
  totalSection: number;
  sectionTitle: string;

  isFirstSection: boolean;
  isLastSection: boolean;

  isSubmitting?: boolean;
  submitted?: boolean;

  onPrevious: () => void;
  onNext: () => void;
}

export function EmployeeFormFooter({
  currentSection,
  totalSection,
  sectionTitle,
  isFirstSection,
  isLastSection,
  isSubmitting = false,
  submitted = false,
  onPrevious,
  onNext,
}: EmployeeFormFooterProps) {
  return (
    <>
      <Separator />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Section {currentSection + 1} dari {totalSection} • {sectionTitle}
        </p>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            disabled={isFirstSection}
            onClick={onPrevious}
          >
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Sebelumnya
          </Button>

          {!isLastSection && (
            <Button type="button" variant="outline" onClick={onNext}>
              Selanjutnya
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="sticky bottom-3 z-10 mt-6 rounded-xl border bg-background/95 p-3 shadow-lg backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FilePlus2Icon className="h-4 w-4 text-teal-600" />

            {submitted
              ? "Perubahan berhasil disimpan."
              : "Lengkapi seluruh data sebelum menyimpan."}
          </div>

          <div className="flex flex-col-reverse gap-2 sm:flex-row">
            <Button type="reset" variant="outline">
              Reset
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-700 hover:bg-teal-800"
            >
              <SaveIcon className="mr-2 h-4 w-4" />

              {isSubmitting ? "Menyimpan..." : "Simpan Data Pegawai"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
