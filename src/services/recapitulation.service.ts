import api from "@/lib/axios";
import {
  ComparisonParams,
  ComparisonResponse,
  DiagramResponse,
  RecapitulationResponse,
} from "@/types/recapitulation";

export async function getEmployeeComposition() {
  const { data } = await api.get<RecapitulationResponse>("/recapitulations");
  return data;
}

export async function getRecapitulation(type: string) {
  const urlApi = (() => {
    switch (type) {
      case "komposisi-pegawai":
        return "recapitulations";

      case "pegawai-asn":
        return "recapitulations-asn";

      case "pegawai-non-asn":
        return "recapitulations-nonasn";

      case "pegawai-outsourcing":
        return "recapitulations-outsource";

      case "promosi-pegawai":
        return "promotions";
    }
  })();

  const { data } = await api.get<RecapitulationResponse>(`/${urlApi}`);
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
