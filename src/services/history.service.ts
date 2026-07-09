import api from "@/lib/axios";
import type { HistoryParams, HistoryResponse } from "@/types/history";
import { HistoryDetailResponse } from "@/types/history-detail";

export const getHistory = async (
  endpoint: string,
  params: HistoryParams,
): Promise<HistoryResponse> => {
  const { data } = await api.get<HistoryResponse>(`/${endpoint}`, {
    params,
  });

  return data;
};

export const getHistoryDetail = async (
  endpoint: string,
  id: number,
): Promise<HistoryDetailResponse> => {
  const { data } = await api.get(`${endpoint}/${id}`);

  return data;
};
