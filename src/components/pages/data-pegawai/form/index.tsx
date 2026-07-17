"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { FormProvider } from "react-hook-form";
import { toast } from "sonner";

import { EmployeeType } from "@/types/employee-form";

import { useEmployeeForm } from "@/hooks/use-employee-form";
import { useEmployeeLookup } from "@/hooks/use-employee-lookup";
import { useEmployeeSection } from "@/hooks/use-employee-section";
import { useEmployeeDummy } from "@/hooks/use-employee-dummy";

import { EmployeeFormShell } from "./employee-form-shell";
import { EmployeeFormHeader } from "./employee-form-header";
import { EmployeeFormSidebar } from "./employee-form-sidebar";
import { EmployeeFormFooter } from "./employee-form-footer";
import { EmployeeFormSectionCard } from "./employee-form-section";

import { EMPLOYEE_MODULES } from "@/constants/employee";
import { getEmployeeFormSections } from "@/constants/employee-form";
import { buildEmployeeFormData } from "@/lib/build-employee-formdata";
import { createEmployee } from "@/services/employee.service";

interface Props {
  type: EmployeeType;
}

export function EmployeeForm({ type }: Props) {
  const router = useRouter();
  const form = useEmployeeForm({ type });

  const lookup = useEmployeeLookup();
  const dummy = useEmployeeDummy(form);

  const sections = getEmployeeFormSections(type, lookup);

  const section = useEmployeeSection(sections.length);

  const onSubmit = useCallback(
    async (values: any) => {
      const toastId = toast.loading("Menyimpan data pegawai...");

      try {
        const payload = buildEmployeeFormData(values);
        await createEmployee(payload);

        toast.success("Pegawai berhasil ditambah.", { id: toastId });
        router.push("/dashboard/data-pegawai/" + type);
      } catch (error: any) {
        const message =
          error?.response?.data?.message ??
          error?.message ??
          "Mohon maaf, fitur dalam kendala harap hubungi Tim IT!";

        toast.error(message, { id: toastId });
      }
    },
    [router],
  );

  const handleFillDummy = useCallback(() => {
    dummy.fillDummy(type, {
      employmentTypeIds: lookup.employmentTypes.map((o) => Number(o.value)),
      positionIds: lookup.positions.map((o) => Number(o.value)),
      gradeIds: lookup.grades.map((o) => Number(o.value)),
      institutionIds: lookup.institutions.map((o) => Number(o.value)),
    });
  }, [dummy, type, lookup]);

  const config = EMPLOYEE_MODULES[type];

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <EmployeeFormShell>
          <EmployeeFormHeader
            title={`Tambah ${config.title}`}
            employeeType={config.title}
            totalSections={sections.length}
            onFillDummy={handleFillDummy}
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
            isSubmitting={form.formState.isSubmitting}
            onPrevious={section.previous}
            onNext={section.next}
          />
        </EmployeeFormShell>
      </form>
    </FormProvider>
  );
}
