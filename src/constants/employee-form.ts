export const EMPLOYEE_TYPE = {
  ASN: "asn",
  NON_ASN: "non-asn",
  OUTSOURCING: "outsourcing",
} as const;

export const EMPLOYEE_TYPE_OPTIONS = [
  {
    label: "ASN",
    value: EMPLOYEE_TYPE.ASN,
  },
  {
    label: "Non ASN",
    value: EMPLOYEE_TYPE.NON_ASN,
  },
  {
    label: "Outsourcing",
    value: EMPLOYEE_TYPE.OUTSOURCING,
  },
];

export const GENDER_OPTIONS = [
  {
    label: "Laki-laki",
    value: 1,
  },
  {
    label: "Perempuan",
    value: 0,
  },
];

export const STATUS_OPTIONS = [
  {
    label: "Aktif",
    value: 1,
  },
  {
    label: "Tidak Aktif",
    value: 0,
  },
];

export const YES_NO_OPTIONS = [
  {
    label: "Ya",
    value: 1,
  },
  {
    label: "Tidak",
    value: 0,
  },
];

export const RELIGION_OPTIONS = [
  { label: "Islam", value: "Islam" },
  { label: "Kristen", value: "Kristen" },
  { label: "Katolik", value: "Katolik" },
  { label: "Hindu", value: "Hindu" },
  { label: "Buddha", value: "Buddha" },
  { label: "Khonghucu", value: "Khonghucu" },
];

export const MARITAL_STATUS_OPTIONS = [
  {
    label: "Belum Menikah",
    value: "belum_menikah",
  },
  {
    label: "Menikah",
    value: "menikah",
  },
  {
    label: "Cerai Hidup",
    value: "cerai_hidup",
  },
  {
    label: "Cerai Mati",
    value: "cerai_mati",
  },
];
