export type EmployeeType = "asn" | "non-asn" | "outsourcing";

export interface EmployeeIdentityForm {}
export interface EmployeePositionForm {}
export interface EmployeeEducationForm {}
export interface EmployeeFamilyForm {}
export interface EmployeeLeaveForm {}
export interface EmployeeAssessmentForm {}
export interface EmployeeCompetencyForm {}
export interface EmployeeTalentForm {}
export interface EmployeeNoteForm {}

export interface EmployeeForm {
  identity: EmployeeIdentityForm;
  position: EmployeePositionForm;
  educations: EmployeeEducationForm[];
  families: EmployeeFamilyForm[];
  leaves: EmployeeLeaveForm[];
  assessments: EmployeeAssessmentForm[];
  competencies: EmployeeCompetencyForm[];
  talents: EmployeeTalentForm[];
  notes: EmployeeNoteForm[];
}
