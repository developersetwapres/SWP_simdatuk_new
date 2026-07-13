"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import {
  AwardIcon,
  BookOpenIcon,
  BriefcaseBusinessIcon,
  CalendarCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardCheckIcon,
  FilePlus2Icon,
  GraduationCapIcon,
  IdCardIcon,
  MedalIcon,
  NotebookPenIcon,
  PlusIcon,
  SaveIcon,
  SparklesIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import {
  EMPLOYEE_MODULES,
  type EmployeeModule,
} from "@/constants/employee";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FieldType =
  | "date"
  | "email"
  | "file"
  | "number"
  | "phone"
  | "select"
  | "text"
  | "textarea";

interface Option {
  label: string;
  value: string;
}

interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  accept?: string;
  description?: string;
  options?: Option[];
  placeholder?: string;
  wide?: boolean;
  defaultValue?: string;
}

interface FormSection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  fields: FormField[];
  repeatable?: boolean;
  addLabel?: string;
}

interface Props {
  type: EmployeeModule;
}

const agamaOptions = [
  "Islam",
  "Kristen",
  "Katolik",
  "Hindu",
  "Buddha",
  "Konghucu",
].map(toOption);

const genderOptions = ["Laki-laki", "Perempuan"].map(toOption);

const statusPerkawinanOptions = [
  "Belum kawin",
  "Kawin",
  "Cerai hidup",
  "Cerai mati",
].map(toOption);

const jenisPegawaiOptions = ["CPNS", "PNS", "PPPK", "Non ASN", "Outsourcing"].map(
  toOption,
);

const jabatanOptions = [
  "Administrator",
  "Pengawas",
  "Pelaksana",
  "Fungsional Ahli Utama",
  "Fungsional Ahli Madya",
  "Fungsional Ahli Muda",
  "Fungsional Ahli Pertama",
  "Fungsional Terampil",
].map(toOption);

const pangkatOptions = [
  "I/a - Juru Muda",
  "I/b - Juru Muda Tingkat I",
  "I/c - Juru",
  "I/d - Juru Tingkat I",
  "II/a - Pengatur Muda",
  "II/b - Pengatur Muda Tingkat I",
  "II/c - Pengatur",
  "II/d - Pengatur Tingkat I",
  "III/a - Penata Muda",
  "III/b - Penata Muda Tingkat I",
  "III/c - Penata",
  "III/d - Penata Tingkat I",
  "IV/a - Pembina",
  "IV/b - Pembina Tingkat I",
  "IV/c - Pembina Utama Muda",
  "IV/d - Pembina Utama Madya",
  "IV/e - Pembina Utama",
].map(toOption);

const eselonOptions = ["II.a", "II.b", "III.a", "III.b", "IV.a", "IV.b"].map(
  toOption,
);

const pendidikanOptions = [
  "SD",
  "SMP",
  "SMA/SMK",
  "D1",
  "D2",
  "D3",
  "D4",
  "S1",
  "S2",
  "S3",
].map(toOption);

const statusPegawaiOptions = ["Aktif", "Cuti", "Tugas belajar", "Pensiun"].map(
  toOption,
);

const tipePegawaiOptions = [
  { label: "ASN", value: "asn" },
  { label: "Non ASN", value: "non-asn-perbantuan" },
  { label: "Outsourcing", value: "outsourcing" },
];

const tahunOptions = Array.from({ length: 70 }, (_, index) => {
  const year = new Date().getFullYear() - index;

  return {
    label: String(year),
    value: String(year),
  };
});

const wilayahOptions = [
  "Dalam Negeri",
  "Luar Negeri",
  "Aceh",
  "Sumatera Utara",
  "Sumatera Barat",
  "Riau",
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Tengah",
  "DI Yogyakarta",
  "Jawa Timur",
  "Bali",
  "Kalimantan Timur",
  "Sulawesi Selatan",
  "Papua",
].map(toOption);

const hubunganKeluargaOptions = [
  "Suami",
  "Istri",
  "Anak",
  "Ayah",
  "Ibu",
  "Saudara",
].map(toOption);

const jenisCutiOptions = [
  "Cuti tahunan",
  "Cuti besar",
  "Cuti sakit",
  "Cuti melahirkan",
  "Cuti alasan penting",
  "Cuti di luar tanggungan negara",
].map(toOption);

const hasilOptions = [
  "Sangat baik",
  "Baik",
  "Cukup",
  "Perlu pengembangan",
  "Tidak lulus",
].map(toOption);

const komplekOptions = [
  "Komplek A",
  "Komplek B",
  "Komplek C",
  "Non komplek",
].map(toOption);

const instansiOptions = [
  "Pemerintah Kota",
  "Pemerintah Provinsi",
  "Kementerian",
  "Lembaga",
].map(toOption);

const fileImageAccept = ".png,.jpg,.jpeg";
const fileDocumentAccept = ".png,.jpg,.jpeg,.pdf";

function toOption(value: string): Option {
  return {
    label: value,
    value,
  };
}

function getSections(defaultType: EmployeeModule): FormSection[] {
  return [
    {
      id: "data-pegawai",
      title: "Data Pegawai",
      description: "Identitas, status kepegawaian, pendidikan akhir, dan kontak.",
      icon: IdCardIcon,
      accent: "bg-teal-50 text-teal-700 ring-teal-200",
      fields: [
        {
          name: "fotoProfil",
          label: "Foto Profil",
          type: "file",
          accept: fileImageAccept,
          description: "Format PNG atau JPG.",
        },
        { name: "nama", label: "Nama", type: "text", required: true },
        { name: "namaGelarDepan", label: "Nama Gelar Depan", type: "text" },
        {
          name: "namaGelarBelakang",
          label: "Nama Gelar Belakang",
          type: "text",
        },
        { name: "nip", label: "NIP", type: "text", required: true },
        { name: "nrp", label: "NRP", type: "text" },
        {
          name: "tempatLahir",
          label: "Tempat Lahir",
          type: "text",
          required: true,
        },
        {
          name: "tanggalLahir",
          label: "Tanggal Lahir",
          type: "date",
          required: true,
        },
        {
          name: "agama",
          label: "Agama",
          type: "select",
          required: true,
          options: agamaOptions,
        },
        {
          name: "jenisKelamin",
          label: "Jenis Kelamin",
          type: "select",
          required: true,
          options: genderOptions,
        },
        {
          name: "statusPerkawinan",
          label: "Status Perkawinan",
          type: "select",
          options: statusPerkawinanOptions,
        },
        {
          name: "tanggalPerkawinan",
          label: "Tanggal Perkawinan",
          type: "date",
        },
        {
          name: "keteranganPerkawinan",
          label: "Keterangan Perkawinan",
          type: "text",
        },
        {
          name: "jenisPegawai",
          label: "Jenis Pegawai",
          type: "select",
          required: true,
          options: jenisPegawaiOptions,
        },
        { name: "tmtCpns", label: "TMT CPNS", type: "date", required: true },
        { name: "tmtPns", label: "TMT PNS", type: "date" },
        {
          name: "jabatan",
          label: "Jabatan",
          type: "select",
          required: true,
          options: jabatanOptions,
        },
        {
          name: "tmtJabatan",
          label: "TMT Jabatan",
          type: "date",
          required: true,
        },
        {
          name: "pangkatGolongan",
          label: "Pangkat / Golongan",
          type: "select",
          required: true,
          options: pangkatOptions,
        },
        {
          name: "tmtPangkatGolongan",
          label: "TMT Pangkat / Golongan",
          type: "date",
          required: true,
        },
        {
          name: "eselon",
          label: "Eselon",
          type: "select",
          options: eselonOptions,
        },
        { name: "tmtEselon", label: "TMT Eselon", type: "date" },
        {
          name: "masaKerjaKeseluruhanTahun",
          label: "Masa Kerja Keseluruhan - Jumlah Tahun",
          type: "number",
        },
        {
          name: "masaKerjaKeseluruhanBulan",
          label: "Masa Kerja Keseluruhan - Jumlah Bulan",
          type: "number",
        },
        {
          name: "masaKerjaGolonganTahun",
          label: "Masa Kerja Golongan - Jumlah Tahun",
          type: "number",
        },
        {
          name: "masaKerjaGolonganBulan",
          label: "Masa Kerja Golongan - Jumlah Bulan",
          type: "number",
        },
        {
          name: "instansiInduk",
          label: "Instansi Induk",
          type: "select",
          options: instansiOptions,
        },
        {
          name: "tingkatPendidikanAkhir",
          label: "Tingkat Pendidikan Akhir",
          type: "select",
          required: true,
          options: pendidikanOptions,
        },
        {
          name: "namaSekolahUniversitas",
          label: "Nama Sekolah/Universitas",
          type: "text",
        },
        {
          name: "tahunLulus",
          label: "Tahun Lulus",
          type: "select",
          options: tahunOptions,
        },
        { name: "noKarpeg", label: "No. Karpeg", type: "text" },
        {
          name: "skPengangkatan",
          label: "SK Pengangkatan",
          type: "file",
          accept: fileDocumentAccept,
        },
        {
          name: "noKartuIstriSuami",
          label: "No. Kartu Istri / Kartu Suami",
          type: "text",
        },
        { name: "npwp", label: "NPWP", type: "text" },
        {
          name: "statusPegawai",
          label: "Status Pegawai",
          type: "select",
          required: true,
          options: statusPegawaiOptions,
        },
        { name: "noKk", label: "No. KK", type: "text" },
        { name: "noNik", label: "No NIK", type: "text", required: true },
        {
          name: "komplek",
          label: "Komplek",
          type: "select",
          options: komplekOptions,
        },
        {
          name: "alamatSaatIni",
          label: "Alamat Tempat Tinggal Saat Ini",
          type: "textarea",
          wide: true,
        },
        {
          name: "alamatKtp",
          label: "Alamat sesuai KTP",
          type: "textarea",
          wide: true,
        },
        {
          name: "teleponRumah",
          label: "No. Telepon Rumah",
          type: "phone",
        },
        { name: "noHp", label: "No. HP", type: "phone" },
        {
          name: "alamatKantor",
          label: "Alamat Kantor",
          type: "textarea",
          wide: true,
        },
        {
          name: "teleponKantor",
          label: "No. Telepon Kantor",
          type: "phone",
        },
        { name: "email", label: "Email", type: "email", required: true },
        {
          name: "emailDinas",
          label: "Email Dinas",
          type: "email",
          required: true,
        },
        {
          name: "kontakDarurat",
          label: "Kontak Darurat",
          type: "text",
          required: true,
          placeholder: "Nama, nomor handphone, hubungan",
          wide: true,
        },
        {
          name: "tipe",
          label: "Tipe",
          type: "select",
          required: true,
          options: tipePegawaiOptions,
          defaultValue: defaultType,
        },
      ],
    },
    {
      id: "riwayat-pendidikan",
      title: "Riwayat Pendidikan",
      description: "Data pendidikan formal dan dokumen pendukung gelar.",
      icon: GraduationCapIcon,
      accent: "bg-sky-50 text-sky-700 ring-sky-200",
      repeatable: true,
      addLabel: "Tambah data Pendidikan",
      fields: [
        {
          name: "tingkat",
          label: "Tingkat",
          type: "select",
          options: pendidikanOptions,
        },
        {
          name: "namaSekolahUniversitas",
          label: "Nama Sekolah/Universitas",
          type: "text",
        },
        {
          name: "wilayah",
          label: "Wilayah",
          type: "select",
          options: wilayahOptions,
        },
        { name: "akreditasi", label: "Akreditasi", type: "text" },
        { name: "fakultas", label: "Fakultas", type: "text" },
        { name: "jurusan", label: "Jurusan", type: "text" },
        {
          name: "tahunLulus",
          label: "Tahun Lulus",
          type: "select",
          options: tahunOptions,
        },
        {
          name: "keteranganSekolah",
          label: "Keterangan Sekolah",
          type: "textarea",
          wide: true,
        },
        {
          name: "ijazah",
          label: "Ijazah",
          type: "file",
          accept: fileDocumentAccept,
        },
        {
          name: "suratKeteranganTugasBelajar",
          label: "Surat Keterangan Tugas Belajar",
          type: "file",
          accept: fileDocumentAccept,
        },
        {
          name: "suratKeputusanPencantumanGelar",
          label: "Surat Keputusan Pencantuman Gelar",
          type: "file",
          accept: fileDocumentAccept,
        },
      ],
    },
    {
      id: "keluarga",
      title: "Keluarga",
      description: "Anggota keluarga, relasi, pekerjaan, dan kontak.",
      icon: UsersIcon,
      accent: "bg-rose-50 text-rose-700 ring-rose-200",
      repeatable: true,
      addLabel: "Tambah data Keluarga",
      fields: [
        { name: "noKartuKeluarga", label: "No Kartu Keluarga", type: "text" },
        {
          name: "namaAnggotaKeluarga",
          label: "Nama Anggota Keluarga",
          type: "text",
        },
        { name: "noNik", label: "No NIK", type: "text" },
        {
          name: "jenisKelamin",
          label: "Jenis Kelamin",
          type: "select",
          options: genderOptions,
        },
        { name: "agama", label: "Agama", type: "select", options: agamaOptions },
        { name: "tempatLahir", label: "Tempat Lahir", type: "text" },
        { name: "tanggalLahir", label: "Tanggal Lahir", type: "date" },
        { name: "namaBapak", label: "Nama Bapak", type: "text" },
        { name: "namaIbu", label: "Nama Ibu", type: "text" },
        {
          name: "hubunganKeluarga",
          label: "Hubungan Keluarga",
          type: "select",
          options: hubunganKeluargaOptions,
        },
        {
          name: "pendidikan",
          label: "Pendidikan",
          type: "select",
          options: pendidikanOptions,
        },
        { name: "jenisPekerjaan", label: "Jenis Pekerjaan", type: "text" },
        {
          name: "keteranganPekerjaan",
          label: "Keterangan Pekerjaan",
          type: "text",
        },
        {
          name: "statusPerkawinan",
          label: "Status Perkawinan",
          type: "select",
          options: statusPerkawinanOptions,
        },
        {
          name: "keteranganLainnya",
          label: "Keterangan Lainnya",
          type: "textarea",
          wide: true,
        },
        { name: "noHp", label: "No. HP", type: "phone" },
        { name: "urutKeluarga", label: "Urut Keluarga", type: "number" },
      ],
    },
    {
      id: "cuti",
      title: "Cuti",
      description: "Periode, jenis cuti, nomor surat, dan lampiran.",
      icon: CalendarCheckIcon,
      accent: "bg-amber-50 text-amber-700 ring-amber-200",
      repeatable: true,
      addLabel: "Tambah data Cuti",
      fields: [
        { name: "periode", label: "Periode", type: "date" },
        {
          name: "jenisCuti",
          label: "Jenis Cuti",
          type: "select",
          options: jenisCutiOptions,
        },
        { name: "noCuti", label: "No. Cuti", type: "text" },
        {
          name: "keterangan",
          label: "Keterangan",
          type: "textarea",
          wide: true,
        },
        {
          name: "suratCuti",
          label: "Surat Cuti",
          type: "file",
          accept: fileDocumentAccept,
        },
      ],
    },
    {
      id: "catatan",
      title: "Catatan",
      description: "Catatan administratif tambahan untuk pegawai.",
      icon: NotebookPenIcon,
      accent: "bg-violet-50 text-violet-700 ring-violet-200",
      repeatable: true,
      addLabel: "Tambah data Catatan",
      fields: [
        {
          name: "catatan",
          label: "Catatan",
          type: "textarea",
          wide: true,
        },
      ],
    },
    {
      id: "hasil-assessment",
      title: "Hasil Assessment",
      description: "Riwayat assessment dan dokumen pendukung.",
      icon: ClipboardCheckIcon,
      accent: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      repeatable: true,
      addLabel: "Tambah data Hasil Assessment",
      fields: assessmentFields(),
    },
    {
      id: "hasil-uji-kompetensi",
      title: "Hasil Uji Kompetensi",
      description: "Tanggal uji, hasil, penyelenggara, dan lampiran.",
      icon: MedalIcon,
      accent: "bg-orange-50 text-orange-700 ring-orange-200",
      repeatable: true,
      addLabel: "Tambah data Hasil Uji Kompetensi",
      fields: assessmentFields(),
    },
    {
      id: "hasil-talent-pool",
      title: "Hasil Talent Pool",
      description: "Pemetaan talent pool beserta bukti pendukung.",
      icon: AwardIcon,
      accent: "bg-indigo-50 text-indigo-700 ring-indigo-200",
      repeatable: true,
      addLabel: "Tambah data Hasil Talent Pool",
      fields: assessmentFields(),
    },
  ];
}

function assessmentFields(): FormField[] {
  return [
    { name: "tanggal", label: "Tanggal", type: "date" },
    { name: "hasil", label: "Hasil", type: "select", options: hasilOptions },
    { name: "penyelenggara", label: "Penyelenggara", type: "text" },
    {
      name: "filePendukung",
      label: "File Pendukung",
      type: "file",
      accept: fileDocumentAccept,
    },
  ];
}

function getInputType(type: FieldType) {
  if (type === "phone") return "tel";
  if (type === "file") return "file";
  if (type === "textarea" || type === "select") return "text";

  return type;
}

function fileToLogValue(value: FormDataEntryValue) {
  if (!(value instanceof File)) return value;
  if (!value.name) return null;

  return {
    name: value.name,
    size: value.size,
    type: value.type,
  };
}

function toPayload(formData: FormData) {
  return Array.from(formData.entries()).reduce<Record<string, unknown>>(
    (payload, [key, value]) => {
      payload[key] = fileToLogValue(value);

      return payload;
    },
    {},
  );
}

function fieldName(section: FormSection, field: FormField, index?: number) {
  if (section.repeatable) {
    return `${section.id}[${index ?? 0}][${field.name}]`;
  }

  return field.name;
}

function renderField(
  section: FormSection,
  field: FormField,
  isActive: boolean,
  index?: number,
) {
  const id = `${section.id}-${index ?? 0}-${field.name}`;
  const name = fieldName(section, field, index);
  const commonClassName = "h-10 bg-background/80";

  let control: ReactNode;

  if (field.type === "select") {
    control = (
      <Select
        name={name}
        defaultValue={field.defaultValue}
        required={isActive && field.required}
      >
        <SelectTrigger
          id={id}
          className="h-10 w-full bg-background/80 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
        >
          <SelectValue placeholder={`Pilih ${field.label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {(field.options ?? []).map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  } else if (field.type === "textarea") {
    control = (
      <Textarea
        id={id}
        name={name}
        required={isActive && field.required}
        placeholder={field.placeholder}
        rows={4}
        className="bg-background/80"
      />
    );
  } else {
    control = (
      <Input
        id={id}
        name={name}
        type={getInputType(field.type)}
        required={isActive && field.required}
        accept={field.accept}
        placeholder={field.placeholder}
        min={field.type === "number" ? 0 : undefined}
        className={cn(commonClassName, field.type === "file" && "pt-2")}
      />
    );
  }

  return (
    <Field
      key={field.name}
      className={cn(field.wide && "md:col-span-2 xl:col-span-3")}
    >
      <FieldLabel htmlFor={id}>
        <span>{field.label}</span>
        {field.required && (
          <span className="text-destructive" aria-label="wajib">
            *
          </span>
        )}
      </FieldLabel>
      {control}
      {field.description && (
        <FieldDescription>{field.description}</FieldDescription>
      )}
    </Field>
  );
}

export function TambahDataPegawai({ type }: Props) {
  const config = EMPLOYEE_MODULES[type];
  const sections = useMemo(() => getSections(type), [type]);
  const [submitted, setSubmitted] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [entryCounts, setEntryCounts] = useState<Record<string, number>>(() =>
    sections.reduce<Record<string, number>>((counts, section) => {
      if (section.repeatable) counts[section.id] = 1;

      return counts;
    }, {}),
  );

  const activeSection = sections[activeSectionIndex];
  const requiredFields = sections[0].fields.filter((field) => field.required);
  const isFirstSection = activeSectionIndex === 0;
  const isLastSection = activeSectionIndex === sections.length - 1;

  function goToSection(index: number) {
    setActiveSectionIndex(index);
  }

  function goToPreviousSection() {
    setActiveSectionIndex((current) => Math.max(current - 1, 0));
  }

  function goToNextSection() {
    setActiveSectionIndex((current) =>
      Math.min(current + 1, sections.length - 1),
    );
  }

  function addEntry(sectionId: string) {
    setEntryCounts((current) => ({
      ...current,
      [sectionId]: (current[sectionId] ?? 1) + 1,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = toPayload(formData);

    console.log("Tambah data pegawai", {
      module: type,
      payload,
    });

    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-8">
      <div className="overflow-hidden rounded-xl border bg-card">
        <div className="border-b bg-[linear-gradient(120deg,#f8fafc,#ecfeff,#fff7ed)] p-5 sm:p-6 dark:bg-none">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <Badge
                variant="outline"
                className="border-teal-200 bg-white/70 text-teal-700"
              >
                <SparklesIcon data-icon="inline-start" />
                Form tambah pegawai
              </Badge>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Tambah Data Pegawai {config.title}
                </h1>
                <p className="text-sm leading-6 text-muted-foreground">
                  Lengkapi identitas utama, riwayat, dan hasil evaluasi dalam
                  satu form terpadu.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
              <Badge className="bg-teal-600 text-white hover:bg-teal-600">
                <BriefcaseBusinessIcon data-icon="inline-start" />
                {config.title}
              </Badge>
              <Badge variant="secondary">
                <BookOpenIcon data-icon="inline-start" />
                {sections.length} Section
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:p-6">
          <aside className="lg:sticky lg:top-4 lg:self-start">
            <Card className="rounded-lg bg-muted/30" size="sm">
              <CardHeader>
                <CardTitle className="text-sm">Navigasi Section</CardTitle>
                <CardDescription>
                  {requiredFields.length} field wajib pada data utama.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="grid gap-1">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => goToSection(index)}
                      className={cn(
                        "group flex items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground",
                        activeSectionIndex === index &&
                          "bg-background text-foreground shadow-sm",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-7 shrink-0 items-center justify-center rounded-lg ring-1",
                          section.accent,
                        )}
                      >
                        <section.icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1 truncate">
                        {section.title}
                      </span>
                      <span className="text-xs tabular-nums text-muted-foreground/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          <FieldGroup className="gap-6">
            {sections.map((section, index) => {
              const isActive = activeSectionIndex === index;
              const entries = Array.from({
                length: section.repeatable ? entryCounts[section.id] ?? 1 : 1,
              });

              return (
                <Card
                  key={section.id}
                  id={section.id}
                  className={cn(
                    "scroll-mt-6 rounded-lg shadow-none",
                    !isActive && "hidden",
                  )}
                >
                  <CardHeader className="gap-3 border-b">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-3">
                        <div
                          className={cn(
                            "flex size-10 shrink-0 items-center justify-center rounded-lg ring-1",
                            section.accent,
                          )}
                        >
                          <section.icon className="size-5" />
                        </div>
                        <div className="min-w-0 space-y-1">
                          <CardTitle>{section.title}</CardTitle>
                          <CardDescription>
                            {section.description}
                          </CardDescription>
                        </div>
                      </div>

                      <CardAction className="static col-auto row-auto justify-self-auto">
                        <Badge variant="outline" className="bg-background">
                          {String(index + 1).padStart(2, "0")}
                        </Badge>
                      </CardAction>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {entries.map((_, entryIndex) => (
                      <div key={entryIndex} className="space-y-4">
                        {section.repeatable && (
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary">
                              Data {entryIndex + 1}
                            </Badge>
                            <Separator className="flex-1" />
                          </div>
                        )}

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                          {section.fields.map((field) =>
                            renderField(section, field, isActive, entryIndex),
                          )}
                        </div>
                      </div>
                    ))}

                    {section.repeatable && section.addLabel && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => addEntry(section.id)}
                        className="border-dashed"
                      >
                        <PlusIcon data-icon="inline-start" />
                        {section.addLabel}
                      </Button>
                    )}

                    <Separator />

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm text-muted-foreground">
                        Section {activeSectionIndex + 1} dari {sections.length}:{" "}
                        {activeSection.title}
                      </p>

                      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
                        <Button
                          type="button"
                          variant="outline"
                          disabled={isFirstSection}
                          onClick={goToPreviousSection}
                        >
                          <ChevronLeftIcon data-icon="inline-start" />
                          Balik
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          disabled={isLastSection}
                          onClick={goToNextSection}
                        >
                          Next
                          <ChevronRightIcon data-icon="inline-end" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </FieldGroup>
        </div>
      </div>

      <div className="sticky bottom-3 z-10 rounded-xl border bg-background/90 p-3 shadow-lg backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FilePlus2Icon className="size-4 text-teal-600" />
            {submitted
              ? "Data terakhir sudah dikirim ke console."
              : "Submit sementara akan menampilkan payload di console."}
          </div>

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit" className="bg-teal-700 hover:bg-teal-800">
              <SaveIcon data-icon="inline-start" />
              Simpan Data Pegawai
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
