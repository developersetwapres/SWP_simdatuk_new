import { DataPegawai } from "@/components/pages/data-pegawai/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return <DataPegawai />;
}
