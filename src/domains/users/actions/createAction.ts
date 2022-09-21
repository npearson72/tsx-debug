import db from '@utils/db';
import { successResult, failureResult } from '@utils/serviceResults';
import type { NewUser, User } from '../types';

type Result = {
  success: boolean;
  user: User;
};

const createAction = async ({
  firstName,
  lastName,
  email
}: NewUser): Promise<Result> => {
  try {
    const user = await db.user.create({
      data: {
        firstName,
        lastName,
        email
      }
    });

    return successResult({ user });
  } catch (e: any) {
    if (e.code && e.code === 'P2002') {
      return failureResult({ type: 'RecordNotUnique' }) as any;
    }

    throw e;
  }
};

export { createAction };
