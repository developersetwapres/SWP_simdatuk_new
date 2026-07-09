export interface HistoryUser {
  id: number;
  user_id: number;
  name: string;
  employee_id_number: string;
  position: string | null;

  group_id: number | null;
  group_name: string | null;

  echelon: number | null;
  position_status: number | null;

  effective_date: string | null;

  decree: string | null;
  decree_document: string | null;
  decree_number: string | null;

  type_decree_id: number | null;
  type_decree_name: string | null;

  type_termination_decree_id: number | null;
  type_termination_decree_name: string | null;

  decree_date: string | null;

  termination_date: string | null;
  termination_decree: string | null;
  termination_decree_number: string | null;
  termination_decree_date: string | null;

  status: number;
}

export interface HistoryDetail {
  id: number;
  name: string;
  period_month: number | null;
  period_year: string | null;
  created_at: string;

  users: HistoryUser[];
}

export interface HistoryDetailResponse {
  code: number;
  message: string;
  data: HistoryDetail;
}
