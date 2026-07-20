"use client";

import { useQuery } from "@tanstack/react-query";

import { type EmployeeModule } from "@/constants/employee";
import { detailEmployee } from "@/services/employee.service";

interface Props {
  type: EmployeeModule;
}

export function DetailPegawai({ id }: { id: string }) {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["employees", id],

    queryFn: () => detailEmployee(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Terjadi kesalahan.</div>;
  }

  console.log(data);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Detail Pegawai</h1>
      <p className="mt-3 text-sm text-slate-600">
        Halaman detail pegawai belum diimplementasikan sepenuhnya.
      </p>
    </div>
  );
}
