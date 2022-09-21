import { Request, Response, NextFunction } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === 'ValidationError') {
    return res.status(422).send({
      success: false,
      error: {
        type: err.name,
        errors: err.inner.map((e: any) => ({
          path: e.path,
          message: e.message
        }))
      }
    });
  }

  return res.status(500).send({
    success: false,
    error: {
      code: 'UnexpectedError'
    }
  });
};

export { globalErrorHandler };
