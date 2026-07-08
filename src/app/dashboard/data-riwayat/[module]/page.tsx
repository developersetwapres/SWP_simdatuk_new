import { notFound } from "next/navigation";
import { DataRiwayat } from "@/components/pages/data-riwayat/index";
import { HISTORY_MODULES } from "@/constants/history";

type Props = {
  params: Promise<{
    module: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { module } = await params;

  const config = HISTORY_MODULES[module];

  if (!config) {
    notFound();
  }

  return <DataRiwayat module={module} />;
}
