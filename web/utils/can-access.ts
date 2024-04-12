import type { UserRole } from "~/types/user";

export function canAccess(roles: UserRole[], userRoles: UserRole[]): boolean {
  return roles.some((role) => userRoles.includes(role));
}
