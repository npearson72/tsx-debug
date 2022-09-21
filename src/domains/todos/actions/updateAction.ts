import db from '@utils/db';
import { successResult, failureResult } from '@utils/serviceResults';
import type { Todo } from '../types';

const updateAction = async ({ id, title, complete }: Partial<Todo>) => {
  try {
    const todo = await db.todo.update({
      where: { id },
      data: { title, complete }
    });

    return successResult({ todo });
  } catch (e: any) {
    if (e.code && e.code === 'P2025') {
      return failureResult({ type: 'RecordNotFound' });
    }

    throw e;
  }
};

export { updateAction };
