"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  employeeFormSchema,
  type EmployeeFormValues,
} from "@/schemas/employee-form.schema";
import { EMPLOYEE_MODULES } from "@/constants/employee";
import { type EmployeeType } from "@/types/employee-form";

interface UseEmployeeFormProps {
  type: EmployeeType;
  defaultValues?: Partial<EmployeeFormValues>;
}

export const emptyEducation = {
  level: undefined,
  name: "",
  study_area: undefined,
  accreditation: "",
  faculty: "",
  major: "",
  year_of_graduation: "",
  description: "",
  degree_document: undefined,
  study_assignment_letter: undefined,
  academic_title_letter: undefined,
};

export const emptyFamily = {
  card_number: "",
  name: "",
  id_number: "",
  gender: undefined,
  religion: undefined,
  place_of_birth: "",
  date_of_birth: "",
  name_of_father: "",
  name_of_mother: "",
  relationship_status: undefined,
  education: undefined,
  occupation: "",
  occupation_description: "",
  marital_status: undefined,
  marriage_other_notes: "",
  mobile_phone: "",
  sequence_number: undefined,
};

export const emptyLeave = {
  start_date: "",
  end_date: "",
  type: undefined,
  number: "",
  description: "",
  letter: undefined,
};

export const emptyNote = {
  description: "",
};

export const emptyAssessment = {
  event_date: "",
  point: undefined,
  organizer: "",
  assessment_document: undefined,
};

export const emptyCompetency = {
  event_date: "",
  point: undefined,
  organizer: "",
  competency_document: undefined,
};

export const emptyTalent = {
  event_date: "",
  point: undefined,
  organizer: "",
  talent_document: undefined,
};

export function useEmployeeForm({ type, defaultValues }: UseEmployeeFormProps) {
  return useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    mode: "onChange",
    defaultValues: {
      photo_profile: undefined,
      name: "",
      title_prefix: "",
      title_suffix: "",
      employee_id_number: "",
      employee_registration_number: "",
      place_of_birth: "",
      date_of_birth: "",
      religion: undefined,
      gender: undefined,
      marital_status: undefined,
      marriage_date: "",
      marriage_description: "",
      employment_type_id: undefined,
      cpns_effective_date: "",
      pns_effective_date: "",
      position_id: undefined,
      position_effective_date: "",
      grade_id: undefined,
      grade_effective_date: "",
      echelon_id: undefined,
      echelon_effective_date: "",
      overall_work_years: undefined,
      overall_work_months: undefined,
      grade_work_years: undefined,
      grade_work_months: undefined,
      institution_id: undefined,
      education_level: undefined,
      education_name: "",
      education_year: "",
      employee_id_card_number: "",
      employee_id_card: undefined,
      karisu_number: "",
      id_tax: "",
      employment_status: undefined,
      family_registration_number: "",
      id_number: "",
      residence_id: undefined,
      residence_description: "",
      current_address: "",
      home_phone_number: "",
      mobile_phone: "",
      office_address: "",
      office_phone_number: "",
      email: "",
      office_email: "",
      emergency_contact: "",
      description: "",
      type: EMPLOYEE_MODULES[type].type,
      delete_employee_id_card: false,
      quit_date: "",
      delete_photo_profile: false,
      educations: [emptyEducation],
      families: [emptyFamily],
      leaves: [emptyLeave],
      notes: [emptyNote],
      assessments: [emptyAssessment],
      competencies: [emptyCompetency],
      talents: [emptyTalent],
      ...defaultValues,
    },
  });
}
