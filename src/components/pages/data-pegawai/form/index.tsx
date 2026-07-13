// src/components/pages/data-pegawai/form/index.tsx

"use client";

import { useEmployeeForm } from "@/hooks/use-employee-form";
import { EmployeeType } from "@/types/employee-form";

import { EmployeeForm } from "./employee-form";

interface EmployeeFormPageProps {
  type: EmployeeType;
  mode?: "create" | "edit";
  defaultValues?: Record<string, unknown>;
}

export default function EmployeeFormPage({
  type,
  mode = "create",
  defaultValues,
}: EmployeeFormPageProps) {
  const form = useEmployeeForm({
    type,
    defaultValues,
  });

  const onSubmit = form.handleSubmit(async (values) => {
    console.log(mode);
    console.log(values);

    /**
     * TODO:
     *
     * if (mode === "create") {
     *    await createEmployee(values)
     * } else {
     *    await updateEmployee(id, values)
     * }
     */
  });

  return (
    <EmployeeForm type={type} mode={mode} form={form} onSubmit={onSubmit} />
  );
}
