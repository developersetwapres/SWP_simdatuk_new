export interface HistoryPagination {
  total: number;
  count: number | null;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: {
    first_page: string | null;
    last_page: string | null;
    next_page: string | null;
    prev_page: string | null;
  };
}

export interface HistoryItem {
  id: number;
  name: string;
  created_at: string;
  period_month: number | null;
  period_year: string | null;
  total: number;

  // Khusus Pelatihan
  start_date?: string | null;
  end_date?: string | null;

  // Khusus Penghargaan
  awarding_institution?: string | null;

  // Khusus SKP
  appraisal_period?: string | null;

  // Khusus PPK
  performance_period?: string | null;
}

export interface HistoryResponse {
  code: number;
  message: string;
  data: HistoryItem[];
  pagination: HistoryPagination;
}

export interface HistoryParams {
  page?: number;
  limit?: number;
  search?: string;

  /**
   * Khusus endpoint training-histories
   * 1 = Struktural
   * 2 = Fungsional
   * 3 = Teknis
   */
  type?: 1 | 2 | 3;
}
