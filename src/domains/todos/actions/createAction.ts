import db from '@utils/db';
import { successResult, failureResult } from '@utils/serviceResults';
import type { NewTodo, Todo } from '../types';

type Result = {
  success: boolean;
  todo: Todo;
};

// TODO: Pass userId once authentication is added
const createAction = async ({ title, complete }: NewTodo): Promise<Result> => {
  const user = await db.user.findFirst();

  if (!user) {
    return failureResult({ type: 'UserNotFound' }) as any;
  }

  const todo = await db.todo.create({
    data: {
      title,
      complete,
      user: { connect: { id: user.id } }
    }
  });

  return successResult({ todo });
};

export { createAction };
