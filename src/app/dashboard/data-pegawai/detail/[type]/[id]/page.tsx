import { DetailPegawai } from "@/components/pages/data-pegawai/detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Pegawai",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <DetailPegawai id={id} />;
}
