import {
  AwardIcon,
  CalendarCheckIcon,
  ClipboardCheckIcon,
  GraduationCapIcon,
  IdCardIcon,
  MedalIcon,
  NotebookPenIcon,
  UsersIcon,
} from "lucide-react";

import {
  type EmployeeFormField,
  type EmployeeFormOption,
  type EmployeeFormSection,
  type EmployeeType,
} from "@/types/employee-form";

export const EMPLOYEE_TYPE = {
  ASN: "asn",
  NON_ASN: "non-asn-perbantuan",
  OUTSOURCING: "outsourcing",
} as const;

export const EMPLOYEE_TYPE_OPTIONS: EmployeeFormOption[] = [
  { label: "ASN", value: 1 },
  { label: "Non ASN", value: 2 },
  { label: "Outsourcing", value: 3 },
];

export const GENDER_OPTIONS: EmployeeFormOption[] = [
  { label: "Laki-laki", value: 1 },
  { label: "Perempuan", value: 0 },
];

export const STATUS_OPTIONS: EmployeeFormOption[] = [
  { label: "Aktif", value: 1 },
  { label: "Tidak Aktif", value: 0 },
];

export const YES_NO_OPTIONS: EmployeeFormOption[] = [
  { label: "Ya", value: 1 },
  { label: "Tidak", value: 0 },
];

export const RELIGION_OPTIONS: EmployeeFormOption[] = [
  { label: "Islam", value: 1 },
  { label: "Kristen", value: 2 },
  { label: "Katolik", value: 3 },
  { label: "Hindu", value: 4 },
  { label: "Buddha", value: 5 },
  { label: "Konghucu", value: 6 },
];

export const MARITAL_STATUS_OPTIONS: EmployeeFormOption[] = [
  { label: "Belum Menikah", value: 1 },
  { label: "Menikah", value: 2 },
  { label: "Cerai Hidup", value: 3 },
  { label: "Cerai Mati", value: 4 },
  { label: "Lainnya", value: 5 },
];

export const EDUCATION_LEVEL_OPTIONS: EmployeeFormOption[] = [
  { label: "SD/Sederajat", value: 1 },
  { label: "SLTP/Sederajat", value: 2 },
  { label: "SLTA/Sederajat", value: 3 },
  { label: "Diploma I/II", value: 4 },
  { label: "Akademi/Diploma III/Sarjana Muda", value: 5 },
  { label: "Diploma IV/Strata I", value: 6 },
  { label: "Strata II", value: 7 },
  { label: "Strata III", value: 8 },
];

export const FAMILY_EDUCATION_OPTIONS: EmployeeFormOption[] = [
  { label: "Tidak/Belum Sekolah", value: 1 },
  { label: "Belum Tamat SD/Sederajat", value: 2 },
  { label: "Tamat SD/Sederajat", value: 3 },
  { label: "SLTP/Sederajat", value: 4 },
  { label: "SLTA/Sederajat", value: 5 },
  { label: "Diploma I/II", value: 6 },
  { label: "Akademi/Diploma III/Sarjana Muda", value: 7 },
  { label: "Diploma IV/Strata I", value: 8 },
  { label: "Strata II", value: 9 },
  { label: "Strata III", value: 10 },
];

export const EMPLOYMENT_STATUS_OPTIONS: EmployeeFormOption[] = [
  { label: "Aktif", value: 1 },
  { label: "Cuti", value: 6 },
  { label: "Tugas Belajar", value: 10 },
  { label: "Tidak Aktif", value: 0 },
];

export const RESIDENCE_OPTIONS: EmployeeFormOption[] = [
  { label: "Komplek A", value: 1 },
  { label: "Komplek B", value: 2 },
  { label: "Komplek C", value: 3 },
  { label: "Non Komplek", value: 4 },
];

export const STUDY_AREA_OPTIONS: EmployeeFormOption[] = [
  { label: "Dalam Negeri", value: 1 },
  { label: "Luar Negeri", value: 2 },
];

export const FAMILY_RELATIONSHIP_OPTIONS: EmployeeFormOption[] = [
  { label: "Kepala Keluarga", value: 1 },
  { label: "Suami", value: 2 },
  { label: "Istri", value: 3 },
  { label: "Anak", value: 4 },
  { label: "Menantu", value: 5 },
  { label: "Cucu", value: 6 },
  { label: "Orang Tua", value: 7 },
  { label: "Mertua", value: 8 },
  { label: "Famili Lainnya", value: 9 },
  { label: "Pembantu", value: 10 },
  { label: "Lainnya", value: 11 },
];

export const LEAVE_TYPE_OPTIONS: EmployeeFormOption[] = [
  { label: "Cuti di luar Tanggungan Negara", value: 1 },
  { label: "Cuti Sakit", value: 2 },
  { label: "Cuti Besar", value: 3 },
  { label: "Cuti Bersalin", value: 4 },
  { label: "Cuti Belajar Luar Negeri", value: 5 },
  { label: "Cuti Tahunan Luar Negeri", value: 6 },
];

export const ASSESSMENT_POINT_OPTIONS: EmployeeFormOption[] = [
  { label: "Kurang Memenuhi Syarat", value: 1 },
  { label: "Masih Memenuhi Syarat", value: 2 },
  { label: "Memenuhi Syarat", value: 3 },
];

export const COMPETENCY_POINT_OPTIONS: EmployeeFormOption[] = [
  { label: "Lulus", value: 1 },
  { label: "Tidak Lulus", value: 2 },
];

export const TALENT_POINT_OPTIONS: EmployeeFormOption[] = Array.from(
  { length: 9 },
  (_, index) => ({
    label: `Kotak ${index + 1}`,
    value: index + 1,
  }),
);

export const YEAR_OPTIONS: EmployeeFormOption[] = Array.from(
  { length: 70 },
  (_, index) => {
    const year = new Date().getFullYear() - index;

    return {
      label: String(year),
      value: String(year),
    };
  },
);

export const ECHELON_OPTIONS: EmployeeFormOption[] = [
  { label: "II.a", value: 1 },
  { label: "II.b", value: 2 },
  { label: "III.a", value: 3 },
  { label: "III.b", value: 4 },
  { label: "IV.a", value: 5 },
  { label: "IV.b", value: 6 },
];

export const fileImageAccept = ".png,.jpg,.jpeg";
export const fileDocumentAccept = ".png,.jpg,.jpeg,.pdf";

interface EmployeeSectionLookups {
  employmentTypes: EmployeeFormOption[];
  positions: EmployeeFormOption[];
  grades: EmployeeFormOption[];
  institutions: EmployeeFormOption[];
}

function dataPegawaiFields(
  type: EmployeeType,
  lookups: EmployeeSectionLookups,
): EmployeeFormField[] {
  const isAsn = type === EMPLOYEE_TYPE.ASN;
  const isNonAsn = type === EMPLOYEE_TYPE.NON_ASN;
  const isOutsourcing = type === EMPLOYEE_TYPE.OUTSOURCING;
  const employmentTypeLabel = isOutsourcing
    ? "Jenis Outsourcing"
    : isNonAsn
      ? "Jenis Perbantuan"
      : "Jenis Pegawai";
  const startDateLabel = isAsn
    ? "TMT CPNS"
    : isNonAsn
      ? "Tanggal Mulai Bekerja di Sekretariat Wakil Presiden"
      : "Tanggal Mulai Bekerja";

  return [
    {
      name: "photo_profile",
      label: "Foto Profil",
      type: "file",
      accept: fileImageAccept,
      description: "Format PNG/JPG, rekomendasi 350x500, maksimal 2MB.",
    },
    { name: "name", label: "Nama", type: "text", required: true },
    ...(!isOutsourcing
      ? ([
          { name: "title_prefix", label: "Nama Gelar Depan", type: "text" },
          {
            name: "title_suffix",
            label: "Nama Gelar Belakang",
            type: "text",
          },
        ] satisfies EmployeeFormField[])
      : []),
    { name: "employee_id_number", label: "NIP", type: "text", required: true },
    ...(!isOutsourcing
      ? ([
          { name: "employee_registration_number", label: "NRP", type: "text" },
        ] satisfies EmployeeFormField[])
      : []),
    {
      name: "place_of_birth",
      label: "Tempat Lahir",
      type: "text",
      required: true,
    },
    {
      name: "date_of_birth",
      label: "Tanggal Lahir",
      type: "date",
      required: true,
    },
    {
      name: "religion",
      label: "Agama",
      type: "select",
      required: true,
      options: RELIGION_OPTIONS,
    },
    {
      name: "gender",
      label: "Jenis Kelamin",
      type: "select",
      required: true,
      options: GENDER_OPTIONS,
    },
    {
      name: "marital_status",
      label: "Status Perkawinan",
      type: "select",
      options: MARITAL_STATUS_OPTIONS,
    },
    ...(isAsn
      ? ([
          { name: "marriage_date", label: "Tanggal Perkawinan", type: "date" },
          {
            name: "marriage_description",
            label: "Keterangan Perkawinan",
            type: "text",
          },
        ] satisfies EmployeeFormField[])
      : []),
    {
      name: "employment_type_id",
      label: employmentTypeLabel,
      type: "select",
      required: true,
      options: lookups.employmentTypes,
    },
    {
      name: "cpns_effective_date",
      label: startDateLabel,
      type: "date",
      required: isAsn,
    },
    ...(isAsn
      ? ([
          { name: "pns_effective_date", label: "TMT PNS", type: "date" },
        ] satisfies EmployeeFormField[])
      : []),
    {
      name: "position_id",
      label: "Jabatan",
      type: "select",
      required: true,
      options: lookups.positions,
    },
    {
      name: "position_effective_date",
      label: "TMT Jabatan",
      type: "date",
      required: true,
    },
    ...(!isOutsourcing
      ? ([
          {
            name: "grade_id",
            label: "Pangkat / Golongan",
            type: "select",
            required: isAsn,
            options: lookups.grades,
          },
          {
            name: "grade_effective_date",
            label: "TMT Pangkat / Golongan",
            type: "date",
            required: isAsn,
          },
          {
            name: "echelon_id",
            label: "Eselon",
            type: "select",
            options: ECHELON_OPTIONS,
          },
          { name: "echelon_effective_date", label: "TMT Eselon", type: "date" },
          {
            name: "institution_id",
            label: "Instansi Induk",
            type: "select",
            options: lookups.institutions,
          },
        ] satisfies EmployeeFormField[])
      : []),
    ...(isAsn
      ? ([
          {
            name: "overall_work_years",
            label: "Masa Kerja Keseluruhan - Jumlah Tahun",
            type: "number",
          },
          {
            name: "overall_work_months",
            label: "Masa Kerja Keseluruhan - Jumlah Bulan",
            type: "number",
          },
          {
            name: "grade_work_years",
            label: "Masa Kerja Golongan - Jumlah Tahun",
            type: "number",
          },
          {
            name: "grade_work_months",
            label: "Masa Kerja Golongan - Jumlah Bulan",
            type: "number",
          },
        ] satisfies EmployeeFormField[])
      : []),
    {
      name: "education_level",
      label: "Tingkat Pendidikan Akhir",
      type: "select",
      required: true,
      options: EDUCATION_LEVEL_OPTIONS,
    },
    {
      name: "education_name",
      label: "Nama Sekolah/Universitas",
      type: "text",
    },
    {
      name: "education_year",
      label: "Tahun Lulus",
      type: "select",
      options: YEAR_OPTIONS,
    },
    ...(isAsn
      ? ([
          { name: "employee_id_card_number", label: "No. Karpeg", type: "text" },
        ] satisfies EmployeeFormField[])
      : []),
    ...(!isOutsourcing
      ? ([
          {
            name: "employee_id_card",
            label: "SK Pengangkatan",
            type: "file",
            accept: fileDocumentAccept,
          },
        ] satisfies EmployeeFormField[])
      : []),
    ...(isAsn
      ? ([
          {
            name: "karisu_number",
            label: "No. Kartu Istri / Kartu Suami",
            type: "text",
          },
        ] satisfies EmployeeFormField[])
      : []),
    { name: "id_tax", label: "NPWP", type: "text" },
    {
      name: "employment_status",
      label: "Status Pegawai",
      type: "select",
      required: true,
      options: EMPLOYMENT_STATUS_OPTIONS,
    },
    { name: "family_registration_number", label: "No. KK", type: "text" },
    { name: "id_number", label: "No NIK", type: "text", required: true },
    ...(isAsn
      ? ([
          {
            name: "residence_id",
            label: "Komplek",
            type: "select",
            options: RESIDENCE_OPTIONS,
          },
        ] satisfies EmployeeFormField[])
      : []),
    {
      name: "current_address",
      label: "Alamat Tempat Tinggal Saat Ini",
      type: "textarea",
      wide: true,
    },
    {
      name: "residence_description",
      label: "Alamat sesuai KTP",
      type: "textarea",
      wide: true,
    },
    { name: "home_phone_number", label: "No. Telepon Rumah", type: "phone" },
    { name: "mobile_phone", label: "No. HP", type: "phone" },
    {
      name: "office_address",
      label: "Alamat Kantor",
      type: "textarea",
      wide: true,
    },
    { name: "office_phone_number", label: "No. Telepon Kantor", type: "phone" },
    { name: "email", label: "Email", type: "email", required: isAsn },
    ...(!isOutsourcing
      ? ([
          {
            name: "office_email",
            label: "Email Dinas",
            type: "email",
            required: isAsn,
          },
        ] satisfies EmployeeFormField[])
      : []),
    ...(!isAsn
      ? ([
          {
            name: "description",
            label: "Keterangan",
            type: "textarea",
            wide: true,
          },
        ] satisfies EmployeeFormField[])
      : []),
    {
      name: "emergency_contact",
      label: "Kontak Darurat",
      type: "text",
      required: true,
      placeholder: "Nama, nomor handphone, hubungan",
      wide: true,
    },
    {
      name: "type",
      label: "Tipe",
      type: "select",
      required: true,
      options: EMPLOYEE_TYPE_OPTIONS,
    },
  ];
}

const educationFields: EmployeeFormField[] = [
  {
    name: "level",
    label: "Tingkat",
    type: "select",
    options: EDUCATION_LEVEL_OPTIONS,
  },
  { name: "name", label: "Nama Sekolah/Universitas", type: "text" },
  {
    name: "study_area",
    label: "Wilayah",
    type: "select",
    options: STUDY_AREA_OPTIONS,
  },
  { name: "accreditation", label: "Akreditasi", type: "text" },
  { name: "faculty", label: "Fakultas", type: "text" },
  { name: "major", label: "Jurusan", type: "text" },
  {
    name: "year_of_graduation",
    label: "Tahun Lulus",
    type: "select",
    options: YEAR_OPTIONS,
  },
  {
    name: "description",
    label: "Keterangan Sekolah",
    type: "textarea",
    wide: true,
  },
  {
    name: "degree_document",
    label: "Ijazah",
    type: "file",
    accept: fileDocumentAccept,
  },
  {
    name: "study_assignment_letter",
    label: "Surat Keterangan Tugas Belajar",
    type: "file",
    accept: fileDocumentAccept,
  },
  {
    name: "academic_title_letter",
    label: "Surat Keputusan Pencantuman Gelar",
    type: "file",
    accept: fileDocumentAccept,
  },
];

const familyFields: EmployeeFormField[] = [
  { name: "card_number", label: "No Kartu Keluarga", type: "text" },
  { name: "name", label: "Nama Anggota Keluarga", type: "text" },
  { name: "id_number", label: "No NIK", type: "text" },
  {
    name: "gender",
    label: "Jenis Kelamin",
    type: "select",
    options: GENDER_OPTIONS,
  },
  {
    name: "religion",
    label: "Agama",
    type: "select",
    options: RELIGION_OPTIONS,
  },
  { name: "place_of_birth", label: "Tempat Lahir", type: "text" },
  { name: "date_of_birth", label: "Tanggal Lahir", type: "date" },
  { name: "name_of_father", label: "Nama Bapak", type: "text" },
  { name: "name_of_mother", label: "Nama Ibu", type: "text" },
  {
    name: "relationship_status",
    label: "Hubungan Keluarga",
    type: "select",
    options: FAMILY_RELATIONSHIP_OPTIONS,
  },
  {
    name: "education",
    label: "Pendidikan",
    type: "select",
    options: FAMILY_EDUCATION_OPTIONS,
  },
  { name: "occupation", label: "Jenis Pekerjaan", type: "text" },
  {
    name: "occupation_description",
    label: "Keterangan Pekerjaan",
    type: "text",
  },
  {
    name: "marital_status",
    label: "Status Perkawinan",
    type: "select",
    options: MARITAL_STATUS_OPTIONS,
  },
  {
    name: "marriage_other_notes",
    label: "Keterangan Lainnya",
    type: "textarea",
    wide: true,
  },
  { name: "mobile_phone", label: "No. HP", type: "phone" },
  { name: "sequence_number", label: "Urut Keluarga", type: "number" },
];

const leaveFields: EmployeeFormField[] = [
  { name: "start_date", label: "Periode Mulai", type: "date" },
  { name: "end_date", label: "Periode Selesai", type: "date" },
  {
    name: "type",
    label: "Jenis Cuti",
    type: "select",
    options: LEAVE_TYPE_OPTIONS,
  },
  { name: "number", label: "No. Cuti", type: "text" },
  { name: "description", label: "Keterangan", type: "textarea", wide: true },
  {
    name: "letter",
    label: "Surat Cuti",
    type: "file",
    accept: fileDocumentAccept,
  },
];

const noteFields: EmployeeFormField[] = [
  { name: "description", label: "Catatan", type: "textarea", wide: true },
];

function resultFields(
  documentName: string,
  options: EmployeeFormOption[],
): EmployeeFormField[] {
  return [
    { name: "event_date", label: "Tanggal", type: "date" },
    { name: "point", label: "Hasil", type: "select", options },
    { name: "organizer", label: "Penyelenggara", type: "text" },
    {
      name: documentName,
      label: "File Pendukung",
      type: "file",
      accept: fileDocumentAccept,
    },
  ];
}

export function getEmployeeFormSections(
  type: EmployeeType,
  lookups: EmployeeSectionLookups,
): EmployeeFormSection[] {
  const dataSection: EmployeeFormSection = {
    id: "data-pegawai",
    title: "Data Pegawai",
    description: "Identitas, status kepegawaian, pendidikan akhir, dan kontak.",
    icon: IdCardIcon,
    accent: "bg-teal-50 text-teal-700 ring-teal-200",
    fields: dataPegawaiFields(type, lookups),
  };

  const educationSection: EmployeeFormSection = {
    id: "riwayat-pendidikan",
    title: "Riwayat Pendidikan",
    description: "Data pendidikan formal dan dokumen pendukung gelar.",
    icon: GraduationCapIcon,
    accent: "bg-sky-50 text-sky-700 ring-sky-200",
    repeatable: { name: "educations", addLabel: "Tambah data Pendidikan" },
    fields: educationFields,
  };

  const familySection: EmployeeFormSection = {
    id: "keluarga",
    title: "Keluarga",
    description: "Anggota keluarga, relasi, pekerjaan, dan kontak.",
    icon: UsersIcon,
    accent: "bg-rose-50 text-rose-700 ring-rose-200",
    repeatable: { name: "families", addLabel: "Tambah data Keluarga" },
    fields: familyFields,
  };

  const asnSections: EmployeeFormSection[] = [
    dataSection,
    educationSection,
    familySection,
    {
      id: "cuti",
      title: "Cuti",
      description: "Periode, jenis cuti, nomor surat, dan lampiran.",
      icon: CalendarCheckIcon,
      accent: "bg-amber-50 text-amber-700 ring-amber-200",
      repeatable: { name: "leaves", addLabel: "Tambah data Cuti" },
      fields: leaveFields,
    },
    {
      id: "catatan",
      title: "Catatan",
      description: "Catatan administratif tambahan untuk pegawai.",
      icon: NotebookPenIcon,
      accent: "bg-violet-50 text-violet-700 ring-violet-200",
      repeatable: { name: "notes", addLabel: "Tambah data Catatan" },
      fields: noteFields,
    },
    {
      id: "hasil-assessment",
      title: "Hasil Assessment",
      description: "Riwayat assessment dan dokumen pendukung.",
      icon: ClipboardCheckIcon,
      accent: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      repeatable: {
        name: "assessments",
        addLabel: "Tambah data Hasil Assessment",
      },
      fields: resultFields("assessment_document", ASSESSMENT_POINT_OPTIONS),
    },
    {
      id: "hasil-uji-kompetensi",
      title: "Hasil Uji Kompetensi",
      description: "Tanggal uji, hasil, penyelenggara, dan lampiran.",
      icon: MedalIcon,
      accent: "bg-orange-50 text-orange-700 ring-orange-200",
      repeatable: {
        name: "competencies",
        addLabel: "Tambah data Hasil Uji Kompetensi",
      },
      fields: resultFields("competency_document", COMPETENCY_POINT_OPTIONS),
    },
    {
      id: "hasil-talent-pool",
      title: "Hasil Talent Pool",
      description: "Pemetaan talent pool beserta bukti pendukung.",
      icon: AwardIcon,
      accent: "bg-indigo-50 text-indigo-700 ring-indigo-200",
      repeatable: {
        name: "talents",
        addLabel: "Tambah data Hasil Talent Pool",
      },
      fields: resultFields("talent_document", TALENT_POINT_OPTIONS),
    },
  ];

  if (type === EMPLOYEE_TYPE.ASN) return asnSections;
  if (type === EMPLOYEE_TYPE.OUTSOURCING) {
    return [dataSection, educationSection, familySection];
  }

  return [dataSection];
}
