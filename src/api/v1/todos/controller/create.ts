import { Request, Response } from 'express';
import { validateSchema } from '@utils';
import { createAction } from '@domains/todos/actions';
import { newTodoSchema } from '../schemas';
import { todoEntity } from '../entities';

const create = async (req: Request, res: Response) => {
  const todo = await validateSchema({ ...req.body, userId: 1 }, newTodoSchema);

  const result = await createAction(todo);

  if (result.success) {
    const entity = todoEntity(result.todo);

    return res.status(201).json({
      ...result,
      todo: entity
    });
  }

  return res.status(422).json(result);
};

export default create;
