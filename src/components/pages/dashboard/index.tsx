"use client";

import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

import rawData from "./data.json";

const data = rawData.map((item) => ({
  id: item.id,
  foto: "",
  nama: item.header,
  nip: item.target,
  pangkatGolongan: item.type,
  jabatanTerakhir: item.status,
}));

export function Dashboard() {
  return (
    <div className="max-w-screen">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </div>
  );
}
