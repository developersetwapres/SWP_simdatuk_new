export type HistoryModule =
  | "jabatan"
  | "golongan"
  | "pelatihan-struktural"
  | "pelatihan-fungsional"
  | "pelatihan-teknis"
  | "penghargaan"
  | "skp"
  | "ppk"
  | "hukuman-disiplin";

export interface HistoryConfig {
  title: string;
  endpoint: string;
  type?: 1 | 2 | 3;

  table: {
    name: string;
    period: string;
    extra?: string;
  };
}

export const HISTORY_MODULES: Record<HistoryModule, HistoryConfig> = {
  jabatan: {
    title: "Riwayat Jabatan",
    endpoint: "position-histories",

    table: {
      name: "Nama Riwayat Jabatan",
      period: "Periode Input Riwayat",
    },
  },

  golongan: {
    title: "Riwayat Golongan",
    endpoint: "grade-histories",

    table: {
      name: "Nama Riwayat Golongan",
      period: "Periode Input Riwayat",
    },
  },

  "pelatihan-struktural": {
    title: "Riwayat Pelatihan Struktural",
    endpoint: "training-histories",
    type: 1,

    table: {
      name: "Nama Diklat",
      period: "Periode Input Riwayat",
      extra: "Tanggal Pelaksanaan",
    },
  },

  "pelatihan-fungsional": {
    title: "Riwayat Pelatihan Fungsional",
    endpoint: "training-histories",
    type: 2,

    table: {
      name: "Nama Diklat",
      period: "Periode Input Riwayat",
      extra: "Tanggal Pelaksanaan",
    },
  },

  "pelatihan-teknis": {
    title: "Riwayat Pelatihan Teknis",
    endpoint: "training-histories",
    type: 3,

    table: {
      name: "Nama Diklat",
      period: "Periode Input Riwayat",
      extra: "Tanggal Pelaksanaan",
    },
  },

  penghargaan: {
    title: "Riwayat Penghargaan",
    endpoint: "recognition-histories",

    table: {
      name: "Nama Riwayat Penghargaan",
      period: "Periode Input Riwayat",
      extra: "Instansi Pemberi Penghargaan",
    },
  },

  skp: {
    title: "Riwayat SKP",
    endpoint: "target-histories",

    table: {
      name: "Nama Riwayat SKP",
      period: "Periode Input Riwayat",
      extra: "Periode Penilaian",
    },
  },

  ppk: {
    title: "Riwayat Penilaian Prestasi Kerja",
    endpoint: "performance-histories",

    table: {
      name: "Nama Riwayat PPK",
      period: "Periode Input Riwayat",
      extra: "Periode PPK",
    },
  },

  "hukuman-disiplin": {
    title: "Riwayat Hukuman Disiplin",
    endpoint: "disciplinary-histories",

    table: {
      name: "Nama Riwayat Hukuman Disiplin",
      period: "Periode Input Riwayat",
    },
  },
};
