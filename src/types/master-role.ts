export interface Role {
  id: number;
  name: string;
}

export interface RoleResponse {
  code: number;
  message: string;
  data: Role[];
}
