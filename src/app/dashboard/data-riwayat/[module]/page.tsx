import { notFound } from "next/navigation";
import { DataRiwayat } from "@/components/pages/data-riwayat/index";
import { HISTORY_MODULES, type HistoryModule } from "@/constants/history";

type Props = {
  params: {
    module: string;
  };
};

export default async function Page({ params }: Props) {
  const module = params.module as HistoryModule;

  const config = HISTORY_MODULES[module];

  if (!config) {
    notFound();
  }

  return <DataRiwayat module={module} />;
}
