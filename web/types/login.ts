import type { User } from "./user";

export type LoginResponse = {
  token: string;
  user: User;
} 