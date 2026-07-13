import { TambahDataPegawai } from "@/components/pages/tambah-data-pegawai";
import { EMPLOYEE_MODULES, type EmployeeModule } from "@/constants/employee";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

function isEmployeeModule(value: string): value is EmployeeModule {
  return value in EMPLOYEE_MODULES;
}

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type: rawType } = await params;

  if (!isEmployeeModule(rawType)) {
    notFound();
  }

  return <TambahDataPegawai type={rawType} />;
}
