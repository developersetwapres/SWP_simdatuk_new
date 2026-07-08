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
}

export const HISTORY_MODULES: Record<HistoryModule, HistoryConfig> = {
  jabatan: {
    title: "Riwayat Jabatan",
    endpoint: "position-histories",
  },

  golongan: {
    title: "Riwayat Golongan",
    endpoint: "grade-histories",
  },

  "pelatihan-struktural": {
    title: "Riwayat Pelatihan Struktural",
    endpoint: "training-histories",
    type: 1,
  },

  "pelatihan-fungsional": {
    title: "Riwayat Pelatihan Fungsional",
    endpoint: "training-histories",
    type: 2,
  },

  "pelatihan-teknis": {
    title: "Riwayat Pelatihan Teknis",
    endpoint: "training-histories",
    type: 3,
  },

  penghargaan: {
    title: "Riwayat Penghargaan",
    endpoint: "recognition-histories",
  },

  skp: {
    title: "Riwayat SKP",
    endpoint: "target-histories",
  },

  ppk: {
    title: "Riwayat Penilaian Prestasi Kerja",
    endpoint: "performance-histories",
  },

  "hukuman-disiplin": {
    title: "Riwayat Hukuman Disiplin",
    endpoint: "disciplinary-histories",
  },
};
