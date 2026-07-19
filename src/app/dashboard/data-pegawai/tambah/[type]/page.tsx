import { EmployeeForm } from "@/components/pages/data-pegawai/form/index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tambah Data Pegawai | SIMDATUK",
};

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  return <EmployeeForm type={type as any} />;
}
