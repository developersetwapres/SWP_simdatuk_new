import { EditPegawai } from "@/components/pages/data-pegawai/edit";
import { EMPLOYEE_MODULES, EmployeeModule } from "@/constants/employee";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Pegawai",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; type: string }>;
}) {
  const { id, type } = await params;

  if (!(type in EMPLOYEE_MODULES)) {
    notFound();
  }

  return <EditPegawai id={id} type={type as EmployeeModule} />;
}
