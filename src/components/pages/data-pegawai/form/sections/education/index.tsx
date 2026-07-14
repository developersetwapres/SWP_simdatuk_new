"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import { EmployeeFormValues } from "@/schemas/employee-form.schema";

import { useEmployeeLookup } from "@/hooks/use-employee-lookup";

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

        <Button
          type="button"
          onClick={() =>
            append({
              education_level_id: undefined,
              institution_name: "",
              major: "",
              graduation_year: undefined,
              education_name: "",
              diploma_file: undefined,
            })
          }
        >
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
                  control={form.control}
                  name={`educations.${index}.education_level_id`}
                  label="Jenjang Pendidikan"
                  options={educationLevels}
                />

                <FormInput
                  control={form.control}
                  name={`educations.${index}.education_name`}
                  label="Nama Pendidikan"
                />

                <FormInput
                  control={form.control}
                  name={`educations.${index}.institution_name`}
                  label="Universitas / Sekolah"
                />

                <FormInput
                  control={form.control}
                  name={`educations.${index}.major`}
                  label="Jurusan"
                />

                <FormInput
                  control={form.control}
                  name={`educations.${index}.graduation_year`}
                  label="Tahun Lulus"
                  type="number"
                />

                <div className="md:col-span-2">
                  <FormUpload
                    control={form.control}
                    name={`educations.${index}.diploma_file`}
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
