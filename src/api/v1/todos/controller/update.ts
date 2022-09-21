import { Request, Response } from 'express';
import { validateSchema } from '@utils';
import { updateAction } from '@domains/todos/actions';
import { updateTodoSchema } from '../schemas';
import { todoEntity } from '../entities';

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await validateSchema(
    { ...req.body, id, userId: 1 },
    updateTodoSchema
  );

  const result = await updateAction(todo);

  if (result.success) {
    const entity = todoEntity(result.todo);

    return res.status(201).json({
      ...result,
      todo: entity
    });
  }

  return res.status(422).json(result);
};

export default update;
