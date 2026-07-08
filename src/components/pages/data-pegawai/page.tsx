"use client";

import { DataTable } from "@/components/data-table";
import { getEmployees } from "@/services/employee.service";
import { useQuery } from "@tanstack/react-query";

export function DataPegawai() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["employees"],
    queryFn: () =>
      getEmployees({
        page: 1,
        limit: 10,
        type: 1,
      }),
  });

  const getData = data?.data.map((item) => ({
    id: item.id,
    foto: item.photo_profile,
    nama: item.name,
    nip: item.employee_id_number + "/ " + item.employee_registration_number,
    pangkatGolongan: item.grade_name,
    jabatanTerakhir: item.position_name,
  }));

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Terjadi kesalahan.</div>;

  return (
    <div className="max-w-screen">
      <DataTable data={getData} />
    </div>
  );
}
