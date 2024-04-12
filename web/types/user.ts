export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  roles: UserRole[];
  avatar: string;
  emailVerifiedAt: string | null;
  hasCompany: boolean;
};

export type UserRole = "super" | "admin" | "analista" | "auditor";
