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

import { IdentitySection } from "./sections/identity";

interface Props {
  type: EmployeeType;
}

export function EmployeeForm({ type }: Props) {
  const form = useEmployeeForm({ type });

  const lookup = useEmployeeLookup();

  const section = useEmployeeSection();

  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <EmployeeFormShell>
          <EmployeeFormHeader type={type} />

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <EmployeeFormSidebar
              active={section.active}
              onChange={section.goTo}
            />

            <div className="space-y-6">
              {section.active === 0 && <IdentitySection lookup={lookup} />}

              {section.active === 1 && <>Employment Section</>}

              {section.active === 2 && <>Education Section</>}

              {section.active === 3 && <>Family Section</>}

              {section.active === 4 && <>Leave Section</>}

              {section.active === 5 && <>Assessment Section</>}

              {section.active === 6 && <>Competency Section</>}

              {section.active === 7 && <>Talent Section</>}

              {section.active === 8 && <>Notes Section</>}
            </div>
          </div>

          <EmployeeFormFooter
            active={section.active}
            total={9}
            canPrevious={section.canPrevious}
            canNext={section.canNext}
            onPrevious={section.previous}
            onNext={section.next}
            loading={form.formState.isSubmitting}
          />
        </EmployeeFormShell>
      </form>
    </FormProvider>
  );
}
