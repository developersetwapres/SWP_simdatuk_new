"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import { EmployeeFormValues } from "@/schemas/employee-form.schema";

import { useEmployeeLookup } from "@/hooks/use-employee-lookup";

import { FormInput } from "@/components/form-input";
import { FormSelect } from "@/components/form-select";
import { FormDate } from "@/components/form-date";
import { FormUpload } from "@/components/form-upload";

import {
  GENDER_OPTIONS,
  MARITAL_STATUS_OPTIONS,
} from "@/constants/employee-form";

interface IdentitySectionProps {
  lookup: ReturnType<typeof useEmployeeLookup>;
}

export function IdentitySection({ lookup }: IdentitySectionProps) {
  const form = useFormContext<EmployeeFormValues>();

  const religionOptions = useMemo(
    () =>
      lookup.religions.map((item) => ({
        label: item.label,
        value: item.value,
      })),
    [lookup.religions],
  );

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="md:col-span-2">
        <FormUpload
          control={form.control}
          name="photo_profile"
          label="Foto Profil"
          accept="image/*"
        />
      </div>

      <FormInput
        control={form.control}
        name="employee_id_number"
        label="NIP / NRP"
        placeholder="Masukkan NIP / NRP"
      />

      <FormInput
        control={form.control}
        name="employee_registration_number"
        label="NIK"
        placeholder="Masukkan NIK"
      />

      <FormInput
        control={form.control}
        name="title_prefix"
        label="Gelar Depan"
        placeholder="Contoh : Dr."
      />

      <FormInput
        control={form.control}
        name="title_suffix"
        label="Gelar Belakang"
        placeholder="Contoh : S.Kom., M.T."
      />

      <div className="md:col-span-2">
        <FormInput
          control={form.control}
          name="name"
          label="Nama Lengkap"
          placeholder="Masukkan nama lengkap"
          required
        />
      </div>

      <FormInput
        control={form.control}
        name="birth_place"
        label="Tempat Lahir"
        placeholder="Masukkan tempat lahir"
      />

      <FormDate
        control={form.control}
        name="birth_date"
        label="Tanggal Lahir"
      />

      <FormSelect
        control={form.control}
        name="gender"
        label="Jenis Kelamin"
        placeholder="Pilih jenis kelamin"
        options={GENDER_OPTIONS}
      />

      <FormSelect
        control={form.control}
        name="religion_id"
        label="Agama"
        placeholder="Pilih agama"
        loading={lookup.loading}
        options={religionOptions}
      />

      <FormSelect
        control={form.control}
        name="marital_status"
        label="Status Perkawinan"
        placeholder="Pilih status perkawinan"
        options={MARITAL_STATUS_OPTIONS}
      />

      <FormInput
        control={form.control}
        name="email"
        label="Email"
        type="email"
        placeholder="Masukkan email"
      />

      <FormInput
        control={form.control}
        name="phone"
        label="Nomor Handphone"
        placeholder="08xxxxxxxxxx"
      />
    </div>
  );
}
