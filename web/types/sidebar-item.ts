import type { UserRole } from "./user";

export type SidebarItem = {
  name: string;
  icon: string;
  to: string;
  roles: UserRole[];
}