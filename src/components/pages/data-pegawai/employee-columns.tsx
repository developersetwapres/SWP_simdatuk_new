"use client";

import Image from "next/image";

import { EmployeeModule } from "@/constants/employee";
import { Employee } from "@/types/employee";

export interface EmployeeColumn {
  header: string;
  cell: (employee: Employee) => React.ReactNode;
}

function renderPhoto(employee: Employee) {
  return "";
  // <Image
  //   src={employee.photo_profile || "/images/avatar-placeholder.png"}
  //   alt={employee.name ?? "Pegawai"}
  //   width={40}
  //   height={40}
  //   className="h-10 w-10 rounded-full object-cover"
  // />
}

function renderName(employee: Employee) {
  return <span className="font-medium">{employee.name ?? "-"}</span>;
}

function renderIdentity(employee: Employee) {
  const nip = employee.employee_id_number ?? "-";
  const nrp = employee.employee_registration_number;

  return nrp ? `${nip} / ${nrp}` : nip;
}

export function getEmployeeColumns(module: EmployeeModule): EmployeeColumn[] {
  switch (module) {
    case "asn":
      return [
        {
          header: "Foto",
          cell: renderPhoto,
        },
        {
          header: "Nama",
          cell: renderName,
        },
        {
          header: "NIP / NRP",
          cell: renderIdentity,
        },
        {
          header: "Pangkat / Golongan",
          cell: (employee) => employee.grade_name ?? "-",
        },
        {
          header: "Jabatan Terakhir",
          cell: (employee) => employee.position_name ?? "-",
        },
      ];

    case "non-asn-perbantuan":
      return [
        {
          header: "Foto",
          cell: renderPhoto,
        },
        {
          header: "Nama",
          cell: renderName,
        },
        {
          header: "NIP / NRP",
          cell: renderIdentity,
        },
        {
          header: "Jenis Perbantuan",
          cell: (employee) => employee.employment_type ?? "-",
        },
        {
          header: "Jabatan",
          cell: (employee) => employee.position_name ?? "-",
        },
      ];

    case "outsourcing":
      return [
        {
          header: "Foto",
          cell: renderPhoto,
        },
        {
          header: "Nama",
          cell: renderName,
        },
        {
          header: "NIP / NRP",
          cell: renderIdentity,
        },
        {
          header: "Jabatan",
          cell: (employee) => employee.position_name ?? "-",
        },
        {
          header: "Keterangan",
          cell: (employee) => employee.description ?? "-",
        },
      ];

    default:
      return [];
  }
}
