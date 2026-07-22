"use client";

import { useQuery } from "@tanstack/react-query";
import { Building2 } from "lucide-react";
import { SectionCard } from "@/components/section-card";
import { getRecapitulation } from "@/services/recapitulation.service";

export function Rekapitulasi({ type }: { type: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: [type],
    queryFn: () => getRecapitulation(type),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) {
    return <div>Terjadi kesalahan.</div>;
  }

  return (
    <div className="space-y-6">
      {data.data.cards.map((card, index) => {
        return (
          <SectionCard
            key={index}
            title={card.name}
            total={card.total}
            totalItem={card.cards?.length}
            icon={Building2}
            data={card.cards}
          />
        );
      })}
    </div>
  );
}
