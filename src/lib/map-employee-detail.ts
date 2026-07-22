import { EMPLOYEE_MODULES } from "@/constants/employee";
import type { EmployeeModule } from "@/constants/employee";
import type { EmployeeFormValues } from "@/schemas/employee-form.schema";

const repeatableAliases: Record<string, string[]> = {
  assessments: ["assessments", "employee_assessments", "assessment_results"],
  competencies: ["competencies", "employee_competencies", "competency_results"],
  educations: ["educations", "employee_educations", "education_histories"],
  families: ["families", "employee_families", "family_members"],
  leaves: ["leaves", "employee_leaves", "leave_histories"],
  notes: ["notes", "employee_notes"],
  talents: ["talents", "employee_talents", "talent_results"],
};

const fieldAliases: Record<string, string[]> = {
  echelon_id: ["echelon_id", "echelon", "echelon_name"],
  employee_id_number: ["employee_id_number", "nip"],
  employee_registration_number: ["employee_registration_number", "nrp"],
  employment_type_id: [
    "employment_type_id",
    "employment_type",
    "employment_type_name",
  ],
  grade_id: ["grade_id", "grade", "grade_name"],
  institution_id: ["institution_id", "institution", "institution_name"],
  position_id: ["position_id", "position", "position_name", "position_merged"],
  residence_id: ["residence_id", "residence", "residence_name"],
};

const scalarFields: Array<keyof EmployeeFormValues> = [
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

export function mapEmployeeDetailToFormValues(
  source: Record<string, unknown> | null | undefined,
  type: EmployeeModule,
): Partial<EmployeeFormValues> {
  if (!source) return {};

  const values: Partial<EmployeeFormValues> = {
    type: EMPLOYEE_MODULES[type].type,
    delete_employee_id_card: false,
    delete_photo_profile: false,
  };

  for (const field of scalarFields) {
    const raw = resolveFieldValue(source, field as string);
    if (raw === undefined) continue;

    values[field] = normalizeFieldValue(field as string, raw) as never;
  }

  values.educations = mapRepeatableField(source, "educations");
  values.families = mapRepeatableField(source, "families");
  values.leaves = mapRepeatableField(source, "leaves");
  values.notes = mapRepeatableField(source, "notes");
  values.assessments = mapRepeatableField(source, "assessments");
  values.competencies = mapRepeatableField(source, "competencies");
  values.talents = mapRepeatableField(source, "talents");

  return values;
}

function mapRepeatableField(
  record: Record<string, unknown>,
  name:
    | "assessments"
    | "competencies"
    | "educations"
    | "families"
    | "leaves"
    | "notes"
    | "talents",
): Record<string, unknown>[] {
  const aliases = repeatableAliases[name] ?? [name];

  for (const alias of aliases) {
    const value = record[alias];
    if (Array.isArray(value)) {
      const items = value
        .filter(isRecord)
        .map((item) => normalizeRepeatableItem(item));

      return items.length > 0 ? items : [emptyRepeatableItem(name)];
    }
  }

  return [emptyRepeatableItem(name)];
}

function normalizeRepeatableItem(
  item: Record<string, unknown>,
): Record<string, unknown> {
  const normalized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(item)) {
    if (value === undefined || value === null || value === "") continue;

    normalized[key] = normalizeFieldValue(key, value);
  }

  return normalized;
}

function emptyRepeatableItem(
  name:
    | "assessments"
    | "competencies"
    | "educations"
    | "families"
    | "leaves"
    | "notes"
    | "talents",
): Record<string, unknown> {
  switch (name) {
    case "educations":
      return {
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
    case "families":
      return {
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
    case "leaves":
      return {
        start_date: "",
        end_date: "",
        type: undefined,
        number: "",
        description: "",
        letter: undefined,
      };
    case "notes":
      return {
        description: "",
      };
    case "assessments":
      return {
        event_date: "",
        point: undefined,
        organizer: "",
        assessment_document: undefined,
      };
    case "competencies":
      return {
        event_date: "",
        point: undefined,
        organizer: "",
        competency_document: undefined,
      };
    case "talents":
      return {
        event_date: "",
        point: undefined,
        organizer: "",
        talent_document: undefined,
      };
    default:
      return {};
  }
}

function resolveFieldValue(record: Record<string, unknown>, name: string) {
  const aliases = fieldAliases[name] ?? [name];

  for (const alias of aliases) {
    const value = getNestedValue(record, alias);
    if (hasDisplayValue(value)) return value;
  }

  return undefined;
}

function getNestedValue(record: Record<string, unknown>, key: string) {
  const parts = key.split(".");
  let current: unknown = record;

  for (const part of parts) {
    if (
      typeof current !== "object" ||
      current === null ||
      !(part in (current as Record<string, unknown>))
    ) {
      return undefined;
    }

    current = (current as Record<string, unknown>)[part];
  }

  return current;
}

function normalizeFieldValue(key: string, value: unknown) {
  if (value === undefined || value === null) return undefined;

  if (isRecord(value)) {
    if ("id" in value && value.id !== undefined && value.id !== null) {
      return value.id;
    }

    if ("value" in value && value.value !== undefined && value.value !== null) {
      return value.value;
    }

    return undefined;
  }

  if (Array.isArray(value)) return undefined;

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return undefined;

    if (isDateField(key)) {
      return normalizeDateValue(trimmed);
    }

    return trimmed;
  }

  return value;
}

function normalizeDateValue(value: string) {
  const trimmed = value.trim();
  const dateMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (dateMatch) {
    return `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`;
  }

  const shortMatch = trimmed.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (shortMatch) {
    return `${shortMatch[3]}-${shortMatch[2]}-${shortMatch[1]}`;
  }

  return trimmed;
}

function isDateField(key: string) {
  return (
    key.endsWith("_date") ||
    key === "date_of_birth" ||
    key === "marriage_date" ||
    key === "quit_date"
  );
}

function hasDisplayValue(value: unknown) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
