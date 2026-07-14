export type EmployeeType = "asn" | "non-asn" | "outsourcing";

/* -------------------------------------------------------------------------- */
/*                              Identity                                      */
/* -------------------------------------------------------------------------- */

export interface EmployeeIdentityForm {
  photo_profile?: File | null;

  employee_type: EmployeeType;

  employee_id_number?: string;

  employee_registration_number?: string;

  title_prefix?: string;

  name: string;

  title_suffix?: string;

  gender?: number;

  birth_place?: string;

  birth_date?: string;

  religion_id?: number;

  marital_status?: string;

  email?: string;

  phone?: string;

  address?: string;

  province_id?: number;

  city_id?: number;

  district_id?: number;

  village_id?: number;

  postal_code?: string;
}

/* -------------------------------------------------------------------------- */
/*                             Employment                                     */
/* -------------------------------------------------------------------------- */

export interface EmployeePositionForm {
  institution_id?: number;

  group_id?: number;

  employment_type_id?: number;

  position_id?: number;

  echelon_id?: number;

  grade_id?: number;

  grade_effective_date?: string;

  position_effective_date?: string;

  cpns_date?: string;

  pns_date?: string;

  pppk_date?: string;

  retirement_date?: string;

  status?: number;
}

/* -------------------------------------------------------------------------- */
/*                              Education                                     */
/* -------------------------------------------------------------------------- */

export interface EmployeeEducationForm {
  education_level_id?: number;

  education_name?: string;

  institution_name?: string;

  major?: string;

  graduation_year?: number;

  diploma_file?: File | null;
}

/* -------------------------------------------------------------------------- */
/*                                Family                                      */
/* -------------------------------------------------------------------------- */

export interface EmployeeFamilyForm {
  name?: string;

  relationship?: string;

  gender?: number;

  birth_place?: string;

  birth_date?: string;

  education?: string;

  occupation?: string;

  phone?: string;

  address?: string;
}

/* -------------------------------------------------------------------------- */
/*                                 Leave                                      */
/* -------------------------------------------------------------------------- */

export interface EmployeeLeaveForm {
  leave_type?: string;

  start_date?: string;

  end_date?: string;

  letter_number?: string;

  description?: string;

  attachment?: File | null;
}

/* -------------------------------------------------------------------------- */
/*                              Assessment                                    */
/* -------------------------------------------------------------------------- */

export interface EmployeeAssessmentForm {
  assessment_date?: string;

  organizer?: string;

  result?: string;

  attachment?: File | null;
}

/* -------------------------------------------------------------------------- */
/*                              Competency                                    */
/* -------------------------------------------------------------------------- */

export interface EmployeeCompetencyForm {
  competency_date?: string;

  organizer?: string;

  result?: string;

  attachment?: File | null;
}

/* -------------------------------------------------------------------------- */
/*                                Talent                                      */
/* -------------------------------------------------------------------------- */

export interface EmployeeTalentForm {
  talent_date?: string;

  organizer?: string;

  result?: string;

  attachment?: File | null;
}

/* -------------------------------------------------------------------------- */
/*                                 Notes                                      */
/* -------------------------------------------------------------------------- */

export interface EmployeeNoteForm {
  note?: string;
}

/* -------------------------------------------------------------------------- */
/*                             Root Form                                      */
/* -------------------------------------------------------------------------- */

export interface EmployeeForm {
  identity: EmployeeIdentityForm;

  employment: EmployeePositionForm;

  educations: EmployeeEducationForm[];

  families: EmployeeFamilyForm[];

  leaves: EmployeeLeaveForm[];

  assessments: EmployeeAssessmentForm[];

  competencies: EmployeeCompetencyForm[];

  talents: EmployeeTalentForm[];

  notes: EmployeeNoteForm[];
}
