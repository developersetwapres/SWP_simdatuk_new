import { z } from "zod";

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
  /*                                Kepegawaian                                 */
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
  /*                                Pendidikan                                  */
  /* -------------------------------------------------------------------------- */

  education_level_id: z.coerce.number().optional(),

  education_name: z.string().optional(),

  major: z.string().optional(),

  graduation_year: z.coerce.number().optional(),

  institution_name: z.string().optional(),

  /* -------------------------------------------------------------------------- */
  /*                                  Keluarga                                  */
  /* -------------------------------------------------------------------------- */

  spouse_name: z.string().optional(),

  spouse_birth_date: z.string().optional(),

  children: z.array(z.any()).optional(),

  /* -------------------------------------------------------------------------- */
  /*                               Riwayat Cuti                                 */
  /* -------------------------------------------------------------------------- */

  leaves: z.array(z.any()).optional(),

  /* -------------------------------------------------------------------------- */
  /*                               Assessment                                   */
  /* -------------------------------------------------------------------------- */

  assessments: z.array(z.any()).optional(),

  /* -------------------------------------------------------------------------- */
  /*                               Kompetensi                                   */
  /* -------------------------------------------------------------------------- */

  competencies: z.array(z.any()).optional(),

  /* -------------------------------------------------------------------------- */
  /*                                  Talenta                                   */
  /* -------------------------------------------------------------------------- */

  talents: z.array(z.any()).optional(),

  /* -------------------------------------------------------------------------- */
  /*                                  Catatan                                   */
  /* -------------------------------------------------------------------------- */

  notes: z.string().optional(),
});

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
