import { Request, Response } from 'express';
import { validateSchema } from '@utils';
import { createAction } from '@domains/users/actions';
import { newUserSchema } from '../schemas';
import { userEntity } from '../entities';

const create = async (req: Request, res: Response) => {
  const error = 'should not be evaluated';
  try {
    throw 'should be evaluated';
  } catch (error) {
    debugger;
    // evaluate `error` to see 'should be evaluated'
  }
  const user = await validateSchema(req.body, newUserSchema);

  const result = await createAction(user);

  if (result.success) {
    const entity = userEntity(result.user);

    return res.status(201).json({
      ...result,
      user: entity
    });
  }

  return res.status(422).json(result);
};

export default create;
