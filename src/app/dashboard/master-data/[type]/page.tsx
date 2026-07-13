import { MasterData } from "@/components/pages/master-data";

type Props = {
  params: Promise<{
    type: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { type } = await params;

  return <MasterData type={type} />;
}
