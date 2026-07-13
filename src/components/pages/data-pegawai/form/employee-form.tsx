// src/components/pages/data-pegawai/form/employee-form.tsx

"use client";

import { FormProvider, UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { EmployeeType } from "@/types/employee-form";
import { EmployeeFormValues } from "@/schemas/employee-form.schema";

interface EmployeeFormProps {
  type: EmployeeType;
  mode: "create" | "edit";
  form: UseFormReturn<EmployeeFormValues>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export function EmployeeForm({
  type,
  mode,
  form,
  onSubmit,
}: EmployeeFormProps) {
  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* ================= HEADER ================= */}

        <Card>
          <CardContent className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-2xl font-semibold">
                {mode === "create"
                  ? "Tambah Data Pegawai"
                  : "Ubah Data Pegawai"}
              </h1>

              <p className="text-muted-foreground mt-1 text-sm">
                Tipe Pegawai :
                <span className="ml-1 font-medium uppercase">{type}</span>
              </p>
            </div>

            <div className="flex gap-2">
              <Button type="button" variant="outline">
                Batal
              </Button>

              <Button type="submit">
                {mode === "create" ? "Simpan" : "Perbarui"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* ================= SECTION ================= */}

        <Card>
          <CardContent className="space-y-8 py-6">
            {/* IdentitySection */}

            {/* PositionSection */}

            {/* EducationSection */}

            {/* FamilySection */}

            {/* AssessmentSection */}

            {/* CompetencySection */}

            {/* TalentSection */}

            {/* NoteSection */}
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
}
