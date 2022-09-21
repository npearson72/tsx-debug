import { Request, Response, NextFunction } from 'express';

const asyncCatcher = (first: any, ...rest: any[]) => {
  const actions = [first, ...rest];

  return actions.reduce((obj, action) => {
    return {
      ...obj,
      [action.name]: (req: Request, res: Response, next: NextFunction) => {
        return action(req, res, next).catch(next);
      }
    };
  }, {});
};

export { asyncCatcher };
