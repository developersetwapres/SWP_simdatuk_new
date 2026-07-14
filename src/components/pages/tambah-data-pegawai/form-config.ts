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

export const fileImageAccept = ".png,.jpg,.jpeg";
export const fileDocumentAccept = ".png,.jpg,.jpeg,.pdf";

export const religionOptions: EmployeeFormOption[] = [
  { label: "Islam", value: 1 },
  { label: "Kristen", value: 2 },
  { label: "Katolik", value: 3 },
  { label: "Hindu", value: 4 },
  { label: "Buddha", value: 5 },
  { label: "Konghucu", value: 6 },
];

export const genderOptions: EmployeeFormOption[] = [
  { label: "Laki-laki", value: 1 },
  { label: "Perempuan", value: 0 },
];

export const maritalStatusOptions: EmployeeFormOption[] = [
  { label: "Belum menikah", value: 1 },
  { label: "Menikah", value: 2 },
  { label: "Cerai hidup", value: 3 },
  { label: "Cerai mati", value: 4 },
  { label: "Lainnya", value: 5 },
];

export const educationLevelOptions: EmployeeFormOption[] = [
  { label: "SD/Sederajat", value: 1 },
  { label: "SLTP/Sederajat", value: 2 },
  { label: "SLTA/Sederajat", value: 3 },
  { label: "Diploma I/II", value: 4 },
  { label: "Akademi/Diploma III/Sarjana Muda", value: 5 },
  { label: "Diploma IV/Strata I", value: 6 },
  { label: "Strata II", value: 7 },
  { label: "Strata III", value: 8 },
];

export const familyEducationOptions: EmployeeFormOption[] = [
  { label: "Tidak/Belum Sekolah", value: 1 },
  { label: "Belum Tamat SD/Sederajat", value: 2 },
  { label: "Tamat SD/Sederajat", value: 3 },
  { label: "SLTP/Sederajat", value: 4 },
  { label: "SLTA/Sederajat", value: 5 },
  { label: "Diploma I/II", value: 6 },
  { label: "Akademi/Diploma III/Sarjana Muda", value: 7 },
  { label: "Diploma IV/Strata I", value: 8 },
  { label: "Strata II", value: 9 },
];

export const employmentStatusOptions: EmployeeFormOption[] = [
  { label: "Aktif", value: 1 },
  { label: "Cuti", value: 6 },
  { label: "Tugas belajar", value: 10 },
  { label: "Tidak aktif", value: 0 },
];

export const residenceOptions: EmployeeFormOption[] = [
  { label: "Komplek A", value: 1 },
  { label: "Komplek B", value: 2 },
  { label: "Komplek C", value: 3 },
  { label: "Non komplek", value: 4 },
];

export const studyAreaOptions: EmployeeFormOption[] = [
  { label: "Dalam Negeri", value: 1 },
  { label: "Luar Negeri", value: 2 },
];

export const familyRelationshipOptions: EmployeeFormOption[] = [
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

export const leaveTypeOptions: EmployeeFormOption[] = [
  { label: "Cuti di luar Tanggungan Negara", value: 1 },
  { label: "Cuti Sakit", value: 2 },
  { label: "Cuti Besar", value: 3 },
  { label: "Cuti Bersalin", value: 4 },
  { label: "Cuti Belajar Luar Negeri", value: 5 },
  { label: "Cuti Tahunan Luar Negeri", value: 6 },
];

export const assessmentPointOptions: EmployeeFormOption[] = [
  { label: "Kurang Memenuhi Syarat", value: 1 },
  { label: "Masih Memenuhi Syarat", value: 2 },
  { label: "Memenuhi Syarat", value: 3 },
];

export const competencyPointOptions: EmployeeFormOption[] = [
  { label: "Lulus", value: 1 },
  { label: "Tidak Lulus", value: 2 },
];

export const talentPointOptions: EmployeeFormOption[] = Array.from(
  { length: 9 },
  (_, index) => ({
    label: `Kotak ${index + 1}`,
    value: index + 1,
  }),
);

export const yearOptions: EmployeeFormOption[] = Array.from(
  { length: 70 },
  (_, index) => {
    const year = new Date().getFullYear() - index;

    return {
      label: String(year),
      value: String(year),
    };
  },
);

export function mapLookupOptions(
  items?: Array<{ id: number; name: string; code?: string }>,
) {
  return (items ?? []).map((item) => ({
    label: item.code ? `${item.name} (${item.code})` : item.name,
    value: item.id,
  }));
}

function dataPegawaiFields(
  type: EmployeeType,
  lookups: {
    employmentTypes: EmployeeFormOption[];
    positions: EmployeeFormOption[];
    grades: EmployeeFormOption[];
    institutions: EmployeeFormOption[];
  },
): EmployeeFormField[] {
  const isAsn = type === "asn";
  const isNonAsn = type === "non-asn-perbantuan";
  const isOutsourcing = type === "outsourcing";
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
      description: "Format PNG atau JPG. Rekomendasi 350x500, maksimal 2MB.",
    },
    { name: "name", label: "Nama", type: "text", required: true },
    ...(!isOutsourcing
      ? [
          { name: "title_prefix", label: "Nama Gelar Depan", type: "text" },
          { name: "title_suffix", label: "Nama Gelar Belakang", type: "text" },
        ]
      : []),
    { name: "employee_id_number", label: "NIP", type: "text", required: true },
    ...(!isOutsourcing
      ? [{ name: "employee_registration_number", label: "NRP", type: "text" }]
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
      options: religionOptions,
    },
    {
      name: "gender",
      label: "Jenis Kelamin",
      type: "select",
      required: true,
      options: genderOptions,
    },
    {
      name: "marital_status",
      label: "Status Perkawinan",
      type: "select",
      options: maritalStatusOptions,
    },
    ...(isAsn
      ? [
          { name: "marriage_date", label: "Tanggal Perkawinan", type: "date" },
          {
            name: "marriage_description",
            label: "Keterangan Perkawinan",
            type: "text",
          },
        ]
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
    ...(isAsn ? [{ name: "pns_effective_date", label: "TMT PNS", type: "date" }] : []),
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
      ? [
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
            options: [],
          },
          { name: "echelon_effective_date", label: "TMT Eselon", type: "date" },
          {
            name: "institution_id",
            label: "Instansi Induk",
            type: "select",
            options: lookups.institutions,
          },
        ]
      : []),
    {
      name: "education_level",
      label: "Tingkat Pendidikan Akhir",
      type: "select",
      required: true,
      options: educationLevelOptions,
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
      options: yearOptions,
    },
    ...(isAsn
      ? [{ name: "employee_id_card_number", label: "No. Karpeg", type: "text" }]
      : []),
    ...(!isOutsourcing
      ? [
          {
            name: "employee_id_card",
            label: "SK Pengangkatan",
            type: "file",
            accept: fileDocumentAccept,
          },
        ]
      : []),
    ...(isAsn
      ? [
          {
            name: "karisu_number",
            label: "No. Kartu Istri / Kartu Suami",
            type: "text",
          },
        ]
      : []),
    { name: "id_tax", label: "NPWP", type: "text" },
    {
      name: "employment_status",
      label: "Status Pegawai",
      type: "select",
      required: true,
      options: employmentStatusOptions,
    },
    { name: "family_registration_number", label: "No. KK", type: "text" },
    { name: "id_number", label: "No NIK", type: "text", required: true },
    ...(isAsn
      ? [
          {
            name: "residence_id",
            label: "Komplek",
            type: "select",
            options: residenceOptions,
          },
        ]
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
      ? [
          {
            name: "office_email",
            label: "Email Dinas",
            type: "email",
            required: isAsn,
          },
        ]
      : []),
    ...(!isAsn
      ? [
          {
            name: "description",
            label: "Keterangan",
            type: "textarea",
            wide: true,
          },
        ]
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
      options: [
        { label: "ASN", value: 1 },
        { label: "Non ASN", value: 2 },
        { label: "Outsourcing", value: 3 },
      ],
    },
  ];
}

const educationFields: EmployeeFormField[] = [
  {
    name: "level",
    label: "Tingkat",
    type: "select",
    options: educationLevelOptions,
  },
  { name: "name", label: "Nama Sekolah/Universitas", type: "text" },
  {
    name: "study_area",
    label: "Wilayah",
    type: "select",
    options: studyAreaOptions,
  },
  { name: "accreditation", label: "Akreditasi", type: "text" },
  { name: "faculty", label: "Fakultas", type: "text" },
  { name: "major", label: "Jurusan", type: "text" },
  {
    name: "year_of_graduation",
    label: "Tahun Lulus",
    type: "select",
    options: yearOptions,
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
    options: genderOptions,
  },
  {
    name: "religion",
    label: "Agama",
    type: "select",
    options: religionOptions,
  },
  { name: "place_of_birth", label: "Tempat Lahir", type: "text" },
  { name: "date_of_birth", label: "Tanggal Lahir", type: "date" },
  { name: "name_of_father", label: "Nama Bapak", type: "text" },
  { name: "name_of_mother", label: "Nama Ibu", type: "text" },
  {
    name: "relationship_status",
    label: "Hubungan Keluarga",
    type: "select",
    options: familyRelationshipOptions,
  },
  {
    name: "education",
    label: "Pendidikan",
    type: "select",
    options: familyEducationOptions,
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
    options: maritalStatusOptions,
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
    options: leaveTypeOptions,
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

function resultFields(documentName: string, options: EmployeeFormOption[]) {
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
  ] satisfies EmployeeFormField[];
}

export function getEmployeeFormSections(
  type: EmployeeType,
  lookups: {
    employmentTypes: EmployeeFormOption[];
    positions: EmployeeFormOption[];
    grades: EmployeeFormOption[];
    institutions: EmployeeFormOption[];
  },
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
      fields: resultFields("assessment_document", assessmentPointOptions),
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
      fields: resultFields("competency_document", competencyPointOptions),
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
      fields: resultFields("talent_document", talentPointOptions),
    },
  ];

  if (type === "asn") return asnSections;
  if (type === "outsourcing") return [dataSection, educationSection, familySection];

  return [dataSection];
}
