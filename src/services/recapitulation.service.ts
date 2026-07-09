import api from "@/lib/axios";
import {
  ComparisonParams,
  ComparisonResponse,
  DiagramResponse,
  PromotionResponse,
  RecapitulationResponse,
} from "@/types/recapitulation";

export async function getEmployeeComposition() {
  const { data } = await api.get<RecapitulationResponse>("/recapitulations");
  return data;
}

export async function getAsnRecapitulation() {
  const { data } = await api.get<RecapitulationResponse>(
    "/recapitulations-asn",
  );
  return data;
}

export async function getNonAsnRecapitulation() {
  const { data } = await api.get<RecapitulationResponse>(
    "/recapitulations-nonasn",
  );
  return data;
}

export async function getOutsourceRecapitulation() {
  const { data } = await api.get<RecapitulationResponse>(
    "/recapitulations-outsource",
  );
  return data;
}

/* -------------------------------------------------------------------------- */
/*                              Bandingkan Pegawai                            */
/* -------------------------------------------------------------------------- */

export async function getComparisons(params: ComparisonParams) {
  const { data } = await api.get<ComparisonResponse>("/comparisons", {
    params,
  });

  return data;
}

/* -------------------------------------------------------------------------- */
/*                                Peta Jabatan                                */
/* -------------------------------------------------------------------------- */

export async function getDiagrams(id?: number | string) {
  const { data } = await api.get<DiagramResponse>("/diagrams", {
    params: { id },
  });

  return data;
}

/* -------------------------------------------------------------------------- */
/*                              Promosi Pegawai                               */
/* -------------------------------------------------------------------------- */

export async function getPromotions() {
  const { data } = await api.get<PromotionResponse>("/promotions");
  return data;
}
