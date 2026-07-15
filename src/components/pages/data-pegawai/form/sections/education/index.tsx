"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import { EmployeeFormValues } from "@/schemas/employee-form.schema";

import { useEmployeeLookup } from "@/hooks/use-employee-lookup";
import { emptyEducation } from "@/hooks/use-employee-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FormInput } from "../../components/form-input";
import { FormSelect } from "../../components/form-select";
import { FormUpload } from "../../components/form-upload";

export function EducationSection() {
  const form = useFormContext<EmployeeFormValues>();

  const { educationLevels } = useEmployeeLookup();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "educations",
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Riwayat Pendidikan</CardTitle>

        <Button type="button" onClick={() => append(emptyEducation)}>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Pendidikan
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        {fields.length === 0 && (
          <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
            Belum ada riwayat pendidikan.
          </div>
        )}

        {fields.map((field, index) => (
          <Card key={field.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">
                Pendidikan #{index + 1}
              </CardTitle>

              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => remove(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent>
              <div className="grid gap-5 md:grid-cols-2">
                <FormSelect
                  name={`educations.${index}.level`}
                  label="Jenjang Pendidikan"
                  options={educationLevels}
                />

                <FormInput
                  name={`educations.${index}.name`}
                  label="Nama Pendidikan"
                />

                <FormInput
                  name={`educations.${index}.faculty`}
                  label="Fakultas / Sekolah"
                />

                <FormInput
                  name={`educations.${index}.major`}
                  label="Jurusan"
                />

                <FormSelect
                  name={`educations.${index}.year_of_graduation`}
                  label="Tahun Lulus"
                  options={YEAR_OPTIONS}
                />

                <div className="md:col-span-2">
                  <FormUpload
                    name={`educations.${index}.degree_document`}
                    label="Upload Ijazah"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
