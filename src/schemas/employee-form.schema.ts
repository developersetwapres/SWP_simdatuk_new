import { z } from "zod";

<<<<<<< HEAD
const emptyToUndefined = (value: unknown) => (value === "" ? undefined : value);
=======
const educationSchema = z.object({
  education_level_id: z.coerce.number().optional(),
  education_name: z.string().optional(),
  institution_name: z.string().optional(),
  major: z.string().optional(),
  graduation_year: z.coerce.number().optional(),
  diploma_file: z.any().optional(),
});

const familySchema = z.object({
  name: z.string().optional(),
  relationship: z.string().optional(),
  gender: z.coerce.number().optional(),
  birth_place: z.string().optional(),
  birth_date: z.string().optional(),
  education: z.string().optional(),
  occupation: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
});

const leaveSchema = z.object({
  leave_type: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  letter_number: z.string().optional(),
  description: z.string().optional(),
  attachment: z.any().optional(),
});

const assessmentSchema = z.object({
  assessment_date: z.string().optional(),
  organizer: z.string().optional(),
  result: z.string().optional(),
  attachment: z.any().optional(),
});

const competencySchema = z.object({
  competency_date: z.string().optional(),
  organizer: z.string().optional(),
  result: z.string().optional(),
  attachment: z.any().optional(),
});

const talentSchema = z.object({
  talent_date: z.string().optional(),
  organizer: z.string().optional(),
  result: z.string().optional(),
  attachment: z.any().optional(),
});

const noteSchema = z.object({
  note: z.string().optional(),
});

export const employeeFormSchema = z.object({
  /* -------------------------------------------------------------------------- */
  /*                               Data Pribadi                                 */
  /* -------------------------------------------------------------------------- */
>>>>>>> c0c96133109f2c2e4835cce1b63ffcc2ab4e7580

const optionalString = (max?: number) =>
  z.preprocess(
    emptyToUndefined,
    max ? z.string().max(max).optional() : z.string().optional(),
  );

const requiredString = (message: string, max = 160) =>
  z.string().min(1, message).max(max);

const optionalNumber = () =>
  z.preprocess(emptyToUndefined, z.coerce.number().optional());

const requiredNumber = (message: string) =>
  z.preprocess(emptyToUndefined, z.coerce.number({ message }));

const optionalDate = () => optionalString();

const optionalFile = z.any().optional();

const educationSchema = z.object({
  level: optionalNumber(),
  name: optionalString(160),
  study_area: optionalNumber(),
  accreditation: optionalString(30),
  faculty: optionalString(160),
  major: optionalString(160),
  year_of_graduation: optionalString(),
  description: optionalString(160),
  degree_document: optionalFile,
  study_assignment_letter: optionalFile,
  academic_title_letter: optionalFile,
});

const familySchema = z.object({
  card_number: optionalString(21),
  name: optionalString(160),
  id_number: optionalString(16),
  gender: optionalNumber(),
  religion: optionalNumber(),
  place_of_birth: optionalString(160),
  date_of_birth: optionalDate(),
  name_of_father: optionalString(160),
  name_of_mother: optionalString(160),
  relationship_status: optionalNumber(),
  education: optionalNumber(),
  occupation: optionalString(160),
  occupation_description: optionalString(160),
  marital_status: optionalNumber(),
  marriage_other_notes: optionalString(),
  mobile_phone: optionalString(16),
  sequence_number: optionalNumber(),
});

const leaveSchema = z.object({
  start_date: optionalDate(),
  end_date: optionalDate(),
  type: optionalNumber(),
  number: optionalString(160),
  description: optionalString(),
  letter: optionalFile,
});

const noteSchema = z.object({
  description: optionalString(160),
});

const assessmentSchema = z.object({
  event_date: optionalDate(),
  point: optionalNumber(),
  organizer: optionalString(512),
  assessment_document: optionalFile,
});

const competencySchema = z.object({
  event_date: optionalDate(),
  point: optionalNumber(),
  organizer: optionalString(512),
  competency_document: optionalFile,
});

const talentSchema = z.object({
  event_date: optionalDate(),
  point: optionalNumber(),
  organizer: optionalString(512),
  talent_document: optionalFile,
});

const baseEmployeeSchema = z.object({
  photo_profile: optionalFile,
  name: requiredString("Nama wajib diisi"),
  title_prefix: optionalString(160),
  title_suffix: optionalString(160),
  employee_id_number: requiredString("NIP wajib diisi"),
  employee_registration_number: optionalString(),
  place_of_birth: requiredString("Tempat lahir wajib diisi"),
  date_of_birth: requiredString("Tanggal lahir wajib diisi"),
  religion: requiredNumber("Agama wajib dipilih"),
  gender: requiredNumber("Jenis kelamin wajib dipilih"),
  marital_status: optionalNumber(),
  marriage_date: optionalDate(),
  marriage_description: optionalString(),
  employment_type_id: requiredNumber("Jenis pegawai wajib dipilih"),
  cpns_effective_date: optionalDate(),
  pns_effective_date: optionalDate(),
  position_id: optionalNumber(),
  position_effective_date: optionalDate(),
  grade_id: optionalNumber(),
  grade_effective_date: optionalDate(),
  echelon_id: optionalNumber(),
  echelon_effective_date: optionalDate(),
  institution_id: optionalNumber(),
  education_level: requiredNumber("Tingkat pendidikan akhir wajib dipilih"),
  education_name: optionalString(160),
  education_year: optionalString(),
  employee_id_card_number: optionalString(),
  employee_id_card: optionalFile,
  karisu_number: optionalString(),
  id_tax: optionalString(16),
  employment_status: requiredNumber("Status pegawai wajib dipilih"),
  family_registration_number: optionalString(16),
  id_number: requiredString("No NIK wajib diisi", 16),
  residence_id: optionalNumber(),
  residence_description: optionalString(),
  current_address: optionalString(160),
  home_phone_number: optionalString(),
  mobile_phone: optionalString(),
  office_address: optionalString(160),
  office_phone_number: optionalString(),
  email: z.preprocess(
    emptyToUndefined,
    z.string().email("Format email tidak valid").optional(),
  ),
  office_email: z.preprocess(
    emptyToUndefined,
    z.string().email("Format email dinas tidak valid").optional(),
  ),
  emergency_contact: requiredString("Kontak darurat wajib diisi", 512),
  description: optionalString(160),
  type: z.coerce.number().pipe(z.union([z.literal(1), z.literal(2), z.literal(3)])),
  quit_date: optionalDate(),
  educations: z.array(educationSchema).default([]),
  families: z.array(familySchema).default([]),
  leaves: z.array(leaveSchema).default([]),
  notes: z.array(noteSchema).default([]),
  assessments: z.array(assessmentSchema).default([]),
  competencies: z.array(competencySchema).default([]),
  talents: z.array(talentSchema).default([]),
});

export const employeeFormSchema = baseEmployeeSchema.superRefine((value, ctx) => {
  if (value.type === 1) {
    if (!value.cpns_effective_date) {
      ctx.addIssue({
        code: "custom",
        path: ["cpns_effective_date"],
        message: "TMT CPNS wajib diisi",
      });
    }

    if (!value.grade_id) {
      ctx.addIssue({
        code: "custom",
        path: ["grade_id"],
        message: "Pangkat / Golongan wajib dipilih",
      });
    }

    if (!value.grade_effective_date) {
      ctx.addIssue({
        code: "custom",
        path: ["grade_effective_date"],
        message: "TMT Pangkat / Golongan wajib diisi",
      });
    }

<<<<<<< HEAD
    if (!value.office_email) {
      ctx.addIssue({
        code: "custom",
        path: ["office_email"],
        message: "Email dinas wajib diisi",
      });
    }
  }
=======
  district_id: z.coerce.number().optional(),

  village_id: z.coerce.number().optional(),

  postal_code: z.string().optional(),

  /* -------------------------------------------------------------------------- */
  /*                              Kepegawaian                                   */
  /* -------------------------------------------------------------------------- */

  institution_id: z.coerce.number().optional(),

  group_id: z.coerce.number().optional(),

  employment_type_id: z.coerce.number().optional(),

  position_id: z.coerce.number().optional(),

  echelon_id: z.coerce.number().optional(),

  grade_id: z.coerce.number().optional(),

  grade_effective_date: z.string().optional(),

  position_effective_date: z.string().optional(),

  cpns_date: z.string().optional(),

  pns_date: z.string().optional(),

  pppk_date: z.string().optional(),

  retirement_date: z.string().optional(),

  status: z.coerce.number().optional(),

  /* -------------------------------------------------------------------------- */
  /*                           Riwayat Pendidikan                               */
  /* -------------------------------------------------------------------------- */

  educations: z.array(educationSchema).default([]),

  /* -------------------------------------------------------------------------- */
  /*                                Keluarga                                    */
  /* -------------------------------------------------------------------------- */

  families: z.array(familySchema).default([]),

  /* -------------------------------------------------------------------------- */
  /*                                  Cuti                                      */
  /* -------------------------------------------------------------------------- */

  leaves: z.array(leaveSchema).default([]),

  /* -------------------------------------------------------------------------- */
  /*                              Assessment                                    */
  /* -------------------------------------------------------------------------- */

  assessments: z.array(assessmentSchema).default([]),

  /* -------------------------------------------------------------------------- */
  /*                           Uji Kompetensi                                   */
  /* -------------------------------------------------------------------------- */

  competencies: z.array(competencySchema).default([]),

  /* -------------------------------------------------------------------------- */
  /*                              Talent Pool                                   */
  /* -------------------------------------------------------------------------- */

  talents: z.array(talentSchema).default([]),

  /* -------------------------------------------------------------------------- */
  /*                                Catatan                                     */
  /* -------------------------------------------------------------------------- */

  notes: z.array(noteSchema).default([]),
>>>>>>> c0c96133109f2c2e4835cce1b63ffcc2ab4e7580
});

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
