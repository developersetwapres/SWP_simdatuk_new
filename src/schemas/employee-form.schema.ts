import { z } from "zod";

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

  photo_profile: z.any().optional(),

  employee_type: z.string().min(1),

  employee_id_number: z.string().optional(),

  employee_registration_number: z.string().optional(),

  title_prefix: z.string().optional(),

  name: z.string().min(1, "Nama wajib diisi"),

  title_suffix: z.string().optional(),

  gender: z.coerce.number().optional(),

  birth_place: z.string().optional(),

  birth_date: z.string().optional(),

  religion_id: z.coerce.number().optional(),

  marital_status: z.string().optional(),

  email: z.string().email().optional().or(z.literal("")),

  phone: z.string().optional(),

  address: z.string().optional(),

  province_id: z.coerce.number().optional(),

  city_id: z.coerce.number().optional(),

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
});

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
