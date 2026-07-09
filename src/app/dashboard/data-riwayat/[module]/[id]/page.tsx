import { notFound } from "next/navigation";

import { HISTORY_MODULES, type HistoryModule } from "@/constants/history";

import { HistoryDetail } from "@/components/pages/data-riwayat/detail/detail";

interface Props {
  params: Promise<{
    module: string;
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { module, id } = await params;

  if (!(module in HISTORY_MODULES)) {
    notFound();
  }

  return <HistoryDetail module={module as HistoryModule} id={Number(id)} />;
}
