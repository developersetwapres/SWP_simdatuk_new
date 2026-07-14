"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useEmployeeLookup } from "@/hooks/use-employee-lookup";

import { FormDate } from "../../components/form-date";
import { FormSelect } from "../../components/form-select";

export function EmploymentSection() {
  const lookup = useEmployeeLookup();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Kepegawaian</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-5 md:grid-cols-2">
          <FormSelect
            name="institution_id"
            label="Instansi"
            options={lookup.institutions}
          />

          <FormSelect
            name="group_id"
            label="Unit Kerja"
            options={lookup.workUnits}
          />

          <FormSelect
            name="employment_type_id"
            label="Jenis Pegawai"
            options={lookup.employmentTypes}
          />

          <FormSelect
            name="position_id"
            label="Jabatan"
            options={lookup.positions}
          />

          <FormSelect
            name="grade_id"
            label="Pangkat / Golongan"
            options={lookup.grades}
          />

          <FormSelect
            name="echelon_id"
            label="Eselon"
            options={[
              {
                label: "II.a",
                value: "1",
              },
              {
                label: "II.b",
                value: "2",
              },
              {
                label: "III.a",
                value: "3",
              },
              {
                label: "III.b",
                value: "4",
              },
              {
                label: "IV.a",
                value: "5",
              },
              {
                label: "IV.b",
                value: "6",
              },
            ]}
          />

          <FormDate name="position_effective_date" label="TMT Jabatan" />

          <FormDate name="grade_effective_date" label="TMT Pangkat" />

          <FormDate name="cpns_date" label="TMT CPNS" />

          <FormDate name="pns_date" label="TMT PNS" />

          <FormDate name="pppk_date" label="TMT PPPK" />

          <FormDate name="retirement_date" label="Tanggal Pensiun" />

          <FormSelect
            name="status"
            label="Status Pegawai"
            options={[
              {
                label: "Aktif",
                value: "1",
              },
              {
                label: "Tidak Aktif",
                value: "0",
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
