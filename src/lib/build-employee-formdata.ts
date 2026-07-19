import type { EmployeeFormValues } from "@/schemas/employee-form.schema";

/**
 * Build a FormData payload from the employee form values.
 * Handles file fields, nested arrays (educations, families, etc.),
 * and strips out undefined/empty values.
 */
export function buildEmployeeFormData(values: EmployeeFormValues): FormData {
  const fd = new FormData();

  // --- Scalar fields ---
  const scalarFields: (keyof EmployeeFormValues)[] = [
    "photo_profile",
    "name",
    "title_prefix",
    "title_suffix",
    "employee_id_number",
    "employee_registration_number",
    "place_of_birth",
    "date_of_birth",
    "religion",
    "gender",
    "marital_status",
    "marriage_date",
    "marriage_description",
    "employment_type_id",
    "cpns_effective_date",
    "pns_effective_date",
    "position_id",
    "position_effective_date",
    "grade_id",
    "grade_effective_date",
    "echelon_id",
    "echelon_effective_date",
    "overall_work_years",
    "overall_work_months",
    "grade_work_years",
    "grade_work_months",
    "institution_id",
    "education_level",
    "education_name",
    "education_year",
    "employee_id_card_number",
    "employee_id_card",
    "karisu_number",
    "id_tax",
    "employment_status",
    "family_registration_number",
    "id_number",
    "residence_id",
    "residence_description",
    "current_address",
    "home_phone_number",
    "mobile_phone",
    "office_address",
    "office_phone_number",
    "email",
    "office_email",
    "emergency_contact",
    "description",
    "type",
    "quit_date",
  ];

  for (const key of scalarFields) {
    const value = values[key];
    if (value === undefined || value === null || value === "") continue;

    if (key === "photo_profile" || key === "employee_id_card") {
      // File fields
      if (value instanceof File) {
        fd.append(key, value);
      }
    } else {
      fd.append(key, String(value));
    }
  }

  // --- Array fields ---
  appendArrayField(fd, "educations", values.educations, [
    "level",
    "name",
    "study_area",
    "accreditation",
    "faculty",
    "major",
    "year_of_graduation",
    "description",
    "degree_document",
    "study_assignment_letter",
    "academic_title_letter",
  ]);

  appendArrayField(fd, "families", values.families, [
    "card_number",
    "name",
    "id_number",
    "gender",
    "religion",
    "place_of_birth",
    "date_of_birth",
    "name_of_father",
    "name_of_mother",
    "relationship_status",
    "education",
    "occupation",
    "occupation_description",
    "marital_status",
    "marriage_other_notes",
    "mobile_phone",
    "sequence_number",
  ]);

  appendArrayField(fd, "leaves", values.leaves, [
    "start_date",
    "end_date",
    "type",
    "number",
    "description",
    "letter",
  ]);

  appendArrayField(fd, "notes", values.notes, ["description"]);

  appendArrayField(fd, "assessments", values.assessments, [
    "event_date",
    "point",
    "organizer",
    "assessment_document",
  ]);

  appendArrayField(fd, "competencies", values.competencies, [
    "event_date",
    "point",
    "organizer",
    "competency_document",
  ]);

  appendArrayField(fd, "talents", values.talents, [
    "event_date",
    "point",
    "organizer",
    "talent_document",
  ]);

  return fd;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const FILE_KEYS = new Set([
  "degree_document",
  "study_assignment_letter",
  "academic_title_letter",
  "letter",
  "assessment_document",
  "competency_document",
  "talent_document",
]);

function appendArrayField(
  fd: FormData,
  fieldName: string,
  items: Record<string, unknown>[] | undefined,
  keys: string[],
): void {
  if (!items || items.length === 0) return;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    for (const key of keys) {
      const value = item[key];
      if (value === undefined || value === null || value === "") continue;

      const formKey = `${fieldName}[${i}][${key}]`;

      if (FILE_KEYS.has(key) && value instanceof File) {
        fd.append(formKey, value);
      } else {
        fd.append(formKey, String(value));
      }
    }
  }
}
