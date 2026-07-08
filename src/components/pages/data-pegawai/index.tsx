"use client";

import { DataTable } from "@/components/data-table";
import { getEmployees } from "@/services/employee.service";
import { useQuery } from "@tanstack/react-query";

type Props = {
  type: string;
};

const typeMap = {
  asn: 1,
  "non-asn-perbantuan": 2,
  outsourcing: 3,
} as const;

export function DataPegawai({ type }: Props) {
  const apiType = typeMap[type as keyof typeof typeMap];

  if (!apiType) {
    return <div>Tipe pegawai tidak ditemukan.</div>;
  }

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["employees", apiType],
    queryFn: () =>
      getEmployees({
        type: apiType,
        page: 1,
        limit: 50,
      }),
    select: (response) =>
      response.data.map((item) => ({
        id: item.id,
        foto: item.photo_profile,
        nama: item.name,
        nip: `${item.employee_id_number ?? "-"} / ${
          item.employee_registration_number ?? "-"
        }`,
        pangkatGolongan: item.grade_name ?? "-",
        jabatanTerakhir: item.position_name ?? "-",
      })),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Terjadi kesalahan.</div>;
  }

  return <DataTable data={data} />;
}
