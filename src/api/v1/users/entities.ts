import type { User } from '@domains/users/types';

type UserEntity = Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>;

const userEntity = (user: User): UserEntity => {
  const { id, firstName, lastName, email } = user;

  return { id, firstName, lastName, email };
};

const userEntities = (users: User[]) => {
  return users.map(user => userEntity(user));
};

export { userEntity, userEntities };
