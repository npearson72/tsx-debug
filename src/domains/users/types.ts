export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface User extends NewUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
