import { EMPLOYEE_MODULES, EmployeeModule } from "@/constants/employee";
import { getEmploymentTypes } from "@/services/employee.service";
import { useQuery } from "@tanstack/react-query";

interface Props {
  type: EmployeeModule;
  id: number;
}

export function EditPegawai({ id, type }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Edit Pegawai</h1>
      <p className="mt-3 text-sm text-slate-600">
        Halaman edit pegawai belum diimplementasikan sepenuhnya.
      </p>
    </div>
  );
}
