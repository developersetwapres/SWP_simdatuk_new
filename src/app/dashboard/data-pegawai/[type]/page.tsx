import { DataPegawai } from "@/components/pages/data-pegawai";
import { EMPLOYEE_MODULES, type EmployeeModule } from "@/constants/employee";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface PageProps {
  params: {
    type: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { type } = await params;

  if (!(type in EMPLOYEE_MODULES)) {
    notFound();
  }

  return <DataPegawai type={type} />;
}
