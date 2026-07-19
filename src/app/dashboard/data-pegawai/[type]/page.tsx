import { DataPegawai } from "@/components/pages/data-pegawai";
import { EMPLOYEE_MODULES, type EmployeeModule } from "@/constants/employee";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { TypeApp } from "@/types/app-container";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page({ params }: TypeApp) {
  const type = params.type as EmployeeModule;

  if (!(type in EMPLOYEE_MODULES)) {
    notFound();
  }

  return <DataPegawai type={type} />;
}
