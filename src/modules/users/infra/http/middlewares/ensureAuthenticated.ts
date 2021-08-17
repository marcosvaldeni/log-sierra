import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../../../../../config/auth';

import AppError from '../../../../../shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 402);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token', 401);
  }
}
