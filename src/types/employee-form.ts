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
  | "studyAreas"
  | "talentPoints"
  | "types"
  | "years";

export interface EmployeeFormOption {
  label: string;
  value: string;
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

export interface EmployeeFormSection {
  id: string;
  title: string;
  description: string;
  accent: string;
  arrayName?: EmployeeArrayFieldName;
  fields: EmployeeFormField[];
  repeatable?: boolean;
  addLabel?: string;
}

export type EmployeeArrayFieldName =
  | "assessments"
  | "competencies"
  | "educations"
  | "families"
  | "leaves"
  | "notes"
  | "talents";

export interface EmployeeEducationForm {
  level?: string;
  name?: string;
  study_area?: string;
  accreditation?: string;
  faculty?: string;
  major?: string;
  year_of_graduation?: string;
  description?: string;
  degree_document?: FileList;
  study_assignment_letter?: FileList;
  academic_title_letter?: FileList;
}

export interface EmployeeFamilyForm {
  card_number?: string;
  name?: string;
  id_number?: string;
  gender?: string;
  religion?: string;
  place_of_birth?: string;
  date_of_birth?: string;
  name_of_father?: string;
  name_of_mother?: string;
  relationship_status?: string;
  education?: string;
  occupation?: string;
  occupation_description?: string;
  marital_status?: string;
  marriage_other_notes?: string;
  mobile_phone?: string;
  sequence_number?: string;
}

export interface EmployeeLeaveForm {
  start_date?: string;
  end_date?: string;
  type?: string;
  number?: string;
  description?: string;
  letter?: FileList;
}

export interface EmployeeNoteForm {
  description?: string;
}

export interface EmployeeAssessmentForm {
  event_date?: string;
  point?: string;
  organizer?: string;
  assessment_document?: FileList;
}

export interface EmployeeCompetencyForm {
  event_date?: string;
  point?: string;
  organizer?: string;
  competency_document?: FileList;
}

export interface EmployeeTalentForm {
  event_date?: string;
  point?: string;
  organizer?: string;
  talent_document?: FileList;
}

export interface EmployeeFormValues {
  photo_profile?: FileList;
  name: string;
  title_prefix?: string;
  title_suffix?: string;
  employee_id_number: string;
  employee_registration_number?: string;
  place_of_birth: string;
  date_of_birth: string;
  religion: string;
  gender: string;
  marital_status?: string;
  marriage_date?: string;
  marriage_description?: string;
  employment_type_id: string;
  cpns_effective_date?: string;
  pns_effective_date?: string;
  position_id: string;
  position_effective_date: string;
  grade_id?: string;
  grade_effective_date?: string;
  echelon_id?: string;
  echelon_effective_date?: string;
  overall_work_years?: string;
  overall_work_months?: string;
  grade_work_years?: string;
  grade_work_months?: string;
  institution_id?: string;
  education_level: string;
  education_name?: string;
  education_year?: string;
  employee_id_card_number?: string;
  employee_id_card?: FileList;
  karisu_number?: string;
  id_tax?: string;
  employment_status: string;
  family_registration_number?: string;
  id_number: string;
  residence_id?: string;
  residence_description?: string;
  current_address?: string;
  home_phone_number?: string;
  mobile_phone?: string;
  office_address?: string;
  office_phone_number?: string;
  email?: string;
  office_email?: string;
  emergency_contact: string;
  description?: string;
  type: string;
  quit_date?: string;
  educations: EmployeeEducationForm[];
  families: EmployeeFamilyForm[];
  leaves: EmployeeLeaveForm[];
  notes: EmployeeNoteForm[];
  assessments: EmployeeAssessmentForm[];
  competencies: EmployeeCompetencyForm[];
  talents: EmployeeTalentForm[];
}
