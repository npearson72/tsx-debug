import { Request, Response } from 'express';
import { destroyAction } from '@domains/users/actions';

const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await destroyAction({ id });

  if (result.success) {
    return res.sendStatus(200);
  }

  return res.status(422).json(result);
};

export default destroy;
