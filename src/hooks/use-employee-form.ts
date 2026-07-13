"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  employeeFormSchema,
  type EmployeeFormValues,
} from "@/schemas/employee-form.schema";

import { EmployeeType } from "@/types/employee-form";

interface UseEmployeeFormProps {
  type: EmployeeType;
  defaultValues?: Partial<EmployeeFormValues>;
}

export function useEmployeeForm({ type, defaultValues }: UseEmployeeFormProps) {
  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    mode: "onChange",
    defaultValues: {
      employee_type: type,

      photo_profile: undefined,

      employee_id_number: "",

      employee_registration_number: "",

      title_prefix: "",

      name: "",

      title_suffix: "",

      gender: undefined,

      birth_place: "",

      birth_date: "",

      religion_id: undefined,

      marital_status: "",

      email: "",

      phone: "",

      address: "",

      province_id: undefined,

      city_id: undefined,

      district_id: undefined,

      village_id: undefined,

      postal_code: "",

      institution_id: undefined,

      group_id: undefined,

      employment_type_id: undefined,

      position_id: undefined,

      echelon_id: undefined,

      grade_id: undefined,

      grade_effective_date: "",

      position_effective_date: "",

      cpns_date: "",

      pns_date: "",

      pppk_date: "",

      retirement_date: "",

      status: 1,

      education_level_id: undefined,

      education_name: "",

      major: "",

      graduation_year: undefined,

      institution_name: "",

      spouse_name: "",

      spouse_birth_date: "",

      children: [],

      leaves: [],

      assessments: [],

      competencies: [],

      talents: [],

      notes: "",

      ...defaultValues,
    },
  });

  return form;
}
