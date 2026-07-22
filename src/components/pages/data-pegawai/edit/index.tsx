"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { FormProvider } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { EMPLOYEE_MODULES, type EmployeeModule } from "@/constants/employee";
import type { EmployeeFormValues } from "@/schemas/employee-form.schema";
import { getEmployeeFormSections } from "@/constants/employee-form";
import { useEmployeeDummy } from "@/hooks/use-employee-dummy";
import { useEmployeeForm } from "@/hooks/use-employee-form";
import { useEmployeeLookup } from "@/hooks/use-employee-lookup";
import { useEmployeeSection } from "@/hooks/use-employee-section";
import { buildEmployeeFormData } from "@/lib/build-employee-formdata";
import { mapEmployeeDetailToFormValues } from "@/lib/map-employee-detail";
import { detailEmployee, updateEmployee } from "@/services/employee.service";

import { EmployeeFormFooter } from "../form/employee-form-footer";
import { EmployeeFormHeader } from "../form/employee-form-header";
import { EmployeeFormSectionCard } from "../form/employee-form-section";
import { EmployeeFormShell } from "../form/employee-form-shell";
import { EmployeeFormSidebar } from "../form/employee-form-sidebar";

interface Props {
  type: EmployeeModule;
  id: string;
}

export function EditPegawai({ id, type }: Props) {
  const config = EMPLOYEE_MODULES[type];
  const router = useRouter();

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["employees", id],
    queryFn: () => detailEmployee(id),
  });

  const detail = useMemo(() => {
    if (!data || typeof data !== "object") return null;
    const payload = data as Record<string, unknown>;
    if (payload.data && typeof payload.data === "object") {
      return payload.data as Record<string, unknown>;
    }
    return payload;
  }, [data]);

  const defaultValues = useMemo(
    () => mapEmployeeDetailToFormValues(detail, type),
    [detail, type],
  );

  const form = useEmployeeForm({ type, defaultValues });
  const dummy = useEmployeeDummy(form);
  const lookup = useEmployeeLookup(config.type);
  const sections = getEmployeeFormSections(type, lookup);
  const section = useEmployeeSection(sections.length);

  useEffect(() => {
    if (detail) {
      form.reset(defaultValues);
    }
  }, [defaultValues, detail, form]);

  const onSubmit = useCallback(
    async (values: EmployeeFormValues) => {
      const toastId = toast.loading("Menyimpan perubahan data pegawai...");

      try {
        const payload = buildEmployeeFormData(values);
        await updateEmployee(id, payload);

        toast.success("Pegawai berhasil diperbarui.", { id: toastId });
        router.push(`/dashboard/data-pegawai/${type}`);
      } catch (error: unknown) {
        const message =
          (
            error as {
              response?: { data?: { message?: string } };
              message?: string;
            }
          )?.response?.data?.message ??
          (error as { message?: string })?.message ??
          "Mohon maaf, fitur dalam kendala harap hubungi Tim IT!";

        console.log("Error updating employee:", error);

        toast.error(message, { id: toastId });
      }
    },
    [id, router, type],
  );

  const handleFillDummy = useCallback(() => {
    dummy.fillDummy(type, {
      employmentTypeIds: lookup.employmentTypes.map((o) => Number(o.value)),
      positionIds: lookup.positions.map((o) => Number(o.value)),
      gradeIds: lookup.grades.map((o) => Number(o.value)),
      institutionIds: lookup.institutions.map((o) => Number(o.value)),
    });
  }, [dummy, type, lookup]);

  if (isLoading) {
    return (
      <div className="rounded-xl border bg-card p-8 text-sm text-muted-foreground">
        Memuat data pegawai...
      </div>
    );
  }

  if (error || !detail) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 text-sm text-destructive">
        Data pegawai tidak dapat dimuat. Silakan coba lagi.
      </div>
    );
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <EmployeeFormShell>
          <EmployeeFormHeader
            title={`Edit ${config.title}`}
            description="Perbarui informasi pegawai sesuai data yang sudah tersimpan."
            employeeType={config.title}
            totalSections={sections.length}
            onFillDummy={handleFillDummy}
            mode="edit"
          />

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <EmployeeFormSidebar
              sections={sections}
              activeSection={section.active}
              onChangeSection={section.goTo}
            />

            <div className="space-y-6">
              <EmployeeFormSectionCard
                section={sections[section.active]}
                index={section.active}
              />
            </div>
          </div>

          <EmployeeFormFooter
            currentSection={section.active}
            totalSection={sections.length}
            sectionTitle={sections[section.active]?.title ?? ""}
            isFirstSection={section.isFirst}
            isLastSection={section.isLast}
            isSubmitting={form.formState.isSubmitting || isFetching}
            onPrevious={section.previous}
            onNext={section.next}
          />
        </EmployeeFormShell>
      </form>
    </FormProvider>
  );
}
