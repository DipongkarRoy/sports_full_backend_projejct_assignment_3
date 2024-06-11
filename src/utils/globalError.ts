import { NextFunction, Request, Response } from 'express';

const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(500).json({
      success: false,
      massage: 'wrong went data',
      error: err,
    });
  } catch (error) {
    next(error);
  }
};

export default globalError;
