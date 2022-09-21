import { Request, Response } from 'express';
import db from '@utils/db';
import { todoEntities } from '../entities';

const getAll = async (_req: Request, res: Response) => {
  const todos = await db.todo.findMany({ orderBy: { id: 'asc' } });

  const entities = todoEntities(todos);

  res.status(200).json({ success: true, todos: entities });
};

export default getAll;
