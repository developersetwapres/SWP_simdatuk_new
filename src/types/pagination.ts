export interface PaginationLinks {
  first_page: string | null;
  last_page: string | null;
  next_page: string | null;
  prev_page: string | null;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: PaginationLinks;
}
