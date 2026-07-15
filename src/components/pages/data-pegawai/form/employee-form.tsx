"use client";

import { FormProvider } from "react-hook-form";

import { EmployeeType } from "@/types/employee-form";

import { useEmployeeForm } from "@/hooks/use-employee-form";
import { useEmployeeLookup } from "@/hooks/use-employee-lookup";
import { useEmployeeSection } from "@/hooks/use-employee-section";

import { EmployeeFormShell } from "./employee-form-shell";
import { EmployeeFormHeader } from "./employee-form-header";
import { EmployeeFormSidebar } from "./employee-form-sidebar";
import { EmployeeFormFooter } from "./employee-form-footer";
import { EmployeeFormSectionCard } from "./employee-form-section";

import { EMPLOYEE_MODULES } from "@/constants/employee";
import { getEmployeeFormSections } from "@/constants/employee-form";

interface Props {
  type: EmployeeType;
}

export function EmployeeForm({ type }: Props) {
  const form = useEmployeeForm({ type });

  const lookup = useEmployeeLookup();

  const sections = getEmployeeFormSections(type, lookup);

  const section = useEmployeeSection(sections.length);

  async function onSubmit(values: any) {
    console.log(values);
  }

  const config = EMPLOYEE_MODULES[type];

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <EmployeeFormShell>
          <EmployeeFormHeader
            title={`Tambah ${config.title}`}
            employeeType={config.title}
            totalSections={sections.length}
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
