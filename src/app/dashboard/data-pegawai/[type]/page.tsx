import { DataPegawai } from "@/components/pages/data-pegawai";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  return <DataPegawai type={type} />;
}
