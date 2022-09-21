import { Request, Response } from 'express';
import db from '@utils/db';
import { userEntities } from '../entities';

const getAll = async (_req: Request, res: Response) => {
  const users = await db.user.findMany({ orderBy: { id: 'asc' } });

  const entities = userEntities(users);

  res.status(200).json({ success: true, users: entities });
};

export default getAll;
