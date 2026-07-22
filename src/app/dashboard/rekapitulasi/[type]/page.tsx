import { Rekapitulasi } from "@/components/pages/rekapitulasi";
import urlApi from "@/constants/recapitulation";
import { TypeApp } from "@/types/app-container";
import { notFound } from "next/navigation";

export default async function Page({ params }: TypeApp) {
  const { type } = await params;

  if (!type) {
    notFound();
  }

  return <Rekapitulasi urlApi={urlApi(type)} />;
}
