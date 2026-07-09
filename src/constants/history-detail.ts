import { HistoryModule } from "./history";

export interface DetailField {
  label: string;
  key: string;
}

export interface TableColumn {
  label: string;
  key: string;
}

export interface HistoryDetailConfig {
  information: DetailField[];
  table: TableColumn[];
}

export const HISTORY_DETAIL: Record<HistoryModule, HistoryDetailConfig> = {
  jabatan: {
    information: [
      {
        label: "Nama Riwayat Jabatan",
        key: "name",
      },
      {
        label: "Periode Input Riwayat",
        key: "period",
      },
    ],

    table: [
      {
        label: "Nama Pegawai",
        key: "employee",
      },
      {
        label: "Jabatan",
        key: "position",
      },
      {
        label: "Jenjang Jabatan",
        key: "echelon",
      },
      {
        label: "Keterangan Jabatan",
        key: "position_status",
      },
      {
        label: "TMT Jabatan",
        key: "effective_date",
      },
      {
        label: "No SK Jabatan",
        key: "decree_number",
      },
    ],
  },

  golongan: {
    information: [
      {
        label: "Nama Riwayat Golongan",
        key: "name",
      },
      {
        label: "Periode Input Riwayat",
        key: "period",
      },
    ],

    table: [
      {
        label: "Nama Pegawai / NIP",
        key: "employee",
      },
      {
        label: "Pangkat / Golongan",
        key: "grade",
      },
      {
        label: "TMT Golongan",
        key: "effective_date",
      },
      {
        label: "No SK Golongan",
        key: "decree_number",
      },
      {
        label: "Status Golongan",
        key: "status",
      },
    ],
  },

  "pelatihan-struktural": {
    information: [
      {
        label: "Nama Diklat",
        key: "name",
      },
      {
        label: "Periode Input Riwayat",
        key: "period",
      },
      {
        label: "No Surat Perintah",
        key: "reference_number",
      },
      {
        label: "Jenjang",
        key: "level_name",
      },
      {
        label: "Tanggal Pelaksanaan",
        key: "training_date",
      },
      {
        label: "Penyelenggara",
        key: "organizer",
      },
      {
        label: "Keterangan",
        key: "description",
      },
      {
        label: "Jam Pelajaran",
        key: "duration",
      },
      {
        label: "Link Materi Pelatihan",
        key: "link",
      },
    ],

    table: [
      {
        label: "Nama Pegawai / NIP",
        key: "employee",
      },
      {
        label: "Sertifikat",
        key: "certificate",
      },
    ],
  },

  "pelatihan-fungsional": {
    information: [
      {
        label: "Nama Diklat",
        key: "name",
      },
      {
        label: "Periode Input Riwayat",
        key: "period",
      },
      {
        label: "No Surat Perintah",
        key: "reference_number",
      },
      {
        label: "Jenjang",
        key: "level_name",
      },
      {
        label: "Tanggal Pelaksanaan",
        key: "training_date",
      },
      {
        label: "Penyelenggara",
        key: "organizer",
      },
      {
        label: "Keterangan",
        key: "description",
      },
      {
        label: "Jam Pelajaran",
        key: "duration",
      },
      {
        label: "Link Materi Pelatihan",
        key: "link",
      },
    ],

    table: [
      {
        label: "Nama Pegawai / NIP",
        key: "employee",
      },
      {
        label: "Sertifikat",
        key: "certificate",
      },
    ],
  },

  "pelatihan-teknis": {
    information: [
      {
        label: "Nama Diklat",
        key: "name",
      },
      {
        label: "Periode Input Riwayat",
        key: "period",
      },
      {
        label: "No Surat Perintah",
        key: "reference_number",
      },
      {
        label: "Jenjang",
        key: "level_name",
      },
      {
        label: "Tanggal Pelaksanaan",
        key: "training_date",
      },
      {
        label: "Penyelenggara",
        key: "organizer",
      },
      {
        label: "Keterangan",
        key: "description",
      },
      {
        label: "Jam Pelajaran",
        key: "duration",
      },
      {
        label: "Link Materi Pelatihan",
        key: "link",
      },
    ],

    table: [
      {
        label: "Nama Pegawai / NIP",
        key: "employee",
      },
      {
        label: "Sertifikat",
        key: "certificate",
      },
    ],
  },

  penghargaan: {
    information: [
      {
        label: "Nama Penghargaan",
        key: "recognition_name",
      },
      {
        label: "Periode Riwayat",
        key: "period",
      },
      {
        label: "Keterangan Penghargaan",
        key: "description",
      },
      {
        label: "Jenis SK",
        key: "type_of_decree",
      },
      {
        label: "Tanggal SK",
        key: "decree_date",
      },
      {
        label: "No SK Penghargaan",
        key: "decree_number",
      },
      {
        label: "Tahun SK",
        key: "decree_year",
      },
      {
        label: "Instansi Pemberi Penghargaan",
        key: "awarding_institution",
      },
    ],

    table: [
      {
        label: "Nama Pegawai / NIP",
        key: "employee",
      },
    ],
  },

  skp: {
    information: [
      {
        label: "Nama Riwayat SKP",
        key: "name",
      },
      {
        label: "Periode Riwayat",
        key: "period",
      },
      {
        label: "Periode Penilaian",
        key: "appraisal_period",
      },
    ],

    table: [],
  },

  ppk: {
    information: [
      {
        label: "Nama Riwayat PPK",
        key: "name",
      },
      {
        label: "Periode Riwayat",
        key: "period",
      },
      {
        label: "Periode PPK",
        key: "performance_period",
      },
    ],

    table: [
      {
        label: "Nama Pegawai / NIP",
        key: "employee",
      },
      {
        label: "Nilai Prestasi Kerja",
        key: "work_performance_score",
      },
      {
        label: "Keterangan",
        key: "description",
      },
    ],
  },

  "hukuman-disiplin": {
    information: [
      {
        label: "Nama Riwayat Hukuman Disiplin",
        key: "name",
      },
      {
        label: "Periode Riwayat",
        key: "period",
      },
    ],

    table: [
      {
        label: "Nama Pegawai / NIP",
        key: "employee",
      },
      {
        label: "Pangkat / Golongan",
        key: "grade",
      },
      {
        label: "Jabatan",
        key: "position",
      },
      {
        label: "Jenis Hukuman",
        key: "disciplinary_type_name",
      },
      {
        label: "Tingkat Hukuman",
        key: "disciplinary_type_description",
      },
      {
        label: "Potongan Tukin",
        key: "performance_allowance_deduction",
      },
      {
        label: "Durasi",
        key: "performance_allowance_duration",
      },
      {
        label: "No SK",
        key: "decree_number",
      },
      {
        label: "Tanggal SK",
        key: "date_of_decree",
      },
      {
        label: "Tanggal Hukuman",
        key: "start_date",
      },
      {
        label: "Pejabat",
        key: "authorizing_officer",
      },
      {
        label: "Nama Pejabat",
        key: "name_of_authorizing_officer",
      },
      {
        label: "Keterangan",
        key: "description",
      },
    ],
  },
};
