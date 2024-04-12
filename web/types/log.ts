export interface Log {
  id: string;
  userId: string;
  deviceIP: string;
  method: string;
  statusCode: number;
  endpoint: string;
  sessionId: string;
  companyId: string;
  createdAt: string;
  user: User;
}

interface User {
  avatar: string;
  name: string;
  email: string;
  roles: Array<string>;
}
