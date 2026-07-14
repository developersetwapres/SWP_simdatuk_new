import type { LucideIcon } from "lucide-react";

import type { EmployeeModule } from "@/constants/employee";

export type EmployeeType = EmployeeModule;

export type EmployeeBackendType = 1 | 2 | 3;

export type EmployeeFormFieldType =
  | "date"
  | "email"
  | "file"
  | "number"
  | "phone"
  | "select"
  | "text"
  | "textarea";

export type EmployeeFormOptionSource =
  | "assessmentPoints"
  | "competencyPoints"
  | "echelons"
  | "educationLevels"
  | "employmentStatuses"
  | "employmentTypes"
  | "familyEducation"
  | "genders"
  | "grades"
  | "institutions"
  | "leaveTypes"
  | "maritalStatuses"
  | "positions"
  | "relationshipStatuses"
  | "religions"
  | "residences"
  | "studyAreas"
  | "talentPoints"
  | "types"
  | "years";

export interface EmployeeFormOption {
  label: string;
  value: string | number;
}

export interface EmployeeFormField {
  name: string;
  label: string;
  type: EmployeeFormFieldType;
  required?: boolean;
  accept?: string;
  description?: string;
  optionSource?: EmployeeFormOptionSource;
  options?: EmployeeFormOption[];
  placeholder?: string;
  skipSubmit?: boolean;
  wide?: boolean;
}

export type EmployeeArrayFieldName =
  | "assessments"
  | "competencies"
  | "educations"
  | "families"
  | "leaves"
  | "notes"
  | "talents";

export interface EmployeeFormRepeatableSection {
  name: EmployeeArrayFieldName;
  addLabel: string;
}

export interface EmployeeFormSection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  fields: EmployeeFormField[];
  repeatable?: EmployeeFormRepeatableSection;
}

export interface EmployeeEducationForm {
  level?: string | number;
  name?: string;
  study_area?: string | number;
  accreditation?: string;
  faculty?: string;
  major?: string;
  year_of_graduation?: string;
  description?: string;
  degree_document?: File;
  study_assignment_letter?: File;
  academic_title_letter?: File;
}

export interface EmployeeFamilyForm {
  card_number?: string;
  name?: string;
  id_number?: string;
  gender?: string | number;
  religion?: string | number;
  place_of_birth?: string;
  date_of_birth?: string;
  name_of_father?: string;
  name_of_mother?: string;
  relationship_status?: string | number;
  education?: string | number;
  occupation?: string;
  occupation_description?: string;
  marital_status?: string | number;
  marriage_other_notes?: string;
  mobile_phone?: string;
  sequence_number?: string | number;
}

export interface EmployeeLeaveForm {
  start_date?: string;
  end_date?: string;
  type?: string | number;
  number?: string;
  description?: string;
  letter?: File;
}

export interface EmployeeNoteForm {
  description?: string;
}

export interface EmployeeAssessmentForm {
  event_date?: string;
  point?: string | number;
  organizer?: string;
  assessment_document?: File;
}

export interface EmployeeCompetencyForm {
  event_date?: string;
  point?: string | number;
  organizer?: string;
  competency_document?: File;
}

export interface EmployeeTalentForm {
  event_date?: string;
  point?: string | number;
  organizer?: string;
  talent_document?: File;
}
