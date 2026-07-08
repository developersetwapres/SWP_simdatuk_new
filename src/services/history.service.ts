import api from "@/lib/axios";
import type { HistoryParams, HistoryResponse } from "@/types/history";

export const getHistory = async (
  endpoint: string,
  params: HistoryParams,
): Promise<HistoryResponse> => {
  const { data } = await api.get<HistoryResponse>(`/${endpoint}`, {
    params,
  });

  return data;
};
