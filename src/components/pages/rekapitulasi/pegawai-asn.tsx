"use client";

import { useQuery } from "@tanstack/react-query";
import { Building2 } from "lucide-react";

import { SectionCard } from "@/components/section-card";
import { getAsnRecapitulation } from "@/services/recapitulation.service";

export function PegawaiASN() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recapitulation-asn"],
    queryFn: getAsnRecapitulation,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) {
    return <div>Terjadi kesalahan.</div>;
  }

  return (
    <div className="space-y-6">
      <SectionCard
        key={}
        title={}
        total={}
        totalItem={}
        data={}
        icon={Building2}
      />
    </div>
  );
}
