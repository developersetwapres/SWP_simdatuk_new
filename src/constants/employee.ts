export type EmployeeModule = "asn" | "non-asn-perbantuan" | "outsourcing";

export interface EmployeeConfig {
  title: string;
  type: 1 | 2 | 3;

  table: {
    columns: string[];
  };
}

export const EMPLOYEE_MODULES: Record<EmployeeModule, EmployeeConfig> = {
  asn: {
    title: "ASN",
    type: 1,

    table: {
      columns: [
        "Foto",
        "Nama",
        "NIP / NRP",
        "Pangkat / Golongan",
        "Jabatan Terakhir",
      ],
    },
  },

  "non-asn-perbantuan": {
    title: "Non ASN",
    type: 2,

    table: {
      columns: ["Foto", "Nama", "NIP / NRP", "Jenis Perbantuan", "Jabatan"],
    },
  },

  outsourcing: {
    title: "Outsourcing",
    type: 3,

    table: {
      columns: ["Foto", "Nama", "NIP / NRP", "Jabatan", "Keterangan"],
    },
  },
};
