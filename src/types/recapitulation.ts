export interface RecapitulationItem {
  id: number | string;
  name: string;
  total?: number;
  unoccupied?: number;
  available?: number;
  entity?: number;
  filled?: number;
  has_child?: boolean;
  type?: number;
  users?: unknown[];
  cards?: RecapitulationItem[];
}

export interface RecapitulationResponse {
  code: number;
  message: string;
  data: {
    name: string;
    total?: number;
    cards: RecapitulationItem[];
  };
}

export interface PromotionGroup {
  id: string;
  name: string;
  total: number;
  cards: {
    id: number;
    name: string;
    unoccupied: number;
  }[];
}

export interface PromotionResponse {
  code: number;
  message: string;
  data: PromotionGroup[];
}

export interface DiagramUser {
  id: number;
  name: string;
  title_prefix: string | null;
  title_suffix: string | null;
  position_effective_date: string | null;
  employee_id_number: string;
  employee_registration_number: string | null;
  type: number;
  photo_profile: string;
  position_name: string;
  echelon_name: string | null;
  echelon_effective_date: string | null;
  grade_name: string | null;
  grade_code: string | null;
  grade_effective_date: string | null;
}

export interface DiagramItem {
  id: number;
  name: string;
  type: number;
  available: number;
  entity: number;
  filled?: number;
  has_child: boolean;
  users: DiagramUser[];
}

export interface DiagramResponse {
  code: number;
  message: string;
  data: DiagramItem[];
}

export interface ComparisonParams {
  page?: number;
  limit?: number;
  search?: string;
  group_id?: string;
  echelon_id?: string;
  grade_id?: string;
  education_level?: string;
  max_age?: string;
  disciplinary_id?: string;
  cpns_year?: string;
  greade_year?: string;
  credit_score?: string;
  competency_point?: string;
}

export interface ComparisonEmployee {
  id: number;
  photo_profile: string;
  name: string;
  title_prefix: string | null;
  title_suffix: string | null;
  employee_id_number: string;
  employee_registration_number: string | null;
  position_name: string;
  echelon_name: string | null;
  echelon_effective_date: string | null;
  grade_name: string | null;
  grade_code: string | null;
  grade_effective_date: string | null;
  type: number;
}

export interface ComparisonResponse {
  code: number;
  message: string;
  data: ComparisonEmployee[];
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: {
      first_page: string;
      last_page: string;
      next_page: string | null;
      prev_page: string | null;
    };
  };
}
