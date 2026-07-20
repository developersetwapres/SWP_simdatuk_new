import { DetailPegawai } from "@/components/pages/data-pegawai/detail";
import { EMPLOYEE_MODULES, type EmployeeModule } from "@/constants/employee";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Detail Pegawai",
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

  return <DetailPegawai id={id} type={type as EmployeeModule} />;
}
