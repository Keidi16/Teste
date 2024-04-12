import type { UserRole } from "./user";

export type SettingItem = {
  index: number;
  name: string;
  path: string;
  icon: string;
  roles: UserRole[];
}